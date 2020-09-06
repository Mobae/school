import React, { Fragment, useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  Avatar,
  Paragraph,
  Button,
  Card,
  Title,
  TouchableRipple,
} from 'react-native-paper';

import { AuthContext } from '../../context/AuthContext';

const ProfileIcon = (props) => (
  <Avatar.Icon {...props} icon="account" size={45} />
);

const AttendanceIcon = (props) => (
  <Avatar.Icon {...props} icon="book" size={45} />
);

const TestIcon = (props) => <Avatar.Icon {...props} icon="file" size={45} />;

const StudentProfile = ({ navigation }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  return (
    <Fragment>
      <Card style={styles}>
        <Card.Title title="Profile" subtitle={user.name} left={ProfileIcon} />
        <Card.Content>
          <Paragraph>Email: {user.email}</Paragraph>
          <Paragraph>Class: {user.studentClass}</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles}>
        <TouchableRipple onPress={() => navigation.push('Attendance')}>
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
