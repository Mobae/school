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
          }}
        />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="TeacherList" component={TeacherList} />
        <Stack.Screen name="StudentList" component={StudentList} />
        <Stack.Screen name="AllStudentList" component={AllStudentList} />
        <Stack.Screen name="ClassView" component={ClassView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AdminStack;
