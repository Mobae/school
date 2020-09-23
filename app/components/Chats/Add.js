import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button,
  TextInput,
  ActivityIndicator,
  Paragraph,
} from 'react-native-paper';
import axios from 'axios';
import { URL } from '../../config';

import * as DocumentPicker from 'expo-document-picker';

const Add = ({ navigation, route }) => {
  const [file, setFile] = React.useState(null);
  const [caption, setCaption] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const url = URL + '/documents/';

  const { classId, teacherId, flag } = route.params;

  const uploadFile = async () => {
    try {
      setLoading(true);
      file.type = 'application/pdf';
      let data = new FormData();
      data.append('classId', classId);
      data.append('teacherId', teacherId);
      data.append('caption', caption);
      data.append('file', file);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      };
      const res = await axios.post(url, data, config);
      console.log(res.data);

      if (res.data.message == 'File already exists') {
        alert('A file with this caption already exists !!!');
        navigation.navigate('TeacherFileView');
      } else {
        route.params.setFlag(!flag);
        navigation.navigate('TeacherFileView');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const selFile = async () => {
    try {
      DocumentPicker.getDocumentAsync().then((res) => {
        console.log(res);
        setFile(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!loading) {
    return (
      <View style={styles.viewStyle}>
        <TextInput
          mode="outlined"
          label="Name of assignment..."
          onChangeText={(val) => setCaption(val)}
          value={caption}
        />
        <Text></Text>
        {file == null ? null : (
          <TextInput
            onPress={selFile}
            onFocus={selFile}
            mode="outlined"
            disabled
            label="File"
            value={file.name}
          />
        )}

        <View style={{ marginTop: 20, widht: '100%' }}>
          {file == null ? (
            <Button
              onPress={selFile}
              icon="file"
              mode="contained"
              color="#159957"
              style={styles.btn}
            >
              Select a file
            </Button>
          ) : (
            <Button
              onPress={uploadFile}
              icon="check-decagram"
              mode="contained"
              color="#159957"
              style={styles.btn}
            >
              submit
            </Button>
          )}

          <Paragraph style={{ marginTop: 20 }}>
            Note: Please Upload a .pdf file
          </Paragraph>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loading}
        />
      </View>
    );
  }
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
  btn: {
    width: 200,
    alignSelf: 'center',
  },
});

export default Add;
