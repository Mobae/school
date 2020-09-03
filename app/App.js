import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/profile/Profile';
import AllStudentsAttendance from './components/profile/AllStudentsAttendance';
import AddAttendence from './components/profile/AddAttendence';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Profile /> */}
      {/* <AllStudentsAttendance /> */}
      <AddAttendence />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
