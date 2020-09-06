import React, { createContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const url = "https://school-server-testing.herokuapp.com";
    const initialState = { teachers: [], students: [], classes: [] };
    const [adminState, setAdminState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const getClasses = async () => {
        try {
            setLoading(true);
            let res = await axios.get(url + "/class/all");
            setLoading(false);
            const  classes  = res.data.data;

            setAdminState({
                teachers: adminState.teachers,
                students: adminState.students,
                classes: classes
            });
        } catch (err) {
            console.log(error);
        }
    };
    const addClass = async (class_) => {
        try {
            console.log(class_);
            setLoading(true);
            const res = await axios.post(url + '/class/add', class_);
            setLoading(false);
            console.log(res.data);
            const  newClass  = res.data.data;
            console.log(newClass);

            setAdminState({
                teachers: adminState.teachers,
                students: adminState.students,
                classes: [ ...adminState.classes, newClass ]
            });
            console.log(adminState.classes);
        } catch (err) {
            console.log(err);
        }
    };
    const getTeachers = async() => {
        try {
            setLoading(true);
            let res = await axios.get(url + "/student/teachers/all");
            setLoading(false);
            const  teachers  = res.data.data;

            setAdminState({
                teachers: teachers,
                students: adminState.students,
                classes: adminState.classes,
            });
        } catch (err) {
            console.log(error);
        }
    }
    const addTeacher = async (teacher) => {
        try {
            setLoading(true);
            console.log(`incoming: ${teacher}`)
            const res = await axios.post(url + '/student/add', teacher);
            setLoading(false);
            const newTeacher = res.data.data;
            console.log(newTeacher);

            setAdminState({
                students: adminState.students,
                classes: adminState.classes,
                teachers: [ ...adminState.teachers, newTeacher ]
            });
        } catch (err) {
            console.log(err);
        }
    };
    const getStudents = async() => {
        try {
            setLoading(true);
            let res = await axios.get(url + "/student/students/all");
            setLoading(false);
            const  students  = res.data.data;
            console.log(students);

            setAdminState({
                teachers: adminState.teachers,
                students: students,
                classes: adminState.classes
            });
            console.log(adminState);
        } catch (err) {
            console.log(error);
        }
    }
    const addStudent = async (student) => {
        try {
            // setLoading(true);
            // const res = await axios.post(url + '/student/add', class_, {
            //     headers: {
            //         Authorization: `token`
            //     }
            // });
            // setLoading(false);
            // const { student } = res.data;

            // setAdminState({
            //     ...adminState,
            //     classes: [ ...adminState.students, student ]
            // });
            console.log(student);
            console.log("***************************");
        } catch (err) {
            console.log(err);
        }
    };
    const getAttendance = () => {
        try {
            
        } catch (err) {
            console.log(error);
        }
    }

    return (
        <AdminContext.Provider
            value={{
                addClass,
                addTeacher,
                addStudent,
                getClasses,
                getTeachers,
                getStudents,
                getAttendance,
                adminState: adminState
            }}
        >
            { props.children }
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;