import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Files from "./Files";
import ChatHome from "./ChatHome";
import AllDoubts from "../doubts/AllDoubts";
import AddDoubt from "../doubts/AddDoubt";
import StudentFileView from "./StudentFileView";
import ClassList from "./ClassList";
import TeacherFileView from "./TeacherFileView";
import AddFile from "./AddFile";
import Add from "./Add";

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatHome" component={ChatHome} />
        <Stack.Screen name="Files" component={Files} />
        <Stack.Screen name="Doubts Corner" component={AllDoubts} />
        <Stack.Screen name="Add Doubt" component={AddDoubt} />
        <Stack.Screen name="StudentFileView" component={StudentFileView} />
        <Stack.Screen name="TeacherFileView" component={TeacherFileView} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="AddFile" component={AddFile} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;
