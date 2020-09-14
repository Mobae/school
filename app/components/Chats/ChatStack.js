import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Files from './Files';
import ChatHome from './ChatHome';
import ChatPage from './ChatPage';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatHome" component={ChatHome} />
        <Stack.Screen name="Files" component={Files} />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;
