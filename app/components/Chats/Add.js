import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";
import axios from "axios";

import * as DocumentPicker from "expo-document-picker";

const Add = ({ navigation, route }) => {
  const [file, setFile] = React.useState(null);
  const [ caption, setCaption ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);
  const url = "http://school-server-testing.herokuapp.com/documents/";

  const { classId, teacherId, flag } = route.params;

  const uploadFile = async () => {
    try {
      setLoading(true);
      file.type = 'application/pdf'
      let data = new FormData();
      data.append("classId", classId);
      data.append("teacherId", teacherId);
      data.append("caption", caption);
      data.append("file", file);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      };
      const res = await axios.post(url, data, config);
      console.log(res.data);

      if(res.data.message == "File already exists"){
        alert('A file with this caption already exists !!!');
        navigation.navigate('TeacherFileView')
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

  if(!loading){
    return (
      <View>
        <TextInput
          mode="outlined"
          label="Name of assignment..."
          onChangeText={(val) => setCaption(val)}
          value={caption}
        />
        <Text></Text>
        <TextInput
          onPress={selFile}
          onFocus={selFile}
          mode="outlined"
          disabled
          label="File"
          value={file==null ? 'Please select a file' : file.name}
        />
        {
          file == null ? (
            <Button onPress={selFile}>Select a file</Button>
          ) : (
            <Button onPress={uploadFile}>submit</Button>
          )
        }
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
});

export default Add;
