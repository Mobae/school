import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/profile/Profile';
import AllStudentsAttendance from './components/profile/AllStudentsAttendance';
import AddAttendence from './components/profile/AddAttendence';
import StudentAttendance from './components/profile/StudentView/StudentAttendance';
import IndividualMonth from './components/profile/StudentView/IndividualMonth';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Profile /> */}
      {/* <StudentAttendance /> */}
      <IndividualMonth />
      {/* <AllStudentsAttendance /> */}
      {/* <AddAttendence /> */}
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
