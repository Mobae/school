import React, { useContext, Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BottomNavigation, Text } from 'react-native-paper';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import StudentProfile from '../student/StudentProfile';
import TeacherProfile from '../teacher/TeacherProfile';
import StudentAttendance from '../profile/StudentView/StudentAttendance';
import IndividualMonth from '../profile/StudentView/IndividualMonth';
import AllStudentAttendance from '../profile/AllStudentsAttendance';
import AddAttendance from '../profile/AddAttendence';

import { AuthContext } from '../../context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';

const StudentStack = createStackNavigator();
const TeacherStack = createStackNavigator();

const StudentStackScreen = () => {
  return (
    <StudentStack.Navigator>
      <StudentStack.Screen name="Profile" component={StudentProfile} />
      <StudentStack.Screen name="Attendance" component={StudentAttendance} />
      <StudentStack.Screen name="Month" component={IndividualMonth} />
    </StudentStack.Navigator>
  );
};

const TeacherStackScreen = () => {
  return (
    <TeacherStack.Navigator>
      <TeacherStack.Screen name="Profile" component={TeacherProfile} />
      <TeacherStack.Screen name="Attendance" component={AllStudentAttendance} />
      <TeacherStack.Screen name="Add Attendance" component={AddAttendance} />
    </TeacherStack.Navigator>
  );
};

const ChatRoute = () => <Text>Music</Text>;

const NoticeRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => {
  const {
    authState: {
      user: { rank },
    },
  } = useContext(AuthContext);
  console.log(rank);
  // switch (rank) {
  //   case "2":
  //     return null;
  //   case "1":
  //     return <TeacherProfile />;
  //   case "0":
  //     return <StudentProfile />;
  // }
  return <StudentStackScreen />;
};

const MyComponent = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'chat', title: 'Chat', icon: 'forum-outline' },
    { key: 'profile', title: 'Profile', icon: 'face-profile' },
    { key: 'notice', title: 'Notice', icon: 'format-list-checkbox' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: ChatRoute,
    profile: ProfileRoute,
    notice: NoticeRoute,
  });

  return (
    <Fragment>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
      />
      <StatusBar style="auto" />
    </Fragment>
  );
};

export default MyComponent;
