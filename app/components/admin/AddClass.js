import React, { Fragment, useContext, useEffect } from "react";
import { View } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import globalStyles from "../styles/global";

const AddClass = ({ addClass }) => {

    return (
        <Fragment>
            <Headline style={globalStyles.headline}>Add Class</Headline>
            <Formik 
                initialValues={{ name: "" }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addClass(values);
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
    );
};

export default AddClass;