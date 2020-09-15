import React, { useContext, useEffect, Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Login from './auth/Login';
import BottomNavigator from './layouts/bottomNavigator';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const Main = () => {
  const { authState, getUser, setAuthState } = useContext(AuthContext);
  const { isLoggedIn } = authState;
  const url = 'https://school-server-testing.herokuapp.com';
  const updateId = '5f5fb9c061af454f9c6c0189';

  const getJwt = async () => {
    const jwt = AsyncStorage.getItem('@jwt');
    return jwt;
  };
  const getUpdates = async () => {
    const res = await axios.get(url + '/view/' + updateId);
    console.log(res.data);
    console.log(
      'kachra sa stafsdlnlnvs sldnfnfsddskbdkjbk jbk bkbsakbfkbdfkb $$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%##'
    );
  };
  useEffect(() => {
    // getUpdates();
    AsyncStorage.getItem('@jwt').then((jwt) => {
      console.log(jwt);
      if (jwt) {
        setAuthState({ ...authState, isLoggedIn: true, token: jwt });
      }
    });
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return <Fragment>{!isLoggedIn ? <Login /> : <BottomNavigator />}</Fragment>;
  // return <BottomNavigator />;
};

export default Main;
