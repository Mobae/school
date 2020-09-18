import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Files from './Files';
import ChatHome from './ChatHome';
import ChatPage from './ChatPage';
import StudentFileView from './StudentFileView';
import ClassList from './ClassList';
import TeacherFileView from './TeacherFileView';
import AddFile from './AddFile';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatHome" component={ChatHome} />
        <Stack.Screen name="Files" component={Files} />
        <Stack.Screen name="Chat" component={ChatPage} />
        <Stack.Screen name="StudentFileView" component={StudentFileView} />
        <Stack.Screen name="TeacherFileView" component={TeacherFileView} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="AddFile" component={AddFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;
