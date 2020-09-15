import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

import { URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";

let socket;

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    socket = io(URL);
    socket.emit("join", user.class_);
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
    socket.on("message", (data) => {
      console.log(data);
    });
    return () => {
      socket.close();
    };
  }, []);
  // const onSend = useCallback((messages = []) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages)
  //   );
  // }, []);

  const onSend = (msg) => {
    socket.emit("sendMessage", { text: msg[0].text, room: user.class_ });
  };

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
