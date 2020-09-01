import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

const Profile = () => {
  const _goBack = () => console.log('Went back');

  const _handleMore = () => console.log('Shown more');

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#3B547E' }}>
        <Appbar.BackAction icon="chevron-left" onPress={_goBack} />
        <Appbar.Content
          title="Profile"
          subtitle="Teacher"
          style={styles.appbar_content}
        />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <View style={styles.avatar_icon}>
        <Avatar.Icon size={150} icon="account" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar_content: {
    // alignItems: 'center',
  },
  avatar_icon: {
    padding: 20,
  },
});

export default Profile;
