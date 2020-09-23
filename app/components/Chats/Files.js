import * as React from 'react';
import axios from 'axios';
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
  ActivityIndicator,
} from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { URL } from '../../config';
import adminStyles from '../admin/AdminStyles';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Files = () => {
  const url = URL;
  const [files, setFiles] = React.useState(null);

  const getFiles = async () => {
    try {
      let res = await axios.get(url + '/documents');
      const files_ = res.data.files;
      console.log(files_);
      setFiles(files_);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getFiles();
    console.log(files);
  }, []);

  return (
    <React.Fragment>
      <View style={styles.viewStyle}>
        {files ? (
          files.map((file) => (
            <View key={file._id}>
              <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
                <TouchableRipple onPress={() => {}}>
                  <React.Fragment>
                    <Card.Content>
                      <Title>{file.caption}</Title>
                      <Paragraph>{file.filename}</Paragraph>
                      <Paragraph>Subject:</Paragraph>
                      <View style={{ flexDirection: 'row' }}>
                        <Paragraph>Date:</Paragraph>
                        <Paragraph
                          style={{ marginLeft: 160, marginBottom: 10 }}
                        >
                          Size:
                        </Paragraph>
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
});

export default Files;
