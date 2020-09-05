import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Title,
  DataTable,
  FAB,
  Provider as PaperProvider,
} from 'react-native-paper';

const AllStudentsAttendance = ({ navigation }) => {
  return (
    <React.Fragment>
      <PaperProvider>
        <View>
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
              <DataTable.Cell style={styles.name_cell}>
                Bada Aryan
              </DataTable.Cell>
              <DataTable.Cell numeric>02</DataTable.Cell>
              <DataTable.Cell numeric>20</DataTable.Cell>
              <DataTable.Cell numeric>0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={styles.name_cell}>
                Medium Aryan
              </DataTable.Cell>
              <DataTable.Cell numeric>03</DataTable.Cell>
              <DataTable.Cell numeric>20</DataTable.Cell>
              <DataTable.Cell numeric>0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={styles.name_cell}>
                Chota Aryan
              </DataTable.Cell>
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
        </View>
      </PaperProvider>
      <FAB
        style={styles.fab}
        small
        icon="account-multiple-plus"
        label="Add Attendance"
        onPress={() => navigation.push('Add Attendance')}
      />
      <StatusBar style="auto" />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  fab: {
<<<<<<< HEAD
    position: 'absolute',
    // display: 'flex',
    margin: 25,
    // right: 90,
    alignSelf: 'center',
    bottom: 10,
=======
    width: 200,
    alignSelf: 'center',
    bottom: 50,
>>>>>>> 2a822e03db8aa91f24b7d25bcb2191ca5e3a2fdb
  },
});

export default AllStudentsAttendance;
