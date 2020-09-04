import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const url = "http://127.0.0.1:5000";
  const initialState = { isLoggedIn: false, jwt: "", user: {} };
  const [authState, setAuthState] = useState(initialState);

  const LogIn = async (values) => {
    try {
      let data = await axios.post(url + "/student/login", values);
      console.log(data.data);
      setAuthState({ ...authState, isLoggedIn: true, jwt: data.data.token });
      await AsyncStorage.setItem("@jwt", authState.jwt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ LogIn, authState }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
