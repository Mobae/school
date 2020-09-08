import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button, FAB } from "react-native-paper";
import { Formik } from "formik";
import SearchableDropdown from 'react-native-searchable-dropdown';

import globalStyles from "../styles/global";
import AddClass from "./AddClass";
import adminStyles from './AdminStyles';
import {AdminContext} from '../../context/AdminContext';

const AddClassTeacher = ({ classTeacherModalOpen, setClassTeacherModalOpen, navigation, setPin1 }) => {

    const { adminState, currClass, getTeachers, classObj, addClassTeacher, setCurrClass } = React.useContext(AdminContext);
    
    useEffect(() => {
        getTeachers();
    }, [])
    
    var teachers = adminState.teachers.map((teacher) => {
        return({
            teacherId: teacher._id,
            name: teacher.name
        })
    });
    if(classObj.classTeacher[0] !== undefined){
        const currClassTeacher = classObj.classTeacher[0];
        var filteredTeachers = teachers.filter((teacher) => {
            if(teacher.teacherId !== currClassTeacher._id){
                return(teacher);
            }
        });
    } else {
        var filteredTeachers = teachers;
    }

    return (
        <Modal visible={classTeacherModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={adminStyles.modalContent}>
                <FAB
                    style={adminStyles.fab}
                    icon="backburger"
                    onPress={() => setClassTeacherModalOpen(false)}
                />
                <Fragment>
                <Text></Text>
                    <Headline style={globalStyles.headline}>Add Class Teacher</Headline>
                    <Text></Text>
                    <Text></Text>
                    <Formik 
                        initialValues={{ teacher: "", class: currClass }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            addClassTeacher(values);                  // SUMITTING CLASS VALUE
                            setClassTeacherModalOpen(false);
                            setPin1(currClass);
                            navigation.navigate('ClassView');
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={globalStyles.view}>
                                <SearchableDropdown 
                                    items={filteredTeachers}
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
                                        values.teacher = item.teacherId;
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
    );
};

export default AddClassTeacher;