import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

import { URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    const socket = io(URL);
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Aryan Singh",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user._id,
      }}
    />
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
