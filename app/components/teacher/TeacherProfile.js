import React, { Fragment, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Card, Paragraph, TouchableRipple } from "react-native-paper";

import globalStyles from "../styles/global";
import { AuthContext } from "../../context/AuthContext";

const ProfileIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="account"
    size={45}
    style={{ backgroundColor: "#249c12" }}
  />
);

const AttendanceIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="book"
    size={45}
    style={{ backgroundColor: "#249c12" }}
  />
);

const StudentsIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="contacts"
    size={45}
    color="white"
    style={{ backgroundColor: "#249c12" }}
  />
);

const TeacherProfile = ({ navigation }) => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  return (
    <Fragment>
      <Card style={globalStyles.card}>
        {/* <TouchableRipple> */}
        <Card.Title title="Profile" subtitle={user.name} left={ProfileIcon} />
        <Card.Content>
          <Paragraph>Email: {user.email}</Paragraph>
          {user.class_ ? (
            <Paragraph>Class teacher of {user.className}</Paragraph>
          ) : (
            <Paragraph>Subject Teacher</Paragraph>
          )}
        </Card.Content>
        {/* </TouchableRipple> */}
      </Card>
      {user.class_ ? (
        <Fragment>
          <Card style={globalStyles.card}>
            <TouchableRipple onPress={() => navigation.push("Attendance")}>
              <Fragment>
                <Card.Title
                  title="Attendance"
                  subtitle="View Attendance"
                  left={AttendanceIcon}
                />
                <Card.Content style={globalStyles.cardContent}></Card.Content>
              </Fragment>
            </TouchableRipple>
          </Card>
          <Card style={globalStyles.card}>
            <TouchableRipple onPress={() => navigation.push("Students")}>
              <Fragment>
                <Card.Title
                  title="Students"
                  subtitle="View Students"
                  left={StudentsIcon}
                />
                <Card.Content style={globalStyles.cardContent}></Card.Content>
              </Fragment>
            </TouchableRipple>
          </Card>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default TeacherProfile;
