import React, { Fragment, useContext, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  Headline,
  TextInput,
  Button,
  TouchableRipple,
  Paragraph,
} from "react-native-paper";
import { Formik } from "formik";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";

import globalStyles from "../styles/global";

const Login = ({ navigation }) => {
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
        if (res.data._id) {
          const { _id, userType } = res.data;
          navigation.push("otp", { _id, userType });
        }
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
          <View>
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
            </View>
            <View
              style={{ marginLeft: "auto", marginRight: 15, marginTop: 15 }}
            >
              <TouchableRipple
                onPress={() => {
                  handleForgot(values);
                }}
              >
                <Paragraph
                  style={{
                    color: "#636a89",
                    fontWeight: "bold",
                  }}
                >
                  Forgot Password?
                </Paragraph>
              </TouchableRipple>
            </View>
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
