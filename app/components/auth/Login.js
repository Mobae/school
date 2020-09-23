import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Headline,
  TextInput,
  Button,
  TouchableRipple,
} from "react-native-paper";
import { Formik } from "formik";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";

import globalStyles from "../styles/global";

const Login = () => {
  const { LogIn, authState, getUser } = useContext(AuthContext);
  const handleSubmit = async (values) => {
    const { email, password } = values;
    LogIn({ email, password });
  };

  const createAlert = (title, message) =>
    Alert.alert(title, message, [{ text: "OK" }], { cancelable: false });

  const handleForgot = async (values) => {
    const { email } = values;
    if (!email) {
      createAlert("Error", "Please enter a valid Email.");
    } else {
      try {
        const res = await axios.post(URL + "/student/forgot/initial", {
          email,
        });
      } catch (err) {
        console.log(err);
        createAlert("Error", "Please enter a valid Email.");
      }
    }
  };

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 200 }}>
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
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              mode="outlined"
              label="Password"
              style={{ marginVertical: 10 }}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button
              style={{ marginTop: 8 }}
              onPress={handleSubmit}
              title="Submit"
              mode="contained"
              color="#4a3b82"
            >
              Submit
            </Button>
            <TouchableRipple
              onPress={() => handleForgot(values)}
              style={{
                marginTop: 8,
                marginLeft: 2,
                width: 128,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 6,
                  color: "#636a89",
                  marginLeft: 1,
                  marginRight: 1,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableRipple>
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
