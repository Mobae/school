import * as React from 'react';
import axios from 'axios';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  ActivityIndicator,
  FAB,
  Searchbar,
  Button,
} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import adminStyles from '../admin/AdminStyles';
import { AuthContext } from '../../context/AuthContext';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Files = ({ navigation, route }) => {
  const url = 'https://school-server-testing.herokuapp.com';
  const [files, setFiles] = React.useState(null);
  const [filtered, setFiltered] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [flag, setFlag] = React.useState(false);
  const { authState } = React.useContext(AuthContext);
  const { user } = authState;

  const { class_ } = route.params;

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const getFiles = async () => {
    try {
      let res = await axios.get(url + '/documents/class/' + class_);
      const files_ = res.data.files;
      setFiles(files_);
      setSearchQuery(' ');
      setSearchQuery('');
      console.log(date);
    } catch (err) {
      console.log(err);
    }
  };

  const download = async (filename) => {
    const headers = {
      'Content-Disposition': `attachment;filename=${filename}`,
      'Content-Type': 'application/octet-stream',
    };
    console.log(
      `https://school-server-testing.herokuapp.com/documents/file/${filename}`
    );
    const res = await axios.get(
      `https://school-server-testing.herokuapp.com/documents/file/${filename}`,
      headers
    );

    console.log(res);
  };

  React.useEffect(() => {
    getFiles();
  }, [flag]);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFiltered(files);
    } else {
      setFiltered(
        files.filter((file) => {
          if (file.caption.toLowerCase().includes(searchQuery.toLowerCase())) {
            return file;
          }
        })
      );
    }
  }, [searchQuery]);

  return (
    <React.Fragment>
      <Searchbar
        placeholder="Search class.."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        <View style={styles.viewStyle}>
          {filtered ? (
            filtered.map((file) => (
              <View key={file._id}>
                <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
                  <TouchableRipple onPress={() => {}}>
                    <React.Fragment>
                      <Card.Content>
                        <Title>{file.caption}</Title>

                        <Paragraph>Teacher :{file.teacherName} </Paragraph>
                        <View
                        // style={{
                        //   display: 'flex',
                        //   flexDirection: 'column',
                        // }}
                        >
                          <Paragraph>
                            Date: {file.createdAt.slice(0, 10)}
                          </Paragraph>
                          <Paragraph
                            style={{
                              // alignSelf: 'flex-end',
                              marginBottom: 10,
                            }}
                          >
                            Size: {parseInt(file.length) / 1000} kb
                          </Paragraph>
                          <Button
                            icon="folder"
                            onPress={() => download(file.filename)}
                          >
                            Download
                          </Button>
                        </View>
                      </Card.Content>
                    </React.Fragment>
                  </TouchableRipple>
                </Card>
              </View>
            ))
          ) : (
            <View style={styles.container}>
              <ActivityIndicator
                animating={true}
                size="large"
                style={styles.loading}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() =>
          navigation.navigate('Add', {
            classId: class_,
            teacherId: user._id,
            flag,
            setFlag,
          })
        }
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Files;
