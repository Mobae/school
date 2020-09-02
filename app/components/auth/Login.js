import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import globalStyles from "../styles/global";

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.view}>
          <TextInput
            style={globalStyles.input}
            mode="outlined"
            label="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            style={globalStyles.input}
            mode="outlined"
            label="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button
            style={globalStyles.input}
            onPress={handleSubmit}
            title="Submit"
            mode="contained"
          >
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 5,
    marginTop: 20,
  },
});

export default Login;
