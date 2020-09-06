import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button, FAB } from "react-native-paper";
import { Formik } from "formik";
import { MaterialIcons } from '@expo/vector-icons';

import globalStyles from "../styles/global";

const AddTeacher = ({ addTeacher, teacherModalOpen, setTeacherModalOpen, navigation }) => {


    return (
        <Modal visible={teacherModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent} >
                <FAB
                    style={styles.fab}
                    icon="backburger"
                    onPress={() => setTeacherModalOpen(false)}
                />
                <Fragment>
                <Text></Text>
                    <Headline style={globalStyles.headline}>Add Teacher</Headline>
                    <Text></Text>
                    <Text></Text>
                    <Formik
                        initialValues={{ 
                            firstName: "",
                            lastName: "",
                            email: "",
                            rank: "1"
                        }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            addTeacher(values);          // SUBMITTING TEACHER VALUE
                            setTeacherModalOpen(false);
                            navigation.navigate('TeacherList');
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

export default AddTeacher;