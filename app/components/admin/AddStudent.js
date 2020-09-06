import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import { MaterialIcons } from '@expo/vector-icons';

import globalStyles from "../styles/global";

const AddStudent = ({ addStudent, studentModalOpen, setStudentModalOpen, navigation }) => {


    return (
        <Modal visible={studentModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent} >
                <MaterialIcons
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    name="close"
                    size={28}
                    onPress={() => setStudentModalOpen(false)}
                />
                <Fragment>
                    <Headline style={globalStyles.headline}>Add Student</Headline>
                    <Formik
                        initialValues={{ 
                            firstName: "",
                            lastName: "",
                            email: "",
                            class: "",
                            rank: "0"
                        }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            addStudent(values);          // SUBMITTING STUDENT VALUE
                            navigation.navigate('StudentList');
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
                                    label="First Name"
                                    onChangeText={handleChange("firstName")}
                                    onBlur={handleBlur("firstName")}
                                    value={values.email}
                                />
                                <Button
                                    style={{ marginTop: 15 }}
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
    }
});

export default AddStudent;