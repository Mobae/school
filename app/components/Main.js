import React, { useContext, useEffect, Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../context/AuthContext";
import Login from "./auth/Login";
import BottomNavigator from "./layouts/bottomNavigator";
import { ActivityIndicator } from "react-native-paper";

const Stack = createStackNavigator();

const Main = () => {
  const { authState } = useContext(AuthContext);
  const { isLoggedIn, loading } = authState;

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return <Fragment>{isLoggedIn ? <Login /> : <BottomNavigator />}</Fragment>;
  // return <BottomNavigator />;
};

export default Main;
