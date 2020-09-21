import React, { useState, useContext, useEffect, Fragment } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Paragraph, TouchableRipple } from 'react-native-paper';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';

const StudentCard = (props) => {
  return (
    <Card style={styles}>
      <TouchableRipple
        onPress={() =>
          props.navigation.push('Student Details', {
            user: props.user,
            class_: props.class,
          })
        }
      >
        <Fragment>
          <Card.Title title={props.name} />
          <Card.Content style={{ marginBottom: 10 }}>
            <Paragraph>Roll No: {props.rollNo}</Paragraph>
            <Paragraph>Email: {props.email}</Paragraph>
          </Card.Content>
        </Fragment>
      </TouchableRipple>
    </Card>
  );
};

const Students = ({ navigation }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    const res = await axios.get(URL + '/class/students/' + user.class_);
    setStudents(res.data.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Fragment>
      {students.map((st) => (
        <StudentCard
          name={st.name}
          rollNo={st.info.rollNo}
          email={st.email}
          key={st._id}
          navigation={navigation}
          user={st}
          class={user.className}
        />
      ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  margin: 10,
  marginBottom: 0,
});

export default Students;
