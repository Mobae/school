import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import AuthContextProvider from './context/AuthContext';
import Main from './components/Main';
import AllStudentsAttendance from './components/profile/AllStudentsAttendance';
import IndividualMonth from './components/profile/StudentView/IndividualMonth';
import AddAttendence from './components/profile/AddAttendence';

export default function App() {
  return (
    // <AuthContextProvider>
    //   <Main />
    // </AuthContextProvider>
    <AddAttendence />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
