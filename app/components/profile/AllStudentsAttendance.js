import { StatusBar } from "expo-status-bar";
import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Title,
  DataTable,
  FAB,
  Provider as PaperProvider,
} from "react-native-paper";
import axios from "axios";

import { URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";

const DataRow = (props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.name_cell} style={{ flex: 2 }}>
        {props.name}
      </DataTable.Cell>
      <DataTable.Cell numeric></DataTable.Cell>
      <DataTable.Cell numeric></DataTable.Cell>
      <DataTable.Cell numeric></DataTable.Cell>
    </DataTable.Row>
  );
};

const AllStudentsAttendance = ({ navigation }) => {
  const [studentList, setStudentList] = useState([]);
  const {
    authState: { user },
  } = useContext(AuthContext);

  const getStudents = async () => {
    const res = await axios.get(URL + "/class/students/" + user.class_);
    console.log(res.data.data);
    setStudentList(res.data.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <React.Fragment>
      <PaperProvider>
        <View>
          <Title style={styles.title}>Attendance</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Student Name</DataTable.Title>
              <DataTable.Title numeric>Roll No.</DataTable.Title>
              <DataTable.Title numeric>Attendance</DataTable.Title>
            </DataTable.Header>
            {studentList.map((student) => (
              <DataRow name={student.name} key={student._id} />
            ))}
            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>
        </View>
      </PaperProvider>
      <FAB
        style={styles.fab}
        small
        icon="account-multiple-plus"
        label="Add Attendance"
        onPress={() => navigation.push("Add Attendance")}
      />
      <StatusBar style="auto" />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
  },
  fab: {
    width: 200,
    alignSelf: "center",
    bottom: 50,
    backgroundColor: "#6200EE",
  },
});

export default AllStudentsAttendance;
