import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, DataTable } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";
import { URL } from "../../../config";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthData = (props) => {
  return (
    <TouchableOpacity onPress={() => navigation.push("Month")}>
      <DataTable.Row style={{ backgroundColor: "#b3ffc6" }}>
        <DataTable.Cell>{props.name}</DataTable.Cell>
        <DataTable.Cell>13/30</DataTable.Cell>
        <DataTable.Cell>85</DataTable.Cell>
      </DataTable.Row>
    </TouchableOpacity>
  );
};

const StudentAttendance = ({ navigation }) => {
  const [monthData, setMonthData] = useState([]);
  const {
    authState: { user },
  } = useContext(AuthContext);

  const getMonthData = async () => {
    let MData = [];
    let monthStart = 1;
    let monthEnd = new Date().getMonth();
    monthEnd = monthEnd + 1;
    console.log(monthEnd, user);
    for (let i = monthStart; i <= monthEnd; i++) {
      const data = await axios.get(
        URL + "/attendance/student/" + user.id + "/" + i.toString()
      );
      console.log(URL + "/attendance/student/" + user.id + "/" + i.toString());
      data.data.monthName = monthNames[i - 1];
      MData.push(data.data);
    }
    console.log(MData);
    setMonthData(MData);
  };

  useEffect(() => {
    getMonthData();
  }, []);

  useEffect(() => {
    console.log(monthData);
  }, [monthData]);

  return (
    <View>
      <TouchableOpacity onPress={() => console.log("profile")}>
        <Card>
          <Card.Content>
            <View style={styles.profile_info}>
              <View>
                <Avatar.Icon
                  size={100}
                  icon="account"
                  style={styles.avatar_icon}
                />
              </View>
              <View style={{ marginLeft: 30, marginTop: 30 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {user.name}
                </Text>
                <Text>Class: {user.class_}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <Card
          style={{
            backgroundColor: "#c6b3ff",
          }}
        >
          <Card.Content>
            <View
              style={{
                borderColor: "black",
                borderWidth: 1.2,
                borderRadius: 3,
                backgroundColor: "white",
              }}
            >
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Month</DataTable.Title>
                  <DataTable.Title>P/T</DataTable.Title>
                  <DataTable.Title>Percent(%)</DataTable.Title>
                </DataTable.Header>
                {monthData.map((month) => (
                  <MonthData name={month.monthName} key={month._id} />
                ))}
              </DataTable>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile_info: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
  },
});

export default StudentAttendance;
