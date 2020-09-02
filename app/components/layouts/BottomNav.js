import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../layouts/Home';
import Profile from '../profile/Profile';
import AllStudentAttendance from '../profile/AllStudentsAttendance';

const HomeRoute = () => <Home />;

const AlbumsRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => <Profile />;

BottomNav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'profile', title: 'Profile', icon: 'account-circle' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
