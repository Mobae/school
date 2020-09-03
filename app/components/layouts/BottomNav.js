import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import Home from '../routes/Home';
import Profile from '../profile/Profile';
import AllStudentAttendance from '../profile/AllStudentsAttendance';
import AddAttendance from '../profile/AddAttendence';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return <Home />;
};

const ProfileScreen = () => {
  return <Profile />;
};

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'focused' ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'focused' ? 'account' : 'account-outline';
            }
            return <IconButton icon={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
