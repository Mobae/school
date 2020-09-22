import React, { Fragment } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Headline, TextInput, Button, FAB } from 'react-native-paper';
import { Formik } from 'formik';

import globalStyles from '../styles/global';
import adminStyles from './AdminStyles';

const AddTeacher = ({
  addTeacher,
  teacherModalOpen,
  setTeacherModalOpen,
  navigation,
}) => {
  return (
    <Modal visible={teacherModalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={adminStyles.modalContent}>
          <FAB
            style={adminStyles.fab}
            icon='backburger'
            onPress={() => setTeacherModalOpen(false)}
          />
          <Fragment>
            <Text></Text>
            <Headline style={globalStyles.headline}>Add Teacher</Headline>
            <Text></Text>
            <Text></Text>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                rank: '1',
              }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                addTeacher(values); // SUBMITTING TEACHER VALUE
                setTeacherModalOpen(false);
                navigation.navigate('AdminProfile');
                navigation.navigate('TeacherList');
                navigation.navigate('AdminProfile');
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={globalStyles.view}>
                  <TextInput
                    mode='outlined'
                    label='First Name'
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                  />
                  <TextInput
                    mode='outlined'
                    label='Last Name'
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                  />
                  <TextInput
                    mode='outlined'
                    label='Email'
                    autoCapitalize='none'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <Button
                    style={{ marginTop: 15 }}
                    onPress={handleSubmit}
                    title='Submit'
                    mode='contained'
                  >
                    Submit
                  </Button>
                </View>
              )}
            </Formik>
          </Fragment>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AddTeacher;
