import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Otp from './Otp';
import Login from '../auth/Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{ title: 'Forgot Password' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
