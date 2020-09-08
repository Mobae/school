import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import { URL } from "../config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialState = { isLoggedIn: false, jwt: "", user: {} };
  const [authState, setAuthState] = useState(initialState);

  const LogIn = async (values) => {
    try {
      let data = await axios.post(URL + "/student/login", values);
      const { token, email, name, rank, id } = data.data;
      let class_;
      if (rank === "1") {
        class_ = data.data.teacherClass;
      }
      if (rank == "0") {
        class_ = data.data.studentClass;
      }
      setAuthState({
        ...authState,
        isLoggedIn: true,
        jwt: token,
        user: { email, name, rank, class_, id },
      });
      await AsyncStorage.setItem("@jwt", authState.jwt);
      axios.defaults.headers.common["auth-token"] = token;
    } catch (error) {
      console.log(error);
    }
  };

  const getClassName = async () => {
    axios.defaults.headers["auth-token"] = authState.jwt;
    const res = await axios.get(URL + "/class/" + authState.user.class_);
    console.log(res);
    const st = authState;
    st.user.className = res.data.class_.name;
    setAuthState(st);
    // setAuthState(res.data.class_.name);
  };

  return (
    <AuthContext.Provider
      value={{ LogIn, authState, setAuthState, getClassName }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
