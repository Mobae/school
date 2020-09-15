import * as React from 'react';
import axios from 'axios';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import adminStyles from "../admin/AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Files = () => {

  const url = "https://school-server-testing.herokuapp.com";
  const [ files, setFiles ] = React.useState(null);

  const getFiles = async () => {
    try {
      let res = await axios.get( url + "/documents" );
      const files_ = res.data.files;
      console.log(files_);
      setFiles(files_);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getFiles();
    console.log(files);
  }, [])

  return (
    <React.Fragment>
      <View style={styles.viewStyle} >
        {
          files ? (
            files.map((file) => (
              <TouchableOpacity key={file._id}>
                <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
                  <Card.Content>
                    <Title>{file.caption}</Title>
                    <Paragraph>{file.filename}</Paragraph>
                    <Paragraph>Subject:</Paragraph>
                    <View style={{ flexDirection: 'row' }}>
                      <Paragraph>Date:</Paragraph>
                      <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
                    </View>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))
          ) : (
            <Card style={adminStyles.card}>
                <Card.Title 
                    title="Loading...."
                    left={LeftContent} 
                />
            </Card>
          )
        }
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  }
})

export default Files;
