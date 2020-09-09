import React, { useContext, useEffect, Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../context/AuthContext";
import Login from "./auth/Login";
import BottomNavigator from "./layouts/bottomNavigator";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();

const Main = () => {
  const { authState, getUser, setAuthState } = useContext(AuthContext);
  const { isLoggedIn } = authState;

  const getJwt = async () => {
    const jwt = AsyncStorage.getItem("@jwt");
    return jwt;
  };

  useEffect(() => {
    AsyncStorage.getItem("@jwt").then((jwt) => {
      console.log(jwt);
      if (jwt) {
        setAuthState({ ...authState, isLoggedIn: true, token: jwt });
      }
    });
  }, []);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  // return <Fragment>{!isLoggedIn ? <Login /> : <BottomNavigator />}</Fragment>;
  return <BottomNavigator />;
};

export default Main;
