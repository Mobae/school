import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const TeacherInfo = ({ navigation, route }) => {
  const { teacher } = route.params;

  return (
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
          {
            teacher.info === undefined ? (
              <View></View>
            ) : (
              <View style={styles.info}>
                <Text style={styles.details}>Contact No: {teacher.info.phoneNo}</Text>
              </View>  
            )
          }
          <View style={styles.info}>
            <Text style={styles.details}>Email:     {teacher.email}</Text>
          </View>
        </ScrollView>
      </React.Fragment>
    </React.Fragment>
  );
};

export default TeacherInfo;

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
});
