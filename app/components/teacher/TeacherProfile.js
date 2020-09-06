import React, { Fragment, useContext } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, Paragraph, TouchableRipple } from "react-native-paper";

import { AuthContext } from "../../context/AuthContext";

const ProfileIcon = (props) => (
  <Avatar.Icon {...props} icon="account" size={45} />
);

const AttendanceIcon = (props) => (
  <Avatar.Icon {...props} icon="book" size={45} />
);

const TestIcon = (props) => <Avatar.Icon {...props} icon="file" size={45} />;

const TeacherProfile = ({ navigation }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  return (
    <Fragment>
      <Card style={styles}>
        {/* <TouchableRipple> */}
        <Card.Title title="Profile" subtitle={user.name} left={ProfileIcon} />
        <Card.Content>
          <Paragraph>Email: {user.email}</Paragraph>
          <Paragraph>Class teacher of {user.class_}</Paragraph>
        </Card.Content>
        {/* </TouchableRipple> */}
      </Card>
      <Card style={styles}>
        <TouchableRipple onPress={() => navigation.push("Attendance")}>
          <Card.Title
            title="Attendance"
            subtitle="View Attendance"
            left={AttendanceIcon}
          />
        </TouchableRipple>
      </Card>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  margin: 10,
  marginBottom: 0,
});

export default TeacherProfile;
