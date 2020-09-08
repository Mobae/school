import React, { Fragment, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Paragraph,
  TextInput,
  Button,
  RadioButton,
  Title,
  Dialog,
  Portal,
  Provider as PaperProvider,
} from 'react-native-paper';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';

import axios from 'axios';
import { add } from 'react-native-reanimated';

const NoticeForm = (props) => {
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');
  const [value, setValue] = useState('');
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const {
    authState: {
      user: { rank },
    },
  } = useContext(AuthContext);

  let { date } = props;
  date = new Date(date).toDateString();

  const headers = {
    'Content-Type': 'application/json',
  };

  const notice = JSON.stringify({
    title: text,
    description: desc,
    author: 'author',
    date: date,
  });

  const addNotice = async () => {
    try {
      const res = await axios.post(URL + `/${value}`, notice, headers);
      console.log(res.config.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PaperProvider>
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
        {/* {rank === '0' ? (
          <View style={styles.radioGrp}>
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}
            >
              <View style={styles.radio}>
                <RadioButton value="SchoolNotice" color="#6200EE" />
                <Paragraph>School Notice</Paragraph>
              </View>
              <View style={styles.radio}>
                <RadioButton value="ClassNotice" color="#6200EE" />
                <Paragraph>Class Notice</Paragraph>
              </View>
            </RadioButton.Group>
          </View>
        ) : null} */}

        <View style={styles.radioGrp}>
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View style={styles.radio}>
              <RadioButton value="schoolNotice" color="#6200EE" />
              <Paragraph>School Notice</Paragraph>
            </View>
            <View style={styles.radio}>
              <RadioButton value="classNotice" color="#6200EE" />
              <Paragraph>Class Notice</Paragraph>
            </View>
          </RadioButton.Group>
        </View>
        <Button
          icon="content-save"
          mode="contained"
          onPress={showDialog}
          style={styles.save}
        >
          Save
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Confirm</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Are You Sure?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  hideDialog();
                  addNotice();
                }}
              >
                Yes
              </Button>
              <Button onPress={hideDialog}>No</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Fragment>
    </PaperProvider>
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
  radio: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioGrp: {
    marginLeft: 10,
  },
});

export default NoticeForm;
