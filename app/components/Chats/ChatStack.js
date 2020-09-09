import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Files from './Files';
import ChatHome from './ChatHome';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ChatHome' component={ChatHome} />
        <Stack.Screen name='Files' component={Files} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;
