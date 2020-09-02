import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title, DataTable } from 'react-native-paper';

const AllStudentsAttendance = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Attendance</Title>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Student Name</DataTable.Title>
          <DataTable.Title numeric>Roll No.</DataTable.Title>
          <DataTable.Title numeric>Present</DataTable.Title>
          <DataTable.Title numeric>Absent</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell style={styles.name_cell}>Aryan</DataTable.Cell>
          <DataTable.Cell numeric>01</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={styles.name_cell}>Bada Aryan</DataTable.Cell>
          <DataTable.Cell numeric>02</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={styles.name_cell}>Medium Aryan</DataTable.Cell>
          <DataTable.Cell numeric>03</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={styles.name_cell}>Chota Aryan</DataTable.Cell>
          <DataTable.Cell numeric>04</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell style={styles.name_cell}>
            Non Existing Aryan
          </DataTable.Cell>
          <DataTable.Cell numeric>05</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>0</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
  },
  title: {
    alignSelf: 'center',
  },
  name_cell: {},
});

export default AllStudentsAttendance;
