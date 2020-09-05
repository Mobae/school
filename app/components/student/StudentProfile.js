<<<<<<< HEAD
import React, { Fragment, useContext } from "react";
import { StyleSheet } from "react-native";
import { Avatar, Paragraph, Button, Card, Title } from "react-native-paper";
=======
import React, { Fragment, useContext } from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import CardC from '../layouts/CardC';
>>>>>>> abeab02dde5c75dd709fc8264dbcc4cdcbae2b31

import { AuthContext } from '../../context/AuthContext';
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <TouchableOpacity>
      <Card style={styles}>
        <Card.Title title="Profile" subtitle={user.name} left={ProfileIcon} />
        <Card.Content>
          <Paragraph>Email: {user.email}</Paragraph>
          <Paragraph>Class: {user.studentClass}</Paragraph>
        </Card.Content>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
      <Card style={styles}>
        <Card.Title title="Attendance" left={AttendanceIcon} />
        <Card.Actions>
          <Button title="View" mode="outlined">
            View
          </Button>
        </Card.Actions>
      </Card>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  margin: 10,
  marginBottom: 0,
});

export default StudentProfile;
