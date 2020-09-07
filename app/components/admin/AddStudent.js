import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button, FAB } from "react-native-paper";
import { Formik, Field } from "formik";
import { MaterialIcons } from '@expo/vector-icons';

import {AdminContext} from '../../context/AdminContext';

import SearchableDropdown from 'react-native-searchable-dropdown';

import globalStyles from "../styles/global";

const AddStudent = ({ addStudent, studentModalOpen, setStudentModalOpen, navigation }) => {
    const { adminState } = React.useContext(AdminContext);
    
    var classes = adminState.classes.map((class_) => {
        return ({
            classId: class_._id,
            name: class_.name
        });
    });

    return (
        <Modal visible={studentModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent} >
                <FAB
                    style={styles.fab}
                    icon="backburger"
                    onPress={() => setStudentModalOpen(false)}
                />
                <Fragment>
                    <Text></Text>
                    <Headline style={globalStyles.headline}>Add Student</Headline>
                    <Text></Text>
                    <Text></Text>
                    <Formik
                        initialValues={{ 
                            firstName: "",
                            lastName: "",
                            email: "",
                            studentClass: "",
                            rank: "0"
                        }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            navigation.navigate('ClassList');
                            addStudent(values);          // SUBMITTING STUDENT VALUE
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={globalStyles.view}>
                                <TextInput
                                    mode="outlined"
                                    label="First Name"
                                    onChangeText={handleChange("firstName")}
                                    onBlur={handleBlur("firstName")}
                                    value={values.firstName}
                                />
                                <TextInput
                                    mode="outlined"
                                    label="Last Name"
                                    onChangeText={handleChange("lastName")}
                                    onBlur={handleBlur("lastName")}
                                    value={values.lastName}
                                />
                                <TextInput
                                    mode="outlined"
                                    label="Email"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                />

                                <SearchableDropdown 
                                    items={classes}
                                    textInputProps={
                                    {
                                        placeholder: "Choose Class",
                                        underlineColorAndroid: "transparent",
                                        style: {
                                            marginTop: 15,
                                            padding: 12,
                                            borderWidth: 1,
                                            borderColor: '#ccc',
                                            borderRadius: 5,
                                        },
                                        onTextChange: text => console.log(text)
                                    }
                                    }
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

                                <Button
                                    style={{ marginTop: 50 }}
                                    onPress={handleSubmit}
                                    title="Submit"
                                    mode="contained"
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
    )
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 0,
    },
    modalToggle: {
        marginBottom: 10,
        padding: 10,
        alignSelf: 'center',
        position: 'relative'
    },
    modalClose: {

    },  
    addBtn: {
        backgroundColor: 'gray',
        marginLeft: 240,
        borderRadius: 50
    },
    modalContent: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default AddStudent;