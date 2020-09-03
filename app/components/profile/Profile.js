import React, { Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import Attendance from './Attendance';
import AllStudentAttendance from './AllStudentsAttendance';

const Profile = ({ navigation }) => {
  return (
    <Fragment>
      <View style={styles.profile_info}>
        <View>
          <Avatar.Icon size={150} icon="account" style={styles.avatar_icon} />
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text>Abhishek Singh Dhakad</Text>
          <Text>Class Assigned: 2nd</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.push('Attendance')}>
          <Attendance />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  profile_info: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  appbar_content: {
    // alignItems: 'center',
  },
  avatar_icon: {
    backgroundColor: '#4F8670',
  },
});

export default Profile;
