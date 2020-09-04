import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 

const ChatRoute = () => <Text>Music</Text>;

const NoticeRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => <Text>Recents</Text>;

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