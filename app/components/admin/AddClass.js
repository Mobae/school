import React, { Fragment } from "react";
import { View, Text, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Headline, TextInput, Button, FAB } from "react-native-paper";
import { Formik } from "formik";

import globalStyles from "../styles/global";
import adminStyles from "./AdminStyles";

const AddClass = ({ addClass, classModalOpen, setClassModalOpen, navigation }) => {

    return (
        <Modal visible={classModalOpen} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={adminStyles.modalContent}>
                <FAB
                    style={adminStyles.fab}
                    icon="backburger"
                    onPress={() => setClassModalOpen(false)}
                />
                <Fragment>
                <Text></Text>
                    <Headline style={globalStyles.headline}>Add Class</Headline>
                    <Text></Text>
                    <Text></Text>
                    <Formik 
                        initialValues={{ name: "" }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();
                            addClass(values);                  // SUMITTING CLASS VALUE
                            setClassModalOpen(false);
                            navigation.navigate('AdminProfile');
                            navigation.navigate('ClassList');
                            navigation.navigate('AdminProfile');
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

export default AddClass;