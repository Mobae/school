import { StatusBar } from "expo-status-bar";
import React, { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Title,
  DataTable,
  FAB,
  Portal,
  Provider as PaperProvider,
} from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

import { URL } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import { AdminContext } from '../../context/AdminContext';

const Fab = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "calendar-today" : "plus"}
          fabStyle={{ backgroundColor: "#6200EE" }}
          actions={[
            {
              icon: "pencil",
              label: "Edit Attendance",
              onPress: () => navigation.push("Edit Attendance"),
            },
            {
              icon: "plus",
              label: "Add Attendance",
              onPress: () => navigation.push("Add Attendance"),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>
  );
};

const DataRow = (props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.name_cell} style={{ flex: 2 }}>
        {props.name}
      </DataTable.Cell>
      <DataTable.Cell numeric>{props.rollNo}</DataTable.Cell>
      <DataTable.Cell numeric>{props.att}</DataTable.Cell>
    </DataTable.Row>
  );
};

const AllStudentsAttendance = ({ navigation }) => {

  const { currClass } = React.useContext(AdminContext);

  const isFocused = useIsFocused();
  const [studentList, setStudentList] = useState([]);

  const getStudents = async () => {
    try {
      const res = await axios.get(URL + "/attendance/class/" + currClass);
      console.log(res.data.data);
      const students = res.data.data;
      const pt = students.map((stu) => {
        const p = stu.attendance.filter((status) => status === "P").length;
        const t = stu.attendance.length;
        const pt = { p, t };
        stu.pt = pt;
        return stu;
      });
      setStudentList(pt);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStudents();
    return () => console.log("clean up");
  }, [isFocused]);

  return (
    <React.Fragment>
      <PaperProvider>
        <View>
          <Title style={styles.title}>Attendance</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 2 }}>
                Student Name
              </DataTable.Title>
              <DataTable.Title numeric>Roll No.</DataTable.Title>
              <DataTable.Title numeric>Attendance</DataTable.Title>
            </DataTable.Header>
            {studentList.map((student) => (
              <DataRow
                name={student.name}
                key={student._id}
                rollNo={student.rollNo}
                att={((student.pt.p / student.pt.t) * 100).toFixed(2) + "%"}
              />
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