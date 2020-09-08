import React, { Fragment } from "react";
import {
  Card,
  Paragraph,
  Avatar,
  TouchableRipple,
  Button,
} from "react-native-paper";
import { StyleSheet } from "react-native";

import globalStyles from "../styles/global";

const SchoolIcon = (props) => <Avatar.Icon {...props} icon="school" />;

const ClassIcon = (props) => (
  <Avatar.Icon {...props} icon="account-multiple-outline" />
);

const BrowseNotice = ({ navigation }) => {
  return (
    <Fragment>
      <Card style={globalStyles.card}>
        <TouchableRipple onPress={() => navigation.push("School Notice Board")}>
          <Fragment>
            <Card.Title
              title="School Notices"
              subtitle="Important notices for all school students"
              left={SchoolIcon}
            />
            <Card.Content style={globalStyles.cardContent}></Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
      <Card style={globalStyles.card}>
        <TouchableRipple onPress={() => navigation.push("Class Notice Board")}>
          <Fragment>
            <Card.Title
              title="Class Notices"
              subtitle="A notice board for the class"
              left={ClassIcon}
            />
            <Card.Content style={globalStyles.cardContent}></Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  p: {
    color: "#606060",
  },
  button: {
    marginLeft: "auto",
  },
  card: {
    margin: 10,
    marginTop: 15,
    marginBottom: 0,
  },
  content: {
    marginLeft: 5,
  },
});

export default BrowseNotice;
