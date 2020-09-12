import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";

const Students = (props) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    const res = await axios.get(URL + "/class/students/" + user.class_);
    console.log(res.data);
  };

  useEffect(() => {
    getStudents();
  });

  return;
};

export default Students;
