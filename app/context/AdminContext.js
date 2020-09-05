import React, { createContext, useState, useEffect, Fragment } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const url = "http://326c26ad01fb.ngrok.io";
    const initialState = { teachers: [], students: [], classes: [] };
    const [adminState, setAdminState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const getClasses = async () => {
        try {
            setLoading(true);
            let data = await axios.get(url + "/class/all");
            setLoading(false);
            const { classes } = data.data;

            setAdminState({
                ...adminState,
                classes: classes
            });
        } catch (err) {
            console.log(error);
        }
    };
    const addClass = async (class_) => {
        try {
            // setLoading(true);
            // const { newClass } = class_;
            // const res = await axios.post(url + '/class/add', class_, {
            //     headers: {
            //         Authorization: `token`
            //     }
            // });
            // setLoading(false);
            // const { class_ } = res.data;

            // setAdminState({
            //     ...adminState,
            //     classes: [ ...adminState.class, class_ ]
            // });
            console.log(class_);
            console.log("***************************");
        } catch (err) {
            console.log(err);
        }
    };
    const getTeachers = async() => {
        try {
            setLoading(true);
            let data = await axios.get(url + "/teachers/all");
            setLoading(false);
            const { teachers } = data.data;
            setAdminState({
                ...adminState,
                teachers: teachers
            }); 
        } catch (err) {
            console.log(error);
        }
    }
    const getStudents = async() => {
        try {
            setLoading(true);
            let data = await axios.get(url + "/students/all");
            setLoading(false);
            const { students } = data.data;
            setAdminState({
                ...adminState,
                students: students
            }); 
        } catch (err) {
            console.log(error);
        }
    }
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
                getClasses,
                getTeachers,
                getStudents,
                getAttendance
            }}
        >
            { props.children }
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;