import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";

import * as DocumentPicker from "expo-document-picker";

const Add = () => {
  const [file, setFile] = React.useState(null);

  const uploadFile = async () => {
    try {
      const data = new FormData();
      data.append("classId", "5f6252205181b70004f5d909");
      data.append("teacherId", "5f6250b55181b70004f5d906");
      data.append("caption", "from app");
      data.append("file", file);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      };
      const url = "https://school-server-testing.herokuapp.com/documents/";

      const res = await axios.post(url, data, config);
      // const res = await axios.get(url);
      console.log(res.data);

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
      console.log('res : ' + JSON.stringify(res));

      setFile(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button onPress={selFile}>Press</Button>
      <Button onPress={uploadFile}>submit</Button>
    </View>
  );
};

export default Add;
