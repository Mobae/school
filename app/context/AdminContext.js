import React, {
  createContext,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import { AuthContext } from "./AuthContext";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const {
    authState: { token },
  } = useContext(AuthContext);
  const headers = {
    "auth-token": token,
  };
  const url = "https://school-server-testing.herokuapp.com";
  const initialState = {
    teachers: [],
    students: [],
    classes: [],
    allStudents: [],
  };
  const [adminState, setAdminState] = useState(initialState);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [currClass, setCurrClass] = useState("");
  const [classObj, setClassObj] = useState({});
  const [flag, setFlag] = useState(false);
  const [redirect, setRedirect] = useState("hello");

  const [studentFlag, setStudentFlag] = React.useState(false);

  const getAllData = async () => {
    setProfileLoading(true);
    let res1 = await axios.get(url + "/class/all", { headers });
    let res2 = await axios.get(url + "/student/teachers/all", { headers });
    let res3 = await axios.get(url + "/student/students/all", { headers });

    setCurrClass(res1.data.data[0]._id);
    setAdminState({
      teachers: res2.data.data,
      students: adminState.students,
      classes: res1.data.data,
      class_: adminState.class_,
      allStudents: res3.data.data,
    });
    setReload(!reload);
    setProfileLoading(false);
  };

  // 1 Getting All Classes
  const getClasses = async () => {
    try {
      // console.log("Entered get all classes !!!");
      setLoading(true);
      let res = await axios.get(url + "/class/all", { headers });
      setLoading(false);
      const classes = res.data.data;
      let curr = classes[0]._id;
      setCurrClass(curr);
      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: classes,
        class_: adminState.class_,
        allStudents: adminState.allStudents,
      });
    } catch (err) {
      console.log(error);
    }
  };
  // 2 Getting currently selected class's teacher data
  const getCurrClassTeachers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url + "/class/teachers/" + currClass, {
        headers,
      });
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
      const res = await axios.post(url + "/class/add", class_, { headers });
      setLoading(false);
      // console.log(res.data);
      const newClass = res.data.data;
      // console.log(newClass);

      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: [...adminState.classes, newClass],
        class_: adminState.class_,
        allStudents: adminState.allStudents,
      });
      setReload(!reload);
      // console.log(adminState.classes);
    } catch (err) {
      console.log(err);
    }
  };
  // 4 Getting all teachers
  const getTeachers = async () => {
    try {
      setLoading(true);
      let res = await axios.get(url + "/student/teachers/all", { headers });
      setLoading(false);
      const teachers = res.data.data;

      setAdminState({
        teachers: teachers,
        students: adminState.students,
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: adminState.allStudents,
      });
    } catch (err) {
      console.log(error);
    }
  };
  // 5 Adding a teacher
  const addTeacher = async (teacher) => {
    try {
      setLoading(true);
      const res = await axios.post(url + "/student/add", teacher, { headers });
      setLoading(false);
      const newTeacher = res.data;

      setAdminState({
        students: adminState.students,
        classes: adminState.classes,
        teachers: [...adminState.teachers, newTeacher],
        class_: adminState.class_,
        allStudents: adminState.allStudents,
      });
      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  };
  // 6 Getting curretnly selected class's students
  const getStudents = async () => {
    try {
      setLoading(true);
      let res = await axios.get(url + "/class/students/" + currClass, {
        headers,
      });
      const students = res.data.data;

      setAdminState({
        teachers: adminState.teachers,
        students: students,
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: adminState.allStudents,
      });
      setLoading(false);
    } catch (err) {
      console.log(error);
    }
  };
  // 7 GET ALL STUDENTS
  const getAllStudents = async () => {
    try {
      // setLoading(true);
      let res = await axios.get(url + "/student/students/all", { headers });
      setLoading(false);
      const allStudents = res.data.data;
      // console.log(res.data);

      setAdminState({
        teachers: adminState.teachers,
        students: adminState.students,
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: allStudents,
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
      const res = await axios.post(url + "/student/add", student, { headers });
      setLoading(false);
      const newStudent = res.data;

      setAdminState({
        teachers: adminState.teachers,
        students: [],
        classes: adminState.classes,
        class_: adminState.class_,
        allStudents: [...adminState.allStudents, newStudent],
      });
      console.log(adminState.allStudents);
      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  };
  // 9 Getting class and subject teachers
  const addClassTeacher = async (values) => {
    try {
      setLoading(true);
      let res = await axios.post(url + "/class/classTeacher/", values, {
        headers,
      });
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
      let res = await axios.post(url + "/class/subTeacher/", values, {
        headers,
      });
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
        getTeachers,
        getAllStudents,
        getAllData,
        getCurrClassTeachers,
        getStudents,
        getAttendance,
        adminState,
        currClass,
        setCurrClass,
        classObj,
        setClassObj,
        flag,
        setFlag,
        loading,
        setLoading,
        profileLoading,
        setProfileLoading,
        redirect,
        setRedirect,
        reload,
        setReload,
        studentFlag,
        setStudentFlag,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
