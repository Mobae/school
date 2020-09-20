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
      const { token } = data.data;
      // const { token, email, name, rank, id } = data.data;
      // let class_;
      // if (rank === "1") {
      //   class_ = data.data.teacherClass;
      // }
      // if (rank == "0") {
      //   class_ = data.data.studentClass;
      // }
      // setAuthState(
      //   {
      //     ...authState,
      //     isLoggedIn: true,
      //     jwt: token,
      //     user: { email, name, rank, class_, id },
      //   },
      //   getClassName()
      // );
      await AsyncStorage.setItem("@jwt", token);
      axios.defaults.headers.common["auth-token"] = token;
      setAuthState({
        ...authState,
        isLoggedIn: true,
        token: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = async () => {
    await AsyncStorage.removeItem("@jwt");
    setAuthState(initialState);
  };

  const getUser = async () => {
    axios.defaults.headers["auth-token"] = await AsyncStorage.getItem("@jwt");
    const res = await axios.get(URL + "/student/initial");
    console.log('initial route response')
    console.log(res.data);
    // TODO
    // if(!res.data.student) {
    //   setAuthState({isLoggedIn: false})
    // }
    const { _id, email, info, name, rank, className } = res.data.student;
    let class_;
    if (rank === "1") {
      class_ = res.data.student.teacherClass;
      console.log(class_);
    }
    if (rank == "0") {
      class_ = res.data.student.studentClass;
    }
    console.log("HELLO", authState);
    setAuthState({
      ...authState,
      user: { _id, name, email, rank, class_, info, className },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        LogIn,
        Logout,
        authState,
        setAuthState,
        getUser,
        setAuthState,
        initialState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
