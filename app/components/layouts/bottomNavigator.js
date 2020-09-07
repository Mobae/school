import React, { useContext, useState, Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { BottomNavigation, Text } from "react-native-paper";

import StudentProfile from "../student/StudentProfile";
import TeacherProfile from "../teacher/TeacherProfile";
import StudentAttendance from "../profile/StudentView/StudentAttendance";
import IndividualMonth from "../profile/StudentView/IndividualMonth";
import AllStudentAttendance from "../profile/AllStudentsAttendance";
import AddAttendance from "../profile/AddAttendence";
import Notice from "../NoticeBoard/Notice";
import NoticeForm from "../NoticeBoard/NoticeForm";
import StudentInfo from "../profile/StudentView/StudentInfo";

import { AuthContext } from "../../context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AdminStack from "../admin/AdminStack";

const StudentStack = createStackNavigator();
const TeacherStack = createStackNavigator();
const NoticeStack = createStackNavigator();

const StudentStackScreen = () => {
  return (
    <NavigationContainer>
      <StudentStack.Navigator>
        <StudentStack.Screen name="Profile" component={StudentProfile} />
        <StudentStack.Screen name="Attendance" component={StudentAttendance} />
        <StudentStack.Screen name="Month" component={IndividualMonth} />
      </StudentStack.Navigator>
    </NavigationContainer>
  );
};

const TeacherStackScreen = () => {
  return (
    <NavigationContainer>
      <TeacherStack.Navigator>
        <TeacherStack.Screen name="Profile" component={TeacherProfile} />
        <TeacherStack.Screen
          name="Attendance"
          component={AllStudentAttendance}
        />
        <TeacherStack.Screen name="Add Attendance" component={AddAttendance} />
      </TeacherStack.Navigator>
    </NavigationContainer>
  );
};

const NoticeStackScreen = () => {
  return (
    <NavigationContainer>
      <NoticeStack.Navigator>
        <NoticeStack.Screen name="Notice" component={Notice} />
      </NoticeStack.Navigator>
    </NavigationContainer>
  );
};

const ChatRoute = () => <Text>Music</Text>;

const NoticeRoute = () => {
  return <NoticeStackScreen />;
};

const ProfileRoute = () => {
  const {
    authState: {
      user: { rank },
    },
  } = useContext(AuthContext);
  console.log(rank);
  switch (rank) {
    case "2":
      return null;
    case "1":
      return <TeacherStackScreen />;
    case "0":
      return <StudentStackScreen />;
  }
  // return <StudentStackScreen />;
};

const MyComponent = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = useState([
    { key: "chat", title: "Chat", icon: "forum-outline" },
    { key: "profile", title: "Profile", icon: "face-profile" },
    { key: "notice", title: "Notice", icon: "format-list-checkbox" },
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
