import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  ActivityIndicator,
  Paragraph,
} from 'react-native-paper';

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
    icon="google-classroom"
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
    style={{ backgroundColor: '#3b3691' }}
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
    studentFlag,
    setStudentFlag,
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
          studentFlag={studentFlag}
          setStudentFlag={setStudentFlag}
        />

        {/* // ATTENDANCE CARD */}
        <ScrollView>
          <View style = {{marginTop : 10}}>
            <Card
              style={adminStyles.card}
              onPress={() => navigation.navigate('AttendanceClassList')}
            >
              <Card.Title
                title="Attendance"
                subtitle="View Attendance"
                left={attendanceIcon}
              />
              <Card.Content>
                <Paragraph>View All Students Attendance</Paragraph>
              </Card.Content>
            </Card>
          </View>

          {/* // CLASS CARD/ */}
          <Text></Text>
          <View>
            <Card style={adminStyles.card}>
              <Card.Title title="Classes" left={classesIcon} />
              <Card.Content>
                <Paragraph>
                  Overview of Class Teacher, Subject Teacher and Students
                </Paragraph>
              </Card.Content>
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
              <Card.Content>
                <Paragraph>Add or Remove Teachers</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => {
                    navigation.navigate('TeacherList');
                  }}
                  color="#8A3B37"
                >
                  VIEW
                </Button>
                <Button
                  onPress={() => setTeacherModalOpen(true)}
                  color="#8A3B37"
                >
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
              <Card.Content>
                <Paragraph>All Students List</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => {
                    navigation.navigate('AllStudentList');
                  }}
                  color="#3b3691"
                >
                  VIEW
                </Button>
                <Button
                  onPress={() => setStudentModalOpen(true)}
                  color="#3b3691"
                >
                  ADD
                </Button>
              </Card.Actions>
            </Card>
          </View>
          <Text></Text>
        </ScrollView>
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
