import React, { Fragment, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { List, Provider as PaperProvider } from "react-native-paper";
import { Formik } from "formik";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";
import { URL } from "../../../config";

const StudentInfo = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const { info } = user;

  const createErrorAlert = (message) =>
    Alert.alert("Error", message, [{ text: "OK" }], { cancelable: false });

  const createSuccessAlert = (message) =>
    Alert.alert("Success", message, [{ text: "OK" }], { cancelable: false });

  const handleSubmit = async (values) => {
    const { oldPass, newPass, newPass1 } = values;
    if (newPass !== newPass1) {
      createErrorAlert("The passwords do not match.");
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
      } catch (err) {
        console.log(err);
        createErrorAlert("Please enter the correct password.");
      }
    }
  };

  return (
    <React.Fragment>
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
              <Text style={styles.details}>DOB: {info.admissionNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>Bus Route: {info.busNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>Aadhar No.: {info.admissionNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Phone Number: {"+91 " + info.phone}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Date of Addmission: {info.admissionNo}
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
                    <Text style={styles.parentInfoText1}>Father Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {info.fatherName}
                    </Text>
                    <Text style={styles.parentInfoText2}>
                      Number: {info.fatherName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Mother Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {info.motherName}
                    </Text>
                    <Text style={styles.parentInfoText2}>
                      Number: {info.motherName}
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
                  <View style={styles.info}>
                    <View style={{ flexDirection: "column" }}>
                      <Text>Change Password: </Text>
                      <View style={{ flexDirection: "row" }}>
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
                          secureTextEntry={true}
                          placeholder="Enter old password"
                          onChangeText={handleChange("oldPass")}
                          onBlur={handleBlur("oldPass")}
                          value={values.oldPass}
                        />
                        <TouchableOpacity>
                          <FontAwesome
                            name="eye"
                            size={30}
                            color="black"
                            style={{ margin: 10, marginTop: 8 }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: "row" }}>
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
                          secureTextEntry={true}
                          placeholder="Enter new password"
                          onChangeText={handleChange("newPass")}
                          onBlur={handleBlur("newPass")}
                          value={values.newPass}
                        />
                        <TouchableOpacity>
                          <FontAwesome
                            name="eye"
                            size={30}
                            color="black"
                            style={{ margin: 10, marginTop: 8 }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: "row" }}>
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
                          secureTextEntry={true}
                          autoCapitalize="none"
                          placeholder="Confirm password"
                          onChangeText={handleChange("newPass1")}
                          onBlur={handleBlur("newPass1")}
                          value={values.newPass1}
                        />
                        <TouchableOpacity>
                          <FontAwesome
                            name="eye"
                            size={30}
                            color="black"
                            style={{ margin: 10, marginTop: 8 }}
                          />
                        </TouchableOpacity>
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
                </Fragment>
              )}
            </Formik>
          </ScrollView>
        </React.Fragment>
      </PaperProvider>
    </React.Fragment>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
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
});
