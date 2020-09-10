import React, { useState, createContext, Fragment } from 'react';
import axios from 'axios';
import { URL } from '../config';

export const NoticeContext = createContext();

const NoticeContextProvider = (props) => {
  const initialState = {
    schoolNotices: [],
    classNotices: [],
  };

  const [noticeState, setNoticeState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Getting All School Notices
  const getSchoolNotices = async () => {
    try {
      setLoading(true);
      let res = await axios.get(URL + '/schoolnotice');
      setLoading(false);
      setNoticeState({
        schoolNotices: res.data.notices,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add A new Notice
  const addSchoolNotice = async (notice) => {
    try {
      setLoading(true);
      let res = await axios.post(URL + '/schoolnotice', notice);
      setLoading(false);
      const newSchoolNotice = res.config.data;
      console.log(newSchoolNotice);

      setNoticeState({
        schoolNotices: [...noticeState.schoolNotices, newSchoolNotice],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoticeContext.Provider
      value={{
        getSchoolNotices,
        schoolNotices: noticeState.schoolNotices,
        addSchoolNotice,
      }}
    >
      {props.children}
    </NoticeContext.Provider>
  );
};

export default NoticeContextProvider;
