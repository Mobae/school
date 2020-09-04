import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const url = "http://326c26ad01fb.ngrok.io";
  const initialState = { isLoggedIn: false, jwt: "", user: {} };
  const [authState, setAuthState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const LogIn = async (values) => {
    try {
      setLoading(true);
      let data = await axios.post(url + "/student/login", values);
      setLoading(false);
      const { token, email, name, rank } = data.data;
      setAuthState({
        ...authState,
        isLoggedIn: true,
        jwt: token,
        user: { email, name, rank },
      });
      await AsyncStorage.setItem("@jwt", authState.jwt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ LogIn, authState, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
