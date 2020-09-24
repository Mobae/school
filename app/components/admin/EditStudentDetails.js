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
import SearchableDropdown from 'react-native-searchable-dropdown';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

import { AdminContext } from '../../context/AdminContext';

import { URL } from '../../config';

import globalStyles from '../styles/global';
import adminStyles from './AdminStyles';

const EditStudent = ({ user, editModal, openEditModal, navigation, token }) => {
  const url = URL;

  const headers = {
    'auth-token': token,
  };

  const {
    adminState,
    getAllStudents,
    getAllData,
    reload,
    setReload,
  } = React.useContext(AdminContext);

  var classes = adminState.classes.map((class_) => {
    return {
      classId: class_._id,
      name: class_.name,
    };
  });

  const editStudent = async (values) => {
    try {
      values.studentId = user._id;
      const res = await axios.post(url + '/student/update/student', values, {
        headers,
      });
      setReload(!reload);
      // navigation.navigate('AllStudentList');
    } catch (err) {
      console.log(err);
    }
  };

  let defaultClass = classes.filter(
    (class_) => class_.classId == user.studentClass
  );
  let defaultClassIndex = classes.indexOf(defaultClass[0]);

  return (
    <Modal visible={editModal} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={adminStyles.modalContent}>
          <Fragment>
            <Text></Text>
            <Headline style={globalStyles.headline}>Edit Student</Headline>
            <Text></Text>
            <Text></Text>
            <Formik
              initialValues={{
                name: user.name,
                email: user.email,
                classId: '',
                rank: '0',
                info: user.info,
              }}
              onSubmit={(values, actions) => {
                openEditModal(false);
                editStudent(values); // SUBMITTING STUDENT VALUE
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={globalStyles.view}>
                  <TextInput
                    mode="outlined"
                    label="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  <TextInput
                    mode="outlined"
                    label="Email"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  <SearchableDropdown
                    items={classes}
                    textInputProps={{
                      placeholder: 'Choose Class',
                      underlineColorAndroid: 'transparent',
                      style: {
                        marginTop: 15,
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                      },
                      onTextChange: (text) => console.log(text),
                    }}
                    onItemSelect={(item) => {
                      values.classId = item.classId;
                    }}
                    defaultIndex={defaultClassIndex}
                    containerStyle={{ padding: 1 }}
                    itemStyle={{
                      padding: 10,
                      marginTop: 2,
                      backgroundColor: '#ddd',
                      borderColor: '#bbb',
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 200 }}
                  />
                  <ScrollView style={{ marginBottom: 350, marginTop: 8 }}>
                    <TextInput
                      mode="outlined"
                      label="Address"
                      onChangeText={handleChange('info.address')}
                      onBlur={handleBlur('info.address')}
                      value={values.info.address}
                    />
                    <TextInput
                      mode="outlined"
                      label="DOB ..."
                      onChangeText={handleChange('info.dob')}
                      onBlur={handleBlur('info.dob')}
                      value={values.info.dob}
                    />
                    <TextInput
                      mode="outlined"
                      label="Mother's Name"
                      onChangeText={handleChange('info.motherName')}
                      onBlur={handleBlur('info.motherName')}
                      value={values.info.motherName}
                    />
                    <TextInput
                      mode="outlined"
                      label="Father's Name"
                      onChangeText={handleChange('info.fatherName')}
                      onBlur={handleBlur('info.fatherName')}
                      value={values.info.fatherName}
                    />
                    <TextInput
                      mode="outlined"
                      label="Gaurdian's Name"
                      onChangeText={handleChange('info.gaurdianName')}
                      onBlur={handleBlur('info.gaurdianName')}
                      value={values.info.gaurdianName}
                    />
                    <TextInput
                      mode="outlined"
                      label="Roll No."
                      onChangeText={handleChange('info.rollNo')}
                      onBlur={handleBlur('info.rollNo')}
                      value={values.info.rollNo}
                    />
                    <TextInput
                      mode="outlined"
                      label="Admission No. "
                      onChangeText={handleChange('info.admissionNo')}
                      onBlur={handleBlur('info.admissionNo')}
                      value={values.info.admissionNo}
                    />
                    <TextInput
                      mode="outlined"
                      label="Bus No. "
                      onChangeText={handleChange('info.busNo')}
                      onBlur={handleBlur('info.busNo')}
                      value={values.info.busNo}
                    />
                    <TextInput
                      mode="outlined"
                      label="Phone No. "
                      keyboardType="phone-pad"
                      onChangeText={handleChange('info.phone')}
                      onBlur={handleBlur('info.phone')}
                      value={values.info.phone}
                    />
                    <Text></Text>
                    <View>
                      <Button
                        onPress={handleSubmit}
                        title="Submit"
                        mode="contained"
                      >
                        Submit
                      </Button>
                      <Text></Text>
                    </View>
                  </ScrollView>
                </View>
              )}
            </Formik>
          </Fragment>
          <FAB
            style={adminStyles.fab}
            icon="backburger"
            onPress={() => openEditModal(false)}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default EditStudent;
