import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

import { AuthContext } from "../../context/AuthContext";

import globalStyles from "../styles/global";

const Login = () => {
  const { LogIn, authState } = useContext(AuthContext);
  const handleSubmit = async (values) => {
    const { email, password } = values;
    LogIn({ email, password });
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
