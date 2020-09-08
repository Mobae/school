import React, { createContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const url = "https://school-server-testing.herokuapp.com";
  const initialState = { teachers: [], students: [], classes: [], allStudents: [] };
  const [adminState, setAdminState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [currClass, setCurrClass] = useState("");
  const [classObj, setClassObj] = useState({});
  const [flag, setFlag] = useState(false);

  // 1 Getting All Classes
  const getClasses = async () => {
    try {
      // console.log("Entered get all classes !!!");
      setLoading(true);
      let res = await axios.get(url + "/class/all");
      setLoading(false);
      const classes = res.data.data;
      let curr = classes[0]._id;
      setCurrClass(curr);
      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: classes,
        class_: adminState.class_,
        allStudents: adminState.allStudents
      });
    } catch (err) {
      console.log(error);
    }
  };
  // 2 Getting currently selected class's teacher data
  const getCurrClassTeachers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url + "/class/teachers/" + currClass);
      const data = res.data.data;
      setClassObj(data);
      setFlag(true);
    } catch (err) {
      console.log(error);
    }
  };
  // 3 Adding class
  const addClass = async (class_) => {
    try {
      // console.log(class_);
      setLoading(true);
      const res = await axios.post(url + "/class/add", class_);
      setLoading(false);
      // console.log(res.data);
      const newClass = res.data.data;
      // console.log(newClass);

      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: [...adminState.classes, newClass],
        class_: adminState.class_,
        allStudents: adminState.allStudents
      });
      // console.log(adminState.classes);
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
        class_: adminState.class_,
        allStudents: adminState.allStudents
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
        allStudents: adminState.allStudents
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
        class_: adminState.class_,
        allStudents: adminState.allStudents
      });
    } catch (err) {
      console.log(error);
    }
  };
  // 7 GET ALL STUDENTS
  const getAllStudents = async () => {
    try {
      // setLoading(true);
      let res = await axios.get(url + "/student/students/all");
      setLoading(false);
      const allStudents = res.data.data;
      // console.log(res.data);

      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: allStudents
      });
      // console.log(adminState.allStudents);
    } catch (err) {
      console.log(error);
    }
  };

  // 8 Adding a student
  const addStudent = async (student) => {
    try {
      setLoading(true);
      const res = await axios.post(url + "/student/add", student);
      setLoading(false);
      const newStudent = res.data;

      setAdminState({
        teachers: adminState.teachers,
        students: [],
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: adminState.allStudents
      });
    } catch (err) {
      console.log(err);
    }
  };
  // 9 Getting class and subject teachers
  const addClassTeacher = async (values) => {
    try {
      setLoading(true);
      let res = await axios.post(url + "/class/classTeacher/", values);
      setLoading(false);
      // console.log(res.data.data);
    } catch (err) {
      console.log(error);
    }
  };

  // 10 Getting class and subject teachers
  const addSubTeacher = async (values) => {
    try {
      setLoading(true);
      let res = await axios.post(url + "/class/subTeacher/", values);
      setLoading(false);
      // console.log(res.data.data);
    } catch (err) {
      console.log(error);
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
        addClassTeacher,
        addSubTeacher,
        addStudent,
        getClasses,
        getCurrClassTeachers,
        getTeachers,
        getStudents,
        getAllStudents,
        getAttendance,
        adminState: adminState,
        currClass,
        setCurrClass,
        classObj,
        flag,
        setFlag,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
