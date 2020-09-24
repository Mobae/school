import React, { Fragment } from "react";
import { View, Text, Alert } from "react-native";
import { TextInput, Button, Paragraph, Headline } from "react-native-paper";
import globalStyles from "../styles/global";
import { Formik } from "formik";
import axios from "axios";

import { URL } from "../../config";

const createAlert = (title, message) =>
  Alert.alert(title, message, [{ text: "OK" }], { cancelable: false });

const OTP = (props) => {
  const { _id, userType, email } = props.route.params;
  console.log(email, userType);
  const handleSubmit = async (values) => {
    const { otpStr } = values;
    try {
      const res = await axios.post(URL + "/student/forgot/verify", {
        _id,
        userType,
        otpStr,
        email,
      });
      if (res.data.success) {
        createAlert(
          "Success",
          "Please check your email and junk folder for your new password."
        );
      }
    } catch (err) {
      console.log(err);
      createAlert("Error", "Invalid/expired OTP");
    }
  };
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 200 }}>
      <View style={globalStyles.view}>
        <Headline style={{ fontSize: 18, fontWeight: "bold" }}>
          Enter OTP sent to :
        </Headline>
        <Headline style={{ fontSize: 18, fontWeight: "bold" }}>
          {email}
        </Headline>
        <Formik
          initialValues={{ otpStr: "" }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Fragment>
              <TextInput
                mode="outlined"
                placeholder="Enter OTP"
                keyboardType="numeric"
                maxLength={6}
                style={{ marginVertical: 20 }}
                autoCapitalize="none"
                value={values.otpStr}
                secureTextEntry={true}
                onChangeText={handleChange("otpStr")}
                onBlur={handleBlur("otpStr")}
                keyboardType="phone-pad"
              />
              <Button
                style={{ marginTop: 8 }}
                title="Submit"
                mode="contained"
                color="#4a3b82"
                onPress={handleSubmit}
              >
                Submit
              </Button>
            </Fragment>
          )}
        </Formik>
        <Paragraph style={{ marginTop: 50 }}>
          OTP will expire in 5 mins. Please check your mail.
        </Paragraph>
      </View>
    </View>
  );
};

export default OTP;
