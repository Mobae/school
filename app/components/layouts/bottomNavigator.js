import React, { useContext, useState, useEffect, Fragment } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BottomNavigation, Text, IconButton } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import StudentProfile from "../student/StudentProfile";
import TeacherProfile from "../teacher/TeacherProfile";
import StudentAttendance from "../profile/StudentView/StudentAttendance";
import IndividualMonth from "../profile/StudentView/IndividualMonth";
import StudentInfo from "../profile/StudentView/StudentInfo";
import AllStudentAttendance from "../profile/AllStudentsAttendance";
import AddAttendance from "../profile/AddAttendence";
import Notice from "../NoticeBoard/Notice";
import ClassNotice from "../NoticeBoard/ClassNotice";
import NoticeForm from "../NoticeBoard/NoticeForm";
import BrowseNotice from "../NoticeBoard/BrowseNotice";

import { AuthContext } from "../../context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AdminStack from "../admin/AdminStack";
import ChatStack from "../Chats/ChatStack";
import { TouchableOpacity } from "react-native-gesture-handler";

const StudentStack = createStackNavigator();
const TeacherStack = createStackNavigator();
const NoticeStack = createStackNavigator();

const logout = (
  <MaterialCommunityIcons
    name="logout"
    size={100}
    color="red"
    style={{ marginRight: 15 }}
  />
);
const LogoutButton = () => {
  const { Logout } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => Logout()}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            color: "#ef5350",
          }}
        >
          Logout
        </Text>
        <IconButton icon="logout" color="#ef5350" style={{ marginLeft: 0 }} />
      </View>
    </TouchableOpacity>
  );
};

const StudentStackScreen = () => {
  return (
    <NavigationContainer>
      <StudentStack.Navigator>
        <StudentStack.Screen
          name="JMRD"
          component={StudentProfile}
          options={{
            headerRight: () => <LogoutButton />,
          }}
        />
        <StudentStack.Screen name="Profile" component={StudentInfo} />
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
        <NoticeStack.Screen name="Notice Board" component={BrowseNotice} />
        <NoticeStack.Screen name="School Notice Board" component={Notice} />
        <NoticeStack.Screen name="Class Notice Board" component={ClassNotice} />
        <NoticeStack.Screen name="New Notice" component={NoticeForm} />
      </NoticeStack.Navigator>
    </NavigationContainer>
  );
};

const ChatRoute = () => {
  return <ChatStack />;
};

const NoticeRoute = () => {
  return <NoticeStackScreen />;
};

const ProfileRoute = () => {
  const { authState, getUser } = useContext(AuthContext);
  const {
    user: { rank },
  } = authState;
  useEffect(() => {
    getUser();
  }, []);
  // console.log(rank);
  // switch (rank) {
  //   case "2":
  //     return null;
  //   case "1":
  //     return <TeacherStackScreen />;
  //   case "0":
  //     return <StudentStackScreen />;
  // }
  return rank === "1" ? (
    <TeacherStackScreen />
  ) : rank === "0" ? (
    <StudentStackScreen />
  ) : null;
  // return <AdminStack />;
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
