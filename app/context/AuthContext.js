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
      await AsyncStorage.setItem("@jwt", authState.jwt);
      axios.defaults.headers.common["auth-token"] = token;
      setAuthState({
        ...authState,
        isLoggedIn: true,
        jwt: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    axios.defaults.headers["auth-token"] = authState.jwt;
    const res = await axios.get(URL + "/student/initial");
    console.log(res.data);
    const { _id, email, info, name, rank } = res.data.student;
    let class_;
    if (rank === "1") {
      class_ = res.data.student.teacherClass;
    }
    if (rank == "0") {
      class_ = res.data.student.studentClass;
    }
    setAuthState({
      ...authState,
      user: { _id, name, email, rank, class_, info },
    });
  };

  const getClassName = async () => {
    axios.defaults.headers["auth-token"] = authState.jwt;
    const res = await axios.get(URL + "/class/views/" + authState.user.class_);
    const st = authState;
    st.user.className = res.data.class_.name;
    setAuthState(st);
  };

  return (
    <AuthContext.Provider
      value={{
        LogIn,
        authState,
        setAuthState,
        getClassName,
        getUser,
        setAuthState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
