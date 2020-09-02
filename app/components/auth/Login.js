import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import globalStyles from "../styles/global";

const Login = () => {
  const handleSubmit = async (values) => {
    const { email, password } = values;
    fetch("http://92306d213199.ngrok.io/student/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <Headline style={globalStyles.headline}>Login</Headline>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={globalStyles.view}>
            <TextInput
              mode="outlined"
              label="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              mode="outlined"
              label="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
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

export default Login;
