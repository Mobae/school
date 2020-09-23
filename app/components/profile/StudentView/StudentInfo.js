import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { List, Title, Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { AuthContext } from '../../../context/AuthContext';

const StudentInfo = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;

  const { info } = user;

  return (
    <React.Fragment>
      <PaperProvider>
        <View style={{ alignItems: 'center', margin: 20 }}>
          <View style={styles.info}>
            <ImageBackground
              source={require('../../../assets/avatar.png')}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 15 }}
            />
          </View>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            {user.name}
          </Text>
        </View>

        <React.Fragment>
          <ScrollView>
            <View style={styles.info}>
              <Text style={styles.details}>Class: {user.className}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Admission No.: {info.admissionNo}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>DOB: {info.admissionNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>Bus Route: {info.busNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>Aadhar No.: {info.admissionNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Phone Number: {'+91 ' + info.phone}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Date of Addmission: {info.admissionNo}
              </Text>
            </View>
            <List.Accordion
              title="Parent Details"
              titleStyle={{ alignSelf: 'flex-start' }}
              left={(props) => <List.Icon {...props} icon="account-child" />}
            >
              <ScrollView>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Father Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {info.fatherName}
                    </Text>
                    <Text style={styles.parentInfoText2}>
                      Number: {info.fatherName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Mother Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {info.motherName}
                    </Text>
                    <Text style={styles.parentInfoText2}>
                      Number: {info.motherName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Address:</Text>
                    <Text style={styles.parentInfoText2}>{info.address}</Text>
                  </View>
                </View>
              </ScrollView>
            </List.Accordion>
            <View style={styles.info}>
              <View style={{ flexDirection: 'column' }}>
                <Title style={{ fontSize: 18 }}>Change Password: </Title>
                <Text></Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                    width: '100%',
                  }}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                  />
                  <TextInput
                    style={{
                      margin: 10,
                      alignSelf: 'flex-start',
                      marginBottom: 10,
                    }}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Enter old password"
                  />
                  <View
                    style={{
                      marginLeft: 'auto',
                      marginRight: 25,
                      alignSelf: 'center',
                    }}
                  >
                    <TouchableOpacity>
                      <FontAwesome name="eye" size={30} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                    width: '100%',
                  }}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                  />

                  <TextInput
                    style={{
                      margin: 10,
                      alignSelf: 'flex-start',
                      marginBottom: 10,
                    }}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholder="Enter new password"
                  />

                  <View
                    style={{
                      marginLeft: 'auto',
                      marginRight: 25,
                      alignSelf: 'center',
                    }}
                  >
                    <TouchableOpacity>
                      <FontAwesome name="eye" size={30} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                  }}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="black"
                    style={{ margin: 10 }}
                  />
                  <TextInput
                    style={{
                      margin: 10,
                      alignSelf: 'flex-start',
                      marginBottom: 10,
                    }}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholder="Confirm password"
                  />
                  <View
                    style={{
                      marginLeft: 'auto',
                      marginRight: 25,
                      alignSelf: 'center',
                    }}
                  >
                    <TouchableOpacity>
                      <FontAwesome name="eye" size={30} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ margin: 20, marginHorizontal: 40 }}>
              <Button
                mode="contained"
                title="save"
                color="#4a3b82"
                onPress={() => console.log('Pressed')}
              ></Button>
            </View>
          </ScrollView>
        </React.Fragment>
      </PaperProvider>
    </React.Fragment>
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
    right: 0,
    bottom: 0,
  },
  parentInfo: {
    flexDirection: 'column',
  },
  parentInfoText1: {
    fontSize: 15,
    fontWeight: '500',
    fontWeight: 'bold',
  },
  parentInfoText2: {
    marginLeft: 20,
  },
});
