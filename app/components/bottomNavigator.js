import React, { useContext } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import StudentProfile from "./student/StudentProfile";
import TeacherProfile from "./teacher/TeacherProfile";

import { AuthContext } from "../context/AuthContext";

const ChatRoute = () => <Text>Music</Text>;

const NoticeRoute = () => <Text>Albums</Text>;

const ProfileRoute = () => {
  const {
    authState: {
      user: { rank },
    },
  } = useContext(AuthContext);
  console.log(rank);
  switch (rank) {
    case "2":
      return null;
    case "1":
      return <TeacherProfile />;
    case "0":
      return <StudentProfile />;
  }
};

const MyComponent = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "chat", title: "Chat", icon: "forum-outline" },
    { key: "profile", title: "Profile", icon: "face-profile" },
    { key: "notice", title: "Notice", icon: "format-list-checkbox" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    chat: ChatRoute,
    profile: ProfileRoute,
    notice: NoticeRoute,
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