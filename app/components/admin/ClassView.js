import * as React from 'react';
import { View, Text } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  ActivityIndicator,
  TouchableRipple,
} from 'react-native-paper';

import { AdminContext } from '../../context/AdminContext';
import { ScrollView } from 'react-native-gesture-handler';
import AddClassTeacher from './AddClassTeacher';
import AddSubTeacher from './AddSubTeacher';
import adminStyles from './AdminStyles';
import axios from 'axios';
const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="folder"
    style={{ backgroundColor: '#2E6E80' }}
  />
);

const studentsIcon = (props) => (
  <Avatar.Icon
    {...props}
    icon="format-list-checkbox"
    style={{ backgroundColor: '#2E6E80' }}
  />
);

const ClassView = ({ navigation }) => {
  const url = 'https://school-server-testing.herokuapp.com';
  const {
    getCurrClassTeachers,
    classObj,
    setClassObj,
    currClass,
    flag,
    setFlag,
  } = React.useContext(AdminContext);
  const [classTeacherModalOpen, setClassTeacherModalOpen] = React.useState(
    false
  );
  const [subTeacherModalOpen, setSubTeacherModalOpen] = React.useState(false);
  const [pin1, setPin1] = React.useState(false);
  const [pin2, setPin2] = React.useState(false);

  const removeTeacher = async(value) => {
    try {
      const payload = {
        teacher: value,
        class: currClass
      }
      const res = await axios.post( url + '/class/remove/subTeacher/', payload );
      console.log(res.data);

      const newSubTeachers = classObj.subTeachers.filter((teacher) => {
        if(teacher._id != value){
          return teacher;
        }
      });
      setClassObj({
        classTeacher: classObj.classTeacher,
        subTeachers: newSubTeachers
      });
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getCurrClassTeachers();
  }, [pin1]);
  React.useEffect(() => {
    getCurrClassTeachers();
  }, [pin2]);

  if (flag) {
    return (
      <View>
        <AddClassTeacher
          setPin1={setPin1}
          pin1={pin1}
          setFlag={setFlag}
          navigation={navigation}
          classTeacherModalOpen={classTeacherModalOpen}
          setClassTeacherModalOpen={setClassTeacherModalOpen}
        />
        <AddSubTeacher
          setPin2={setPin2}
          navigation={navigation}
          subTeacherModalOpen={subTeacherModalOpen}
          setSubTeacherModalOpen={setSubTeacherModalOpen}
        />
        <ScrollView>
          <Card style={adminStyles.card}>
            <TouchableRipple
              onPress={() => {
                navigation.navigate('StudentList');
              }}
            >
              <React.Fragment>
                <Card.Title title="Students" left={studentsIcon} />
                <Card.Content></Card.Content>
              </React.Fragment>
            </TouchableRipple>
          </Card>

          <TouchableRipple
            onPress={() => {
              // navigation.navigate('StudentList');
            }}
          >
            {classObj.classTeacher[0] !== undefined ? (
              <View>
                <Card style={adminStyles.card}>
                  <Card.Title title="Class Teacher" />
                  <Card.Actions>
                    <Button onPress={() => setClassTeacherModalOpen(true)}>
                      EDIT
                    </Button>
                  </Card.Actions>
                </Card>
                <Card style={adminStyles.card}>
                  <Card.Title
                    title={classObj.classTeacher[0].name}
                    left={LeftContent}
                  />
                </Card>
              </View>
            ) : (
              <View>
                <Card style={adminStyles.card}>
                  <Card.Title title="Class Teacher" />
                  <Card.Actions>
                    <Button onPress={() => setClassTeacherModalOpen(true)}>
                      ADD
                    </Button>
                  </Card.Actions>
                </Card>
                <Card style={adminStyles.card}>
                  <Card.Title title="None" left={LeftContent} />
                </Card>
              </View>
            )}
          </TouchableRipple>

          <Card style={adminStyles.card}>
            <Card.Title title="Subject teachers" />
            <Card.Actions>
              <Button onPress={() => setSubTeacherModalOpen(true)}>ADD</Button>
            </Card.Actions>
          </Card>

          {classObj.subTeachers.map((teacher) => (
            <Card style={adminStyles.card} key={teacher._id}>
              <Card.Title title={teacher.name} left={LeftContent} />
              <Card.Actions>
                <Button onPress={() => removeTeacher(teacher._id)}>Remove</Button>
              </Card.Actions>
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={adminStyles.container}>
        <ActivityIndicator
          animating={true}
          size="large"
          color="#2E6E80"
          style={adminStyles.loading}
        />
      </View>
    );
  }
};

export default ClassView;
