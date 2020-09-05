import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Card, DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const StudentAttendance = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('profile')}>
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
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  Aditya Yadav
                </Text>
                <Text>Class: X B</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <Card
          style={{
            backgroundColor: '#c6b3ff',
          }}
        >
          <Card.Content>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 1.2,
                borderRadius: 3,
                backgroundColor: 'white',
              }}
            >
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Month</DataTable.Title>
                  <DataTable.Title>P/T</DataTable.Title>
                  <DataTable.Title>Percent(%)</DataTable.Title>
                </DataTable.Header>
                <TouchableOpacity onPress={() => navigation.push('Month')}>
                  <DataTable.Row style={{ backgroundColor: '#b3ffc6' }}>
                    <DataTable.Cell>January</DataTable.Cell>
                    <DataTable.Cell>13/30</DataTable.Cell>
                    <DataTable.Cell>85</DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
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
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
  },
});

export default StudentAttendance;
