import React, { Fragment } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const StudentInfo = () => {
  return (
    <Fragment>
      <View style={{ alignItems: 'center', margin: 20 }}>
        <View style={styles.info}>
          <ImageBackground
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            style={{ height: 100, width: 100 }}
            imageStyle={{ borderRadius: 15 }}
          />
        </View>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
          Aditya Yadav
        </Text>
      </View>

      <Fragment>
        <ScrollView>
          <View style={styles.info}>
            <Text style={styles.details}>Class:</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>Admission No.:</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>DOB:</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>Buss Route:</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>Aadhar No.:</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>Date of Addmission:</Text>
          </View>
          <List.Accordion
            title='Parent Details'
            titleStyle={{ alignSelf: 'flex-start' }}
            left={(props) => <List.Icon {...props} icon='account-child' />}
          >
            <ScrollView>
              <View style={styles.info}>
                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontWeight: 'bold',
                    }}
                  >
                    Father Details:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    Name
                  </Text>
                  <Text style={{ marginLeft: 20 }}>Number</Text>
                </View>
              </View>
              <View style={styles.info}>
                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontWeight: 'bold',
                    }}
                  >
                    Mother Details:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    Name
                  </Text>
                  <Text style={{ marginLeft: 20 }}>Number</Text>
                </View>
              </View>
              <View style={styles.info}>
                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      fontWeight: 'bold',
                    }}
                  >
                    Address:
                  </Text>
                  <Text
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    GWALIOR
                  </Text>
                </View>
              </View>
            </ScrollView>
          </List.Accordion>
          <View style={styles.info}>
            <View style={{ flexDirection: 'column' }}>
              <Text>Change Password: </Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name='lock-outline'
                  size={24}
                  color='black'
                  style={{ margin: 10 }}
                />
                <TextInput
                  style={{
                    margin: 10,
                    alignSelf: 'flex-start',
                    marginBottom: 0,
                  }}
                  autoCapitalize='none'
                  placeholder='Enter new password'
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                  name='lock-outline'
                  size={24}
                  color='black'
                  style={{ margin: 10 }}
                />
                <TextInput
                  style={{
                    margin: 10,
                    alignSelf: 'flex-start',
                    marginBottom: 0,
                  }}
                  autoCapitalize='none'
                  placeholder='Confirm password'
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    </Fragment>
  );
};

export default StudentInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    margin: 20,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 18,
    bottom: 0,
    height: 63,
    borderRadius: 50,
    backgroundColor: '#00bfff',
    width: 63,
  },
});