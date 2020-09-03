import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Attendance from './Attendance';

const Profile = () => {
  const press = () => console.log('Pressed');

  return (
    <View>
      <View style={styles.profile_info}>
        <View>
          <Avatar.Icon size={150} icon="account" style={styles.avatar_icon} />
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text>Abhishek Singh Dhakad</Text>
          <Text>Class Assigned: 2nd</Text>
        </View>
      </View>
      <View onPress={press}>
        <TouchableOpacity>
          <Attendance />
        </TouchableOpacity>
      </View>
    </View>
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
