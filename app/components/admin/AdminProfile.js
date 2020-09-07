import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

import AddClass from './AddClass';
import ClassList from './ClassList';
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import {AdminContext} from '../../context/AdminContext';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const AdminProfile = ({ navigation }) => {
  const { addClass, addTeacher, addStudent, getClasses, getTeachers, getStudents, adminState } = React.useContext(AdminContext);
  const [ classModalOpen, setClassModalOpen ] = React.useState(false);
  const [ teacherModalOpen, setTeacherModalOpen ] = React.useState(false);
  const [ studentModalOpen, setStudentModalOpen ] = React.useState(false);

  React.useEffect(() => {
    getClasses()
      // .then(getTeachers())
      // .then(getClasses());
    // console.log(`Admin State: ${adminState.classes}`)
  }, []);


  return (
    <View>
      <AddClass navigation={navigation} addClass={addClass} classModalOpen={classModalOpen} setClassModalOpen={setClassModalOpen} />

      <AddTeacher navigation={navigation} addTeacher={addTeacher} teacherModalOpen={teacherModalOpen} setTeacherModalOpen={setTeacherModalOpen} />

      {/* <AddStudent navigation={navigation} addStudent={addStudent} studentModalOpen={studentModalOpen} setStudentModalOpen={setStudentModalOpen} /> */}

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
            <Button onPress={() => navigation.navigate('ClassList')}>VIEW</Button>
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
            <Button onPress={() => navigation.navigate('TeacherList')} >VIEW</Button>
            <Button onPress={() => setTeacherModalOpen(true)} >ADD</Button>
          </Card.Actions>
        </Card>
      </View>

      {/* // STUDENT CARD */}
      <Text></Text>
      <View>
        <Card style={styles.card}>
          <Card.Title title="Students" left={LeftContent} />
          <Card.Actions>
            <Button onPress={() => navigation.navigate('ClassList')}>VIEW</Button>
            <Button  onPress={() => setStudentModalOpen(true)}>ADD</Button>
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
