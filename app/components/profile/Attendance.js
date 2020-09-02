import * as React from "react";
import { Card, Title, Paragraph, Avatar } from "react-native-paper";

const Attendance = () => (
  <Card.Title
    title="Attandance"
    subtitle="Class: XYZ"
    left={(props) =>
      <Avatar.Icon {...props} icon="account-supervisor-circle" />}
  />
);

export default Attendance;
