import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { List, Provider as PaperProvider } from 'react-native-paper';

const StudentInfo = (props) => {
  const { user, class_ } = props.route.params;
  useEffect(() => {
    console.log(user);
  });

  return (
    <React.Fragment>
      <PaperProvider>
        <View style={{ alignItems: 'center', margin: 20 }}>
          <View style={styles.info}>
            <ImageBackground
              source={require('../../assets/avatar.png')}
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
              <Text style={styles.details}>Class: {class_}</Text>
            </View>
            <View style={styles.info}>
              {
                user.info.admissionNo === undefined ? (
                  <Text style={styles.details}>
                    Admission No.: 
                  </Text>
                ) : (
                  <Text style={styles.details}>
                    Admission No.: {user.info.admissionNo}
                  </Text>
                )
              }
            </View>
            <View style={styles.info}>
              {
                user.info.dob === undefined ? (
                  <Text style={styles.details}>
                    DOB : 
                  </Text>
                ) : (
                  <Text style={styles.details}>
                    DOB : {user.info.dob}
                  </Text>
                )
              }
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>Bus Route: {user.info.busNo}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.details}>
                Phone Number: {'+91 ' + user.info.phone}
              </Text>
            </View>
            <List.Accordion
              title='Parent Details'
              titleStyle={{ alignSelf: 'flex-start' }}
              left={(props) => <List.Icon {...props} icon='account-child' />}
            >
              <ScrollView>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Father Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {user.info.fatherName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Mother Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {user.info.motherName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Gaurdian's Details:</Text>
                    <Text style={styles.parentInfoText2}>
                      Name: {user.info.gaurdianName}
                    </Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View style={styles.parentInfo}>
                    <Text style={styles.parentInfoText1}>Address:</Text>
                    <Text style={styles.parentInfoText2}>
                      {user.info.address}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </List.Accordion>
          </ScrollView>
        </React.Fragment>
        <Text></Text>
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
