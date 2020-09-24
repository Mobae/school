import React, { Fragment } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import { Headline, TextInput, Button, FAB } from 'react-native-paper';
import { Formik } from 'formik';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { ScrollView } from 'react-native-gesture-handler';

import { AdminContext } from '../../context/AdminContext';
import globalStyles from '../styles/global';
import adminStyles from './AdminStyles';

const AddStudent = ({
  addStudent,
  studentModalOpen,
  setStudentModalOpen,
  navigation,
  studentFlag,
  setStudentFlag,
}) => {
  const { adminState } = React.useContext(AdminContext);

  var classes = adminState.classes.map((class_) => {
    return {
      classId: class_._id,
      name: class_.name,
    };
  });

  return (
    <Modal visible={studentModalOpen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={adminStyles.modalContent}>
          <Text></Text>
          <Headline style={globalStyles.headline}>Add Student</Headline>
          <Fragment>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                studentClass: '',
                rank: '0',
                info: {
                  address: ' ',
                  motherName: ' ',
                  fatherName: ' ',
                  gaurdianName: ' ',
                  rollNo: ' ',
                  admissionNo: ' ',
                  busNo: ' ',
                  phone: ' ',
                  dob: ' ',
                },
              }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                setStudentModalOpen(false);
                addStudent(values); // SUBMITTING STUDENT VALUE
                setStudentFlag(!studentFlag);
                navigation.navigate('AdminProfile');
                navigation.navigate('AllStudentList');
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
                    onChangeText={handleChange('email')}
                    autoCapitalize='none'
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
                      values.studentClass = item.classId;
                    }}
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
                      mode='outlined'
                      label='Address'
                      onChangeText={handleChange('info.address')}
                      onBlur={handleBlur('info.address')}
                      value={values.info.address}
                    />
                    <TextInput
                      mode='outlined'
                      label="Mother's Name"
                      onChangeText={handleChange('info.motherName')}
                      onBlur={handleBlur('info.motherName')}
                      value={values.info.motherName}
                    />
                    <TextInput
                      mode='outlined'
                      label="Father's Name"
                      onChangeText={handleChange('info.fatherName')}
                      onBlur={handleBlur('info.fatherName')}
                      value={values.info.fatherName}
                    />
                    <TextInput
                      mode='outlined'
                      label="Gaurdian's Name"
                      onChangeText={handleChange('info.gaurdianName')}
                      onBlur={handleBlur('info.gaurdianName')}
                      value={values.info.gaurdianName}
                    />
                    <TextInput
                      mode='outlined'
                      label='Roll No.'
                      onChangeText={handleChange('info.rollNo')}
                      onBlur={handleBlur('info.rollNo')}
                      value={values.info.rollNo}
                    />
                    <TextInput
                      mode='outlined'
                      label='Admission No. '
                      onChangeText={handleChange('info.admissionNo')}
                      onBlur={handleBlur('info.admissionNo')}
                      value={values.info.admissionNo}
                    />
                    <TextInput
                      mode='outlined'
                      label='Date of Birth:  DD-MM-YYYY'
                      onChangeText={handleChange('info.dob')}
                      onBlur={handleBlur('info.dob')}
                      value={values.info.dob}
                    />
                    <TextInput
                      mode='outlined'
                      label='Bus No. '
                      onChangeText={handleChange('info.busNo')}
                      onBlur={handleBlur('info.busNo')}
                      value={values.info.busNo}
                    />
                    <TextInput
                      mode='outlined'
                      label='Phone No. '
                      keyboardType='phone-pad'
                      onChangeText={handleChange('info.phone')}
                      onBlur={handleBlur('info.phone')}
                      value={values.info.phone}
                    />
                    <Text></Text>
                    <View>
                      <Button
                        onPress={handleSubmit}
                        title='Submit'
                        mode='contained'
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
        </View>
      </TouchableWithoutFeedback>
      <FAB
        style={adminStyles.fab}
        icon='backburger'
        onPress={() => setStudentModalOpen(false)}
      />
    </Modal>
  );
};

export default AddStudent;
