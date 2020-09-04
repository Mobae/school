import React, { Fragment, useContext } from "react";
import { Avatar } from "react-native-paper";
import CardC from "../layouts/CardC";

import { AuthContext } from "../../context/AuthContext";

const ProfileIcon = (props) => (
  <Avatar.Icon {...props} icon="account" size={45} />
);

const AttendanceIcon = (props) => (
  <Avatar.Icon {...props} icon="book" size={45} />
);

const TestIcon = (props) => <Avatar.Icon {...props} icon="file" size={45} />;

const StudentProfile = () => {
  const {
    authState: {
      user: { name },
    },
  } = useContext(AuthContext);

  return (
    <Fragment>
      <CardC title="Profile" subtitle={name} leftContent={ProfileIcon}></CardC>
      <CardC title="Attendance" leftContent={AttendanceIcon}></CardC>
      <CardC title="Tests" leftContent={TestIcon}></CardC>
    </Fragment>
  );
};

export default StudentProfile;
