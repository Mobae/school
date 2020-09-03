import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TopBar from "./components/layouts/TopBar";
import Login from "./components/auth/Login";
import Home from "./components/layouts/Home";

import AuthContextProvider from "./context/AuthContext";
import Main from "./components/Main";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <View style={styles.container}>
          <TopBar />
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Home} name="Home" />
          <Login></Login>
          <StatusBar style="auto" />
          </View>
        </Stack.Navigator>
      </NavigationContainer> */}
      <Main />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
