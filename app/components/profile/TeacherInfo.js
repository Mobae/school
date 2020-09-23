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
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const TeacherInfo = () => {
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
          Teacher Name
        </Text>
      </View>
      <React.Fragment>
        <ScrollView>
          <View style={styles.info}>
            <Text style={styles.details}>Contact No: </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.details}>Email: </Text>
          </View>
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
                  secureTextEntry={true}
                  placeholder='Enter old password'
                />
                <TouchableOpacity>
                  <FontAwesome
                    name='eye'
                    size={30}
                    color='black'
                    style={{ margin: 10, marginTop: 8 }}
                  />
                </TouchableOpacity>
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
                  secureTextEntry={true}
                  placeholder='Enter new password'
                />
                <TouchableOpacity>
                  <FontAwesome
                    name='eye'
                    size={30}
                    color='black'
                    style={{ margin: 10, marginTop: 8 }}
                  />
                </TouchableOpacity>
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
                  secureTextEntry={true}
                  autoCapitalize='none'
                  placeholder='Confirm password'
                />
                <TouchableOpacity>
                  <FontAwesome
                    name='eye'
                    size={30}
                    color='black'
                    style={{ margin: 10, marginTop: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ margin: 20, marginHorizontal: 40 }}>
            <Button
              mode='contained'
              title='save'
              color='#6200EE'
              onPress={() => console.log('Pressed')}
            ></Button>
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
});
