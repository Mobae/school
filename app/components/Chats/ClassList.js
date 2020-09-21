import * as React from "react";
import axios from "axios";
import { View, StyleSheet, Text } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Searchbar,
  TouchableRipple,
  ActivityIndicator,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import { AdminContext } from "../../context/AdminContext";
import { AuthContext } from "../../context/AuthContext";
const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="account-group"
    style={{ backgroundColor: "#00674D" }}
  />
);
import adminStyles from "../admin/AdminStyles";

const FileClassList = ({ navigation }) => {
  const url = "https://school-server-testing.herokuapp.com";
  const [searchQuery, setSearchQuery] = React.useState("");
  const [classes, setClasses] = React.useState({});
  const [currClass, setCurrClass] = React.useState("");
  const [filtered, setFiltered] = React.useState();
  const [flag, setFlag] = React.useState(false);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const {
    authState 
  } = React.useContext(AuthContext);

  const { user, token } =  authState;

  const getClasses = async () => {
    try {
      let res = await axios.get(url + "/class/all", {
        headers: {
          "auth-token": token,
        },
      });
      const classes = res.data.data;
      setClasses(classes);
      setFiltered(classes);
      setFlag(true);
      let curr = classes[0]._id;
      setCurrClass(curr);
    } catch (err) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getClasses();
  }, []);

  React.useEffect(() => {
    console.log(filtered);
    if (searchQuery === "") {
      setFiltered(classes);
    } else {
      setFiltered(
        classes.filter((class_) => {
          if (class_.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return class_;
          }
        })
      );
    }
  }, [searchQuery]);

  if (flag) {
    return (
      <View>
        <Searchbar
          placeholder="Search class.."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View style={adminStyles.scroll}>
          <ScrollView>
            {filtered ? (
              filtered.map((class_) => (
                <View key={class_._id}>
                  <Card style={adminStyles.card}>
                    <TouchableRipple
                      onPress={() => {
                        setCurrClass(class_._id);
                        setFlag(false);
                        navigation.navigate("TeacherFileView", {
                          class_: class_._id,
                        });
                      }}
                    >
                      <React.Fragment>
                        <Card.Title title={class_.name} left={LeftContent} />
                        <Card.Content></Card.Content>
                      </React.Fragment>
                    </TouchableRipple>
                  </Card>
                </View>
              ))
            ) : (
              <Card style={adminStyles.card}>
                <Card.Title title="None" left={LeftContent} />
              </Card>
            )}
            <Text></Text>
          </ScrollView>
        </View>
      </View>
    );
  } else {
    // getClasses();
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loading}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
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

export default FileClassList;
