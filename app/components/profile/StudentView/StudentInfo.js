import React, { Fragment, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import {
  List,
  ActivityIndicator,
  Title,
  Provider as PaperProvider,
} from "react-native-paper";
import { Formik } from "formik";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";
import { URL } from "../../../config";

const StudentInfo = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState({
    oldPass: true,
    newPass: true,
    newPass1: true,
  });

  const { info } = user;

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
          URL + "/student/stu/changepassword",
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
        <PaperProvider>
          <View style={{ alignItems: "center", margin: 20 }}>
            <View style={styles.info}>
              <ImageBackground
                source={require("../../../assets/avatar.png")}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              />
            </View>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
              {user.name}
            </Text>
          </View>

          <React.Fragment>
            <ScrollView>
              <View style={styles.info}>
                <Text style={styles.details}>Class: {user.className}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.details}>
                  Admission No.: {info.admissionNo}
                </Text>
              </View>
              <View style={styles.info}>
                {user.info.dob === undefined ? (
                  <Text style={styles.details}>DOB :</Text>
                ) : (
                  <Text style={styles.details}>DOB : {user.info.dob}</Text>
                )}
              </View>
              <View style={styles.info}>
                <Text style={styles.details}>Bus Route: {info.busNo}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.details}>
                  Phone Number: {"+91 " + info.phone}
                </Text>
              </View>
              <List.Accordion
                title="Parent Details"
                titleStyle={{ alignSelf: "flex-start" }}
                left={(props) => <List.Icon {...props} icon="account-child" />}
              >
                <ScrollView>
                  <View style={styles.info}>
                    <View style={styles.parentInfo}>
                      <Text style={styles.parentInfoText1}>
                        Father Details:
                      </Text>
                      <Text style={styles.parentInfoText2}>
                        Name: {info.fatherName}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.parentInfo}>
                      <Text style={styles.parentInfoText1}>
                        Mother Details:
                      </Text>
                      <Text style={styles.parentInfoText2}>
                        Name: {info.motherName}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.parentInfo}>
                      <Text style={styles.parentInfoText1}>
                        Gaurdian's Details:
                      </Text>
                      <Text style={styles.parentInfoText2}>
                        Name: {info.gaurdianName}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.parentInfo}>
                      <Text style={styles.parentInfoText1}>Address:</Text>
                      <Text style={styles.parentInfoText2}>{info.address}</Text>
                    </View>
                  </View>
                </ScrollView>
              </List.Accordion>
              <Formik
                initialValues={{ oldPass: "", newPass: "", newPass1: "" }}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <Fragment>
                    <View style={{ backgroundColor: "#DBD5E8" }}>
                      <View style={styles.info}>
                        <View style={{ flexDirection: "column" }}>
                          <Title style={{ fontSize: 18, marginBottom: 12 }}>
                            Change Password:{" "}
                          </Title>
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
                                color={
                                  eye.oldPass === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, oldPass: !eye.oldPass })
                                }
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
                                color={
                                  eye.newPass === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, newPass: !eye.newPass })
                                }
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
                                color={
                                  eye.newPass1 === true ? "black" : "#4a3b82"
                                }
                                onPress={() =>
                                  setEye({ ...eye, newPass1: !eye.newPass1 })
                                }
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ margin: 20, marginHorizontal: 40 }}>
                        <Button
                          mode="contained"
                          title="save"
                          color="#4a3b82"
                          onPress={() => handleSubmit(values)}
                        ></Button>
                      </View>
                    </View>
                  </Fragment>
                )}
              </Formik>
            </ScrollView>
          </React.Fragment>
        </PaperProvider>
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

export default StudentInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 5,
    margin: 20,
  },
  details: {
    fontSize: 15,
    fontWeight: "500",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  parentInfo: {
    flexDirection: "column",
  },
  parentInfoText1: {
    fontSize: 15,
    fontWeight: "500",
    fontWeight: "bold",
  },
  parentInfoText2: {
    marginLeft: 20,
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
