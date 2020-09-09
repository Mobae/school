import React, { useContext, useEffect, useState, Fragment } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  DataTable,
  Paragraph,
  TouchableRipple,
} from "react-native-paper";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

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
  const initialMonth = new Date().getMonth() + 1;
  const [month, setMonth] = useState(initialMonth);
  //   const [monthData, setMonthData] = useState([]);
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  //   const getMonthData = async () => {
  //     let MData = [];
  //     let monthStart = 1;
  //     let monthEnd = new Date().getMonth();
  //     monthEnd = monthEnd + 1;
  //     console.log(monthEnd, user);
  //     for (let i = monthStart; i <= monthEnd; i++) {
  //       const data = await axios.get(
  //         URL + "/attendance/student/" + user.id + "/" + i.toString()
  //       );
  //       console.log(URL + "/attendance/student/" + user.id + "/" + i.toString());
  //       data.data.monthName = monthNames[i - 1];
  //       MData.push(data.data);
  //     }
  //     console.log(MData);
  //     setMonthData(MData);
  //   };

  //   useEffect(() => {
  //     getMonthData();
  //   }, []);

  //   useEffect(() => {
  //     console.log(monthData);
  //   }, [monthData]);
  const [attState, setAttState] = useState({
    tDays: 0,
    pDays: 0,
    percentage: 0,
  });

  const getMonthAtt = async () => {
    console.log(
      URL + "/attendance/student/" + user._id + "/" + month.toString()
    );
    const res = await axios.get(
      URL + "/attendance/student/" + user._id + "/" + month.toString(),
      {
        headers: {
          "auth-token": authState.token,
        },
      }
    );
    const data = res.data.data;
    console.log(data);
    const p = data.filter((d) => d.status === "P");
    setAttState({
      tDays: data.length,
      pDays: p.length,
      percentage: ((p.length / data.length) * 100).toFixed(2),
    });
  };

  useEffect(() => {
    console.log(month);
    getMonthAtt();
  }, [month]);

  return (
    <Fragment>
      <DropDownPicker
        items={monthNames.map((m, i) => ({ label: m, value: i + 1 }))}
        defaultValue={month}
        containerStyle={{ height: 60, margin: 10 }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => setMonth(item.value)}
      />
      <View style={{ zIndex: 1 }}>
        <Card style={styles.card}>
          <TouchableRipple>
            <Fragment>
              <Card.Title title="Attendance" subtitle={monthNames[month - 1]} />
              <Card.Content style={{ marginBottom: 12 }}>
                <Paragraph>Present Days: {attState.pDays}</Paragraph>
                <Paragraph>Total Days: {attState.tDays}</Paragraph>
                <Paragraph>Percent: {attState.percentage + "%"}</Paragraph>
              </Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  profile_info: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
  },
  card: { margin: 10, marginBottom: 0, marginTop: 15, paddingTop: 5 },
});

export default StudentAttendance;
