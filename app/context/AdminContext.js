import React, { createContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const url = "https://school-server-testing.herokuapp.com";
  const initialState = { teachers: [], students: [], classes: []};
  const [adminState, setAdminState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [currClass, setCurrClass] = useState("");
  const [classObj, setClassObj] = useState({});

    // 1 Getting All Classes
    const getClasses = async () => {
        try {
            setLoading(true);
            let res = await axios.get(url + "/class/all");
            setLoading(false);
            const  classes  = res.data.data;
            setAdminState({
                teachers: adminState.teachers,
                students: adminState.students,
                classes: classes,
                class_: adminState.class_
            });
        } catch (err) {
            console.log(error);
        }
    };
    // 2 Getting currently selected class data
    const getCurrClassTeachers = async(classId) => {
        try {
            setLoading(true);
            await axios
                .get(url + "/class/view/" + classId)
                .then((response) => {
                    setLoading(false);
                    const newClass = response.data.data;
                    setClassObj(newClass);
                    console.log(newClass);
                    console.log(classObj);
                });
        } catch (err) {
            console.log(error);
        }
    };
  // 3 Adding class
  const addClass = async (class_) => {
    try {
      console.log(class_);
      setLoading(true);
      const res = await axios.post(url + "/class/add", class_);
      setLoading(false);
      console.log(res.data);
      const newClass = res.data.data;
      console.log(newClass);

      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: [...adminState.classes, newClass],
        class_: adminState.class_,
      });
      console.log(adminState.classes);
    } catch (err) {
      console.log(err);
    }
  };
  // 4 Getting all teachers
  const getTeachers = async () => {
    try {
      setLoading(true);
      let res = await axios.get(url + "/student/teachers/all");
      setLoading(false);
      const teachers = res.data.data;

            setAdminState({
                teachers: teachers,
                students: adminState.students,
                classes: adminState.classes,
                class_: adminState.class_
            });
        } catch (err) {
            console.log(error);
        }
    };
  // 5 Adding a teacher
  const addTeacher = async (teacher) => {
    try {
      setLoading(true);
      const res = await axios.post(url + "/student/add", teacher);
      setLoading(false);
      const newTeacher = res.data;

      setAdminState({
        students: adminState.students,
        classes: adminState.classes,
        teachers: [...adminState.teachers, newTeacher],
        class_: adminState.class_,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // 6 Getting curretnly selected class's students
  const getStudents = async () => {
    try {
      setLoading(true);
      let res = await axios.get(url + "/class/students/" + currClass);
      setLoading(false);
      const students = res.data.data;

            setAdminState({
                teachers: adminState.teachers,
                students: students,
                classes: adminState.classes,
                class_: adminState.class_
            });
        } catch (err) {
            console.log(error);
        }
    };
    // 7 Adding a student
    const addStudent = async (student) => {
        try {
            setLoading(true);
            const res = await axios.post(url + '/student/add', student);
            setLoading(false);
            const newStudent = res.data;

      setAdminState({
        teachers: adminState.teachers,
        students: [],
        classes: adminState.classes,
        class_: adminState.class_,
      });
      console.log(adminState.students);
    } catch (err) {
      console.log(err);
    }
  };
  const getAttendance = () => {
    try {
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addClass,
        addTeacher,
        addStudent,
        getClasses,
        getCurrClassTeachers,
        getTeachers,
        getStudents,
        getAttendance,
        adminState: adminState,
        currClass,
        setCurrClass,
        classObj
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
