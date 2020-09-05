import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import AdminProfile from './admin/AdminProfile';
import { View } from 'react-native';

import AdminContextProvider from '../context/AdminContext';

const ChatRoute = () => <Text>Music</Text>;

const NoticeRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => <AdminProfile />;
// const ProfileRoute = () => {
//   return (
//     <View>
//     <AdminContextProvider>
//       <AdminProfile />
//     </AdminContextProvider>
//     </View>
//   )
// };

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chat', title: 'Chat', icon: 'forum-outline'  },
    { key: 'notice', title: 'Notice', icon: 'format-list-checkbox' },
    { key: 'profile', title: 'Profile', icon: 'face-profile' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: ChatRoute,
    notice: NoticeRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default MyComponent;