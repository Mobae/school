import React, { Fragment, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const ChatPage = () => {
  const [chatText, setChatText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.chat}></View>
      <View style={styles.input}>
        <IconButton icon="plus" size={30} />
        <TextInput
          value={chatText}
          placeholder="Send Message"
          style={{ width: '100%' }}
          onChangeText={(chatText) => setChatText(chatText)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  chat: {
    // height: '100%',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});

export default ChatPage;
