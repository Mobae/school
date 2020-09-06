import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AdminProfile from "./AdminProfile";
import ClassList from "./ClassList";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList";

const Stack = createStackNavigator();

function AdminStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AdminProfile" component={AdminProfile} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="TeacherList" component={TeacherList} />
        <Stack.Screen name="StudentList" component={StudentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AdminStack;
