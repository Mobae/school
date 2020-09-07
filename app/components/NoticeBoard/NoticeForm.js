import React, { Fragment, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Paragraph, TextInput, Button } from 'react-native-paper';

const NoticeForm = () => {
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <Fragment>
      <TextInput
        label="Title"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={desc}
        onChangeText={(desc) => setDesc(desc)}
        mode="outlined"
        style={styles.input}
        multiline={true}
        numberOfLines={15}
      />
      <Button
        icon="content-save"
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={styles.save}
      >
        Save
      </Button>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
  save: {
    marginTop: 20,
    width: 100,
    alignSelf: 'flex-end',
    right: 10,
  },
});

export default NoticeForm;
