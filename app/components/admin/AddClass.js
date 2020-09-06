import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";
import { MaterialIcons } from '@expo/vector-icons';

import globalStyles from "../styles/global";

const AddClass = ({ addClass, classModalOpen, setClassModalOpen, navigation }) => {

    return (
        <Modal visible={classModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
                <MaterialIcons
                    style={{ ...styles.modalToggle, ...styles.modalClose }}
                    name="close"
                    size={28}
                    onPress={() => setClassModalOpen(false)}
                />
                <Fragment>
                    <Headline style={globalStyles.headline}>Add Class</Headline>
                    <Formik 
                        initialValues={{ name: "" }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            addClass(values);                  // SUMITTING CLASS VALUE
                            setClassModalOpen(false);
                            navigation.navigate('ClassList');
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={globalStyles.view}>
                                <TextInput 
                                    mode="outlined"
                                    label="Class Name"
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
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
    );
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

export default AddClass;