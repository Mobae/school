import React, { createContext } from "react";
import axios from "axios";

import { URL } from "../config";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const { authState, setAuthState } = require("./AuthContext");
  const getAttendance = async () => {
    const att = await axios.get(`${URL}/attendance/student`);
    console.log(att);
    setAuthState({ ...authState, user: { ...authState.user, attendace: att } });
  };

  return (
    <StudentContext.Provider value={{ getAttendance }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
