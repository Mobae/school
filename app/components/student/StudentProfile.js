import React, { Fragment, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Paragraph, Card, TouchableRipple } from "react-native-paper";

import { AuthContext } from "../../context/AuthContext";

const ProfileIcon = (props) => (
  <Avatar.Icon {...props} icon="account" size={45} />
);

const AttendanceIcon = (props) => (
  <Avatar.Icon {...props} icon="book" size={45} />
);

const TestIcon = (props) => <Avatar.Icon {...props} icon="file" size={45} />;

const StudentProfile = ({ navigation }) => {
  const { authState, getClassName } = useContext(AuthContext);
  const { user } = authState;

  useEffect(() => {
    getClassName();
  }, []);

  useEffect(() => {}, [authState]);

  return (
    <Fragment>
      <Card style={styles}>
        <TouchableRipple onPress={() => navigation.push("Profile")}>
          <Fragment>
            <Card.Title
              title="Profile"
              subtitle={user.name}
              left={ProfileIcon}
            />
            <Card.Content style={{ marginBottom: 8 }}>
              <Paragraph>Email: {user.email}</Paragraph>
              <Paragraph>Class: {user.className}</Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
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

export default StudentProfile;
