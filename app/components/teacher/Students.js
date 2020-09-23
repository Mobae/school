import React, { useState, useContext, useEffect, Fragment } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import {
  Card,
  Paragraph,
  TouchableRipple,
  ActivityIndicator,
  Avatar,
} from 'react-native-paper';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';

const leftIcon = (props) => {
  return (
    <Avatar.Icon
      {...props}
      icon='human-child'
      color='white'
      style={{ backgroundColor: '#3b3691' }}
    />
  );
};

const StudentCard = (props) => {
  return (
    <Card
      style={styles.card}
      onPress={() =>
        props.navigation.push('Student Details', {
          user: props.user,
          class_: props.class,
        })
      }
    >
      <Fragment>
        <Card.Title title={props.name} left={leftIcon} />
        <Card.Content style={{ marginBottom: -10, marginTop: -10 }}>
          <Paragraph>Roll No: {props.rollNo}</Paragraph>
          <Paragraph>Email: {props.email}</Paragraph>
        </Card.Content>
      </Fragment>
      <Text></Text>
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

  if (students.length != 0) {
    return (
      <Fragment>
        <ScrollView>
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
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </Fragment>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size='large'
          style={styles.loading}
          color='#0a6605'
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginBottom: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default Students;
