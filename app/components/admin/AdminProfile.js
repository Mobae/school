import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

import AddClass from './AddClass';
import {AdminContext} from '../../context/AdminContext';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const AdminProfile = () => {
  const [ classModalOpen, setClassModalOpen ] = React.useState(false);

  const { addClass } = React.useContext(AdminContext);


  return (
    <View>
      {/* // CLASS ADD MODAL */}
      <Modal visible={classModalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={28}
              onPress={() => setClassModalOpen(false)}
            />
            <AddClass addClass={addClass} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* // ATTENDANCE CARD */}
      <View>
        <Card style={styles.card}>
          <Card.Title
            title="Attendance"
            subtitle="View Attendance"
            left={LeftContent}
          />
          <Card.Content></Card.Content>
        </Card>
      </View>

      {/* // CLASS CARD/ */}
      <Text></Text>
      <View>
        <Card style={styles.card}>
          <Card.Title title="Classes" left={LeftContent} />
          <Card.Actions>
            <Button>VIEW</Button>
            <Button onPress={() => setClassModalOpen(true)} >ADD</Button>
          </Card.Actions>
        </Card>
      </View>

      {/* // TEAHERS CARD */}
      <Text></Text>
      <View>
        <Card style={styles.card}>
          <Card.Title title="Teachers" left={LeftContent} />
          <Card.Actions>
            <Button>VIEW</Button>
            <Button>ADD</Button>
          </Card.Actions>
        </Card>
      </View>

      {/* // STUDENT CARD */}
      <Text></Text>
      <View>
        <Card style={styles.card}>
          <Card.Title title="Students" left={LeftContent} />
          <Card.Actions>
            <Button>VIEW</Button>
            <Button>ADD</Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 0,
    },
    modalToggle: {
        marginBottom: 10,
        padding: 10,
        alignSelf: 'center',
        position: 'relative'
    },
    modalClose: {

    },  
    addBtn: {
        backgroundColor: 'gray',
        marginLeft: 240,
        borderRadius: 50
    },
    modalContent: {
        flex: 1
    }
});
export default AdminProfile;
