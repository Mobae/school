import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, ActivityIndicator } from 'react-native-paper';

import AddClass from './AddClass';
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import { AdminContext } from '../../context/AdminContext';

import adminStyles from './AdminStyles';
import AttendanceClassList from './AttendanceClassList';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const attendanceIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="clipboard-text"
    style={{ backgroundColor: '#00674D' }}
  />
);

const classesIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="presentation"
    style={{ backgroundColor: '#2E6E80' }}
  />
);

const teachersIcon = (props) => (
  <Avatar.Icon {...props} icon="teach" style={{ backgroundColor: '#8A3B37' }} />
);

const studentsIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="clipboard-account"
    color="#fff"
    style={{ backgroundColor: '#EF5758' }}
  />
);

const AdminProfile = ({ navigation }) => {
  const {
    addClass,
    addTeacher,
    addStudent,
    adminState,
    profileLoading,
    getAllData,
    reload,
  } = React.useContext(AdminContext);
  const [classModalOpen, setClassModalOpen] = React.useState(false);
  const [teacherModalOpen, setTeacherModalOpen] = React.useState(false);
  const [studentModalOpen, setStudentModalOpen] = React.useState(false);

  React.useEffect(() => {
    getAllData();
  }, []);

  if (!profileLoading) {
    return (
      <View>
        <AddClass
          navigation={navigation}
          addClass={addClass}
          classModalOpen={classModalOpen}
          setClassModalOpen={setClassModalOpen}
        />
        <AddTeacher
          navigation={navigation}
          addTeacher={addTeacher}
          teacherModalOpen={teacherModalOpen}
          setTeacherModalOpen={setTeacherModalOpen}
        />
        <AddStudent
          navigation={navigation}
          addStudent={addStudent}
          studentModalOpen={studentModalOpen}
          setStudentModalOpen={setStudentModalOpen}
        />

        {/* // ATTENDANCE CARD */}
        <View>
          <Card style={adminStyles.card} onPress={() => navigation.navigate(AttendanceClassList)}>
            <Card.Title
              title="Attendance"
              subtitle="View Attendance"
              left={attendanceIcon}
            />
            <Card.Content></Card.Content>
          </Card>
        </View>

        {/* // CLASS CARD/ */}
        <Text></Text>
        <View>
          <Card style={adminStyles.card}>
            <Card.Title title="Classes" left={classesIcon} />
            <Card.Actions>
              <Button
                onPress={() => navigation.navigate('ClassList')}
                color="#2E6E80"
              >
                VIEW
              </Button>
              <Button onPress={() => setClassModalOpen(true)} color="#2E6E80">
                ADD
              </Button>
            </Card.Actions>
          </Card>
        </View>

        {/* // TEACHERS CARD */}
        <Text></Text>
        <View>
          <Card style={adminStyles.card}>
            <Card.Title title="Teachers" left={teachersIcon} />
            <Card.Actions>
              <Button
                onPress={() => {
                  navigation.navigate('TeacherList');
                }}
                color="#8A3B37"
              >
                VIEW
              </Button>
              <Button onPress={() => setTeacherModalOpen(true)} color="#8A3B37">
                ADD
              </Button>
            </Card.Actions>
          </Card>
        </View>

        {/* // STUDENT CARD */}
        <Text></Text>
        <View>
          <Card style={adminStyles.card}>
            <Card.Title title="Students" left={studentsIcon} />
            <Card.Actions>
              <Button
                onPress={() => {
                  navigation.navigate('AllStudentList');
                }}
                color="#EF5758"
              >
                VIEW
              </Button>
              <Button onPress={() => setStudentModalOpen(true)} color="#EF5758">
                ADD
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loading}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default AdminProfile;
