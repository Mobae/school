import React, { Fragment, useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";
import styles from "./styles";

import NoticeCard from "./NoticeCard";

const ClassNotice = ({ navigation }) => {
  const [notices, setNotices] = useState([]);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const { rank } = user;

  const getNotices = async () => {
    const notices = await axios.get(URL + "/classnotice/" + user.class_);
    console.log(notices.data);
    setNotices(notices.data.notices);
  };

  useEffect(() => {
    getNotices();
  }, []);

  return (
    <Fragment>
      <ScrollView>
        {notices.map((notice) => (
          <NoticeCard
            title={notice.title}
            author={notice.author}
            date={notice.date}
            description={notice.description}
            key={notice._id}
          />
        ))}
      </ScrollView>
      {rank === "1" ? (
        <IconButton
          icon="plus"
          style={styles.fab}
          color="white"
          size={40}
          onPress={() => navigation.push("New Notice")}
        />
      ) : null}
    </Fragment>
  );
};

export default ClassNotice;
