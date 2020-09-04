import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const url = "https://f68b61d0e56b.ngrok.io";
  const initialState = { isLoggedIn: false, jwt: "", user: {} };
  const [authState, setAuthState] = useState(initialState);

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  const LogIn = async (values) => {
    try {
      let data = await axios.post(url + "/student/login", values);
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
    <AuthContext.Provider value={{ LogIn, authState }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
