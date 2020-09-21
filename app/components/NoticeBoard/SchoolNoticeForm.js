import React, { Fragment, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import {
  Paragraph,
  TextInput,
  Button,
  Dialog,
  Portal,
  Provider as PaperProvider,
} from "react-native-paper";
import axios from "axios";
import { Formik } from "formik";
import globalStyles from "../styles/global";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";

const NoticeForm = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const {
    authState: { user, token },
  } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    const { title, description, author } = values;
    const date = new Date();
    const payload = {
      title,
      description,
      date,
      author,
    };
    console.log(payload);
    const res = await axios.post(URL + "/schoolnotice", payload, {
      "auth-token": token,
    });
    console.log(res.data);
    navigation.navigate("School Notice Board");
  };

  return (
    <PaperProvider>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Fragment>
            <View style={globalStyles.view}>
              <TextInput
                mode="outlined"
                label="Title"
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
              />
              <TextInput
                mode="outlined"
                label="Author"
                onChangeText={handleChange("author")}
                onBlur={handleBlur("author")}
                value={values.author}
                style={{ marginTop: 10 }}
              />
              <TextInput
                mode="outlined"
                label="Description"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                style={{ marginTop: 10 }}
                multiline={true}
                numberOfLines={12}
              />
            </View>
            <Button
              icon="content-save"
              mode="contained"
              onPress={showDialog}
              style={styles.save}
            >
              Save
            </Button>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Confirm</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>Are You Sure?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={() => {
                      handleSubmit(values);
                      hideDialog();
                    }}
                  >
                    Yes
                  </Button>
                  <Button onPress={hideDialog}>No</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </Fragment>
        )}
      </Formik>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },
  save: {
    marginTop: 20,
    width: 100,
    alignSelf: "flex-end",
    right: 10,
  },
  radio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  radioGrp: {
    marginLeft: 10,
  },
});

export default NoticeForm;
