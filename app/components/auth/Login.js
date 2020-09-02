import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import globalStyles from "../styles/global";

const Login = () => {
  const handleSubmit = async (values) => {
    console.log(values);
    await fetch("http://8db19f8be448.ngrok.io/auth/login", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // fetch("192.168.1.4:5000/student/add", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: values,
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => handleSubmit(values)}
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
