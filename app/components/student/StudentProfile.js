import React, { Fragment, useContext } from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
// import CardC from '../layouts/CardC';

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
    authState: {
      user: { name },
    },
  } = useContext(AuthContext);

  return (
    <Fragment>
      {/* <TouchableOpacity>
        <CardC
          title="Profile"
          subtitle={name}
          leftContent={ProfileIcon}
        ></CardC>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Attendance')}>
        <CardC title="Attendance" leftContent={AttendanceIcon}></CardC>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardC title="Tests" leftContent={TestIcon}></CardC>
      </TouchableOpacity> */}
    </Fragment>
  );
};

export default StudentProfile;
