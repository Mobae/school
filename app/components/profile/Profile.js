import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

const Profile = () => {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <View>
      {/* <Appbar.Header style={{ backgroundColor: '#3B547E' }}>
        <Appbar.BackAction icon="chevron-left" onPress={_goBack} />
        <Appbar.Content
          title="Profile"
          subtitle="Teacher"
          style={styles.appbar_content}
        />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header> */}
      <View style={styles.profile_info}>
        <View>
          <Avatar.Icon size={150} icon="account" style={styles.avatar_icon} />
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text>Abhishek Singh Dhakad</Text>
          <Text>Class Assigned: 2nd</Text>
        </View>
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
