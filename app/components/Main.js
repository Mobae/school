import React, { useContext, useEffect, Fragment, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Login from './auth/Login';
import BottomNavigator from './layouts/bottomNavigator';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Update from '../components/Update/Update';
import { URL } from '../config';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();

{
  /* <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size='large'
          style={styles.loading}
        />
      </View> */
}

const Main = () => {
  const { authState, getUser, setAuthState, initialState } = useContext(
    AuthContext
  );
  const { isLoggedIn, user } = authState;
  const [updateObj, setUpdateObj] = useState({
    update: false,
  });
  const url = 'https://school-server-testing.herokuapp.com';
  const updateId = '5f60dfc028525200044bd6fa';
  const abcd = url + '/update/view/' + updateId;

  const getJwt = async () => {
    const jwt = AsyncStorage.getItem('@jwt');
    return jwt;
  };
  const getUpdates = async () => {
    const res = await axios.get(abcd);
    setUpdateObj(res.data.data);
  };
  useEffect(() => {
    getUpdates();
    AsyncStorage.getItem('@jwt').then((jwt) => {
      const verified = axios
        .get(URL + '/auth/login', {
          headers: {
            'auth-token': jwt,
          },
        })
        .then((verified) => {
          if (verified.data.success === 'true') {
            setAuthState({ ...authState, isLoggedIn: true, token: jwt });
          } else {
            setAuthState(initialState);
          }
        });
    });
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  // if (!updateObj.status) {
  // if (user.rank === '0' || user.rank === '1' || user.rank === '2') {
  return <Fragment>{!isLoggedIn ? <Login /> : <BottomNavigator />}</Fragment>;
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator
  //         animating={true}
  //         size='large'
  //         style={styles.loading}
  //       />
  //     </View>
  //   );
  // }
  // } else {
  // return <Update />;
  // }

  // return <BottomNavigator />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    alignSelf: 'center',
  },
});
export default Main;
