import React, { Fragment, useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";
import styles from "./styles";

import NoticeCard from "./NoticeCard";

const Notice = ({ navigation }) => {
  const { authState } = useContext(AuthContext);
  const {
    user: { rank },
  } = authState;
  const [notices, setNotices] = useState([]);

  const getSchoolNotices = async () => {
    const res = await axios.get(URL + "/schoolnotice", {
      headers: {
        "auth-token": authState.token,
      },
    });
    setNotices(res.data.notices);
  };

  useEffect(() => {
    getSchoolNotices();
  }, []);

  return (
    <Fragment>
      <ScrollView>
        {notices.map((notice) =>
          notice.title && notice.description ? (
            <NoticeCard
              title={notice.title}
              author={notice.author}
              date={notice.date}
              description={notice.description}
              key={notice._id}
            />
          ) : null
        )}
      </ScrollView>
      {rank === "2" ? (
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

export default Notice;
