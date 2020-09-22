import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { Text, IconButton } from "react-native-paper";

import AdminProfile from "./AdminProfile";
import ClassList from "./ClassList";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";
import ClassView from './ClassView';
import AllStudentList from './AllStudentList';
import AttendanceClassList from './AttendanceClassList';
import StudentAttendance from './StudentAttendance';
import StudentDetail from './StudentDetail';

import { AuthContext } from "../../context/AuthContext";

const Stack = createStackNavigator();

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

function AdminStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="AdminProfile" 
          component={AdminProfile}
          options={{
            headerRight: () => <LogoutButton />,
            title: 'Admin Profile'
          }}
        />
        <Stack.Screen name="ClassList" component={ClassList} options={{ title: 'All Classes' }} />
        <Stack.Screen name="AttendanceClassList" component={AttendanceClassList} options={{ title: 'All Classes' }} />
        <Stack.Screen name="TeacherList" component={TeacherList} options={{ title: 'All Classes' }} />
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'Students' }} />
        <Stack.Screen name="AllStudentList" component={AllStudentList} options={{ title: 'All Students' }} />
        <Stack.Screen name="ClassView" component={ClassView} options={{ title: 'Class Overview' }} />
        <Stack.Screen name="StudentAttendance" component={StudentAttendance} options={{ title: 'Attendance' }} />
        <Stack.Screen name="Student Details" component={StudentDetail} options={{ title: 'Student Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AdminStack;
