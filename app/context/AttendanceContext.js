import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AttendanceContext = createContext();

const AttendanceContextProvider = (props) => {
  const url = 'expected url';
  const initialState = {
    attendance: [],
    loading: false,
  };
  const [attendanceState, setAttendanceState] = useState(initialState);

  const setLoading = () => {
    setAttendanceState({ ...attendanceState, loading: true });
  };

  const getAttendance = async () => {
    setLoading();
    try {
      const data = await axois.get(url);
      setAttendanceState({
        ...attendanceState,
        attendance: data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AttendanceContext.Provider
      value={(setLoading, getAttendance, attendanceState)}
    >
      {props.children}
    </AttendanceContext.Provider>
  );
};

export default AttendanceContextProvider;
