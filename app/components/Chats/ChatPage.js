import React, { Fragment, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import io from "socket.io-client";

import { URL } from "../../config";

const ChatPage = () => {
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const socket = io(URL);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.chat}></View>
      <View style={styles.input}>
        <IconButton icon="plus" size={30} />
        <TextInput
          value={chatText}
          placeholder="Send Message"
          style={{ width: "100%" }}
          onChangeText={(chatText) => setChatText(chatText)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  chat: {
    // height: '100%',
  },
  input: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});

export default ChatPage;
