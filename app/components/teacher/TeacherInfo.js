import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const TeacherInfo = ({ navigation, route }) => {
  const { teacher } = route.params;

  return (
    <React.Fragment>
      <View style={{ alignItems: 'center', margin: 20 }}>
        <View style={styles.info}>
          <ImageBackground
            source={require('../../assets/avatar.png')}
            style={{ height: 100, width: 100 }}
            imageStyle={{ borderRadius: 15 }}
          />
        </View>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
          Teacher Name : {teacher.name}
        </Text>
      </View>
      <React.Fragment>
        <ScrollView>
          {teacher.info === undefined ? (
            <View></View>
          ) : (
            <View style={styles.info}>
              <Text style={styles.details}>
                Contact No: {teacher.info.phoneNo}
              </Text>
            </View>
          )}
          <View style={styles.info}>
            <Text style={styles.details}>Email: {teacher.email}</Text>
          </View>
          <View style={{ backgroundColor: '#DBD5E8' }}>
            <View style={styles.info}>
              <View style={{ flexDirection: 'column' }}>
                <Title style={{ fontSize: 18, marginBottom: 12 }}>
                  Change Password:{' '}
                </Title>
                <View style={{ flexDirection: 'row', width: '100%' }}>
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
                    secureTextEntry={true}
                    placeholder='Enter old password'
                    placeholderTextColor='#000'
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: 'auto',
                      marginRight: 25,
                      marginVertical: 10,
                    }}
                  >
                    <FontAwesome
                      name='eye'
                      size={30}
                      color='black'
                      style={{ margin: 10, marginTop: 8 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
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
                    secureTextEntry={true}
                    placeholder='Enter new password'
                    placeholderTextColor='#000'
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: 'auto',
                      marginRight: 25,
                      marginVertical: 10,
                    }}
                  >
                    <FontAwesome
                      name='eye'
                      size={30}
                      color='black'
                      style={{ margin: 10, marginTop: 8 }}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
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
                    secureTextEntry={true}
                    autoCapitalize='none'
                    placeholder='Confirm password'
                    placeholderTextColor='#000'
                  />
                  <View
                    style={{
                      alignSelf: 'center',
                      marginLeft: 'auto',
                      marginRight: 25,
                      marginVertical: 10,
                      marginBottom: 0,
                    }}
                  >
                    <FontAwesome
                      name='eye'
                      size={30}
                      color='black'
                      style={{ margin: 10, marginTop: 8 }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ margin: 20, marginHorizontal: 40 }}>
              <Button
                mode='contained'
                title='save'
                color='#0a6605'
                onPress={() => console.log('Pressed')}
              ></Button>
            </View>
          </View>
        </ScrollView>
      </React.Fragment>
    </React.Fragment>
  );
};

export default TeacherInfo;

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    margin: 20,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
  },
});
