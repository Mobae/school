import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/profile/Profile';
import AllStudentsAttendance from './components/profile/AllStudentsAttendance';
import Home from './components/routes/Home';
import BottomNav from './components/layouts/BottomNav';
import TopBar from './components/layouts/TopBar';
// import Login from './components/auth/Login';

export default function App() {
  return (
    <Fragment>
      <View style={styles.container}>
        <TopBar />
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <AllStudentsAttendance /> */}
        {/* <Login></Login> */}
        <StatusBar style="auto" />
        <BottomNav />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
