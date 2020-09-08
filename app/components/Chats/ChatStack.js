import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Files from './Files';
import Chat from './Chat';

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Files' component={Files} />
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatStack;
