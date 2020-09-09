import * as React from 'react';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const TeacherFilesView = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <React.Fragment>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        style={{ padding: 20 }}
        animationType='slide'
      >
        <Entypo
          name='circle-with-cross'
          size={35}
          style={styles.modalClose}
          color='black'
          onPress={() => {
            hideModal();
          }}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, margin: 12, marginTop: 20 }}>
            <TextInput label='Description' placeholder='add description' />
            <Text style={{ marginTop: 30 }}>File Upload Here !!</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ margin: 20, marginHorizontal: 60, marginBottom: 50 }}>
          <Button
            mode='contained'
            icon='content-save'
            title='save'
            color='#6200EE'
            onPress={() => console.log('Pressed')}
            onPress={() => {
              hideModal();
            }}
          >
            SAVE
          </Button>
        </View>
      </Modal>
      <Button
        icon='attachment'
        mode='contained'
        onPress={() => {
          showModal();
        }}
        style={styles.attach}
      >
        Attach Files
      </Button>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 1</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 2</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 3</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default TeacherFilesView;
const styles = StyleSheet.create({
  attach: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 17,
    borderRadius: 20,
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#f0f8ff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
