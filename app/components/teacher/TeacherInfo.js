import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { Title, ActivityIndicator } from "react-native-paper";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";

const TeacherInfo = ({ navigation, route }) => {
  const { teacher } = route.params;
  const [loading, setLoading] = React.useState(false);
  const { authState } = React.useContext(AuthContext);
  const { user } = authState;
  const [eye, setEye] = React.useState({
    oldPass: true,
    newPass: true,
    newPass1: true,
  });

  const createErrorAlert = (message) =>
    Alert.alert("Error", message, [{ text: "OK" }], { cancelable: false });

  const createSuccessAlert = (message) =>
    Alert.alert("Success", message, [{ text: "OK" }], { cancelable: false });

  const handleSubmit = async (values) => {
    const { oldPass, newPass, newPass1 } = values;
    setLoading(true);
    if (newPass !== newPass1) {
      createErrorAlert("The passwords do not match.");
      setLoading(false);
    } else {
      try {
        const res = await axios.post(
          URL + "/student/tea/changepassword",
          {
            newPass,
            oldPass,
            _id: user._id,
          },
          {
            headers: {
              "auth-token": authState.token,
            },
          }
        );
        console.log(res);
        createSuccessAlert("Password successfully changed.");
        setLoading(false);
      } catch (err) {
        console.log(err);
        createErrorAlert("Please enter the correct password.");
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      {!loading ? (
        <React.Fragment>
          <View style={{ alignItems: "center", margin: 20 }}>
            <View style={styles.info}>
              <ImageBackground
                source={require("../../assets/avatar.png")}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              />
            </View>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              Teacher Name : {teacher.name}
            </Text>
          </View>
          <React.Fragment>
            <ScrollView>
              {teacher.info === undefined ? (
                <View></View>
              ) : (
                <View style={styles.info}>
                  <Text style={styles.details}>
                    Contact No: {teacher.info.phoneNo}
                  </Text>
                </View>
              )}
              <View style={styles.info}>
                <Text style={styles.details}>Email: {teacher.email}</Text>
              </View>
              <View style={{ backgroundColor: "#DBD5E8" }}>
                <View style={styles.info}>
                  <View style={{ flexDirection: "column" }}>
                    <Title style={{ fontSize: 18, marginBottom: 12 }}>
                      Change Password:{" "}
                    </Title>

                    <Formik
                      initialValues={{ oldPass: "", newPass: "", newPass1: "" }}
                      onSubmit={(values) => handleSubmit(values)}
                    >
                      {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <React.Fragment>
                          <View style={{ flexDirection: "row", width: "100%" }}>
                            <MaterialCommunityIcons
                              name="lock-outline"
                              size={24}
                              color="black"
                              style={{ margin: 10 }}
                            />

                            <TextInput
                              style={{
                                margin: 10,
                                alignSelf: "flex-start",
                                marginBottom: 0,
                              }}
                              autoCapitalize="none"
                              secureTextEntry={eye.oldPass}
                              placeholder="Enter old password"
                              placeholderTextColor="#000"
                              onChangeText={handleChange("oldPass")}
                              onBlur={handleBlur("oldPass")}
                              value={values.oldPass}
                            />
                            <View
                              style={{
                                alignSelf: "center",
                                marginLeft: "auto",
                                marginRight: 25,
                                marginVertical: 10,
                              }}
                            >
                              <FontAwesome
                                name="eye"
                                size={30}
                                color="black"
                                color={
                                  eye.oldPass === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, oldPass: !eye.oldPass })
                                }
                                style={{ margin: 10, marginTop: 8 }}
                              />
                            </View>
                          </View>
                          <View style={{ flexDirection: "row", width: "100%" }}>
                            <MaterialCommunityIcons
                              name="lock-outline"
                              size={24}
                              color="black"
                              style={{ margin: 10 }}
                            />

                            <TextInput
                              style={{
                                margin: 10,
                                alignSelf: "flex-start",
                                marginBottom: 0,
                              }}
                              autoCapitalize="none"
                              secureTextEntry={eye.newPass}
                              placeholder="Enter new password"
                              placeholderTextColor="#000"
                              onChangeText={handleChange("newPass")}
                              onBlur={handleBlur("newPass")}
                              value={values.newPass}
                            />
                            <View
                              style={{
                                alignSelf: "center",
                                marginLeft: "auto",
                                marginRight: 25,
                                marginVertical: 10,
                              }}
                            >
                              <FontAwesome
                                name="eye"
                                size={30}
                                color="black"
                                color={
                                  eye.newPass === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, newPass: !eye.newPass })
                                }
                                style={{ margin: 10, marginTop: 8 }}
                              />
                            </View>
                          </View>
                          <View style={{ flexDirection: "row", width: "100%" }}>
                            <MaterialCommunityIcons
                              name="lock-outline"
                              size={24}
                              color="black"
                              style={{ margin: 10 }}
                            />
                            <TextInput
                              style={{
                                margin: 10,
                                alignSelf: "flex-start",
                                marginBottom: 0,
                              }}
                              secureTextEntry={eye.newPass1}
                              autoCapitalize="none"
                              placeholder="Confirm password"
                              placeholderTextColor="#000"
                              onChangeText={handleChange("newPass1")}
                              onBlur={handleBlur("newPass1")}
                              value={values.newPass1}
                            />
                            <View
                              style={{
                                alignSelf: "center",
                                marginLeft: "auto",
                                marginRight: 25,
                                marginVertical: 10,
                                marginBottom: 0,
                              }}
                            >
                              <FontAwesome
                                name="eye"
                                size={30}
                                color="black"
                                style={{ margin: 10, marginTop: 8 }}
                                color={
                                  eye.newPass1 === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, newPass1: !eye.newPass1 })
                                }
                              />
                            </View>
                          </View>
                          <View style={{ margin: 20, marginHorizontal: 40 }}>
                            <Button
                              mode="contained"
                              title="save"
                              color="#0a6605"
                              onPress={handleSubmit}
                            ></Button>
                          </View>
                        </React.Fragment>
                      )}
                    </Formik>
                  </View>
                </View>
              </View>
            </ScrollView>
          </React.Fragment>
        </React.Fragment>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loading}
            color="#4a3b82"
          />
        </View>
      )}
    </React.Fragment>
  );
};

export default TeacherInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    margin: 20,
  },
  details: {
    fontSize: 15,
    fontWeight: "500",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  loading: {
    alignSelf: "center",
  },
});
