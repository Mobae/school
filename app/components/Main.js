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

const Stack = createStackNavigator();

const Main = () => {
  const { authState, getUser, setAuthState } = useContext(AuthContext);
  const { isLoggedIn } = authState;
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
      console.log(jwt);
      if (jwt) {
        setAuthState({ ...authState, isLoggedIn: true, token: jwt });
      }
    });
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  if (!updateObj.status) {
    return <Fragment>{!isLoggedIn ? <Login /> : <BottomNavigator />}</Fragment>;
  } else {
    return <Update />;
  }

  // return <BottomNavigator />;
};

export default Main;
