import React, { Fragment, useContext, useState } from "react";
import { Avatar, Card, IconButton, TouchableRipple } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import styles from "../NoticeBoard/styles";

import globalStyles from "../styles/global";
import { AuthContext } from "../../context/AuthContext";

const ChatHome = ({ navigation }) => {
  const { authState, getUser } = useContext(AuthContext);
  const {
    user: { rank, class_ },
  } = authState;

  // if (rank === '0') {
  //   const nav = 'StudentFileView';
  // } else if (rank === '1') {
  //   const nav = 'StudentFileView';
  // }
  // const [nav, setNav] = useState('');

  // if (rank === '1') {
  //   setNav('ClassList');
  // } else {
  //   setNav('StudentFileView');
  // }

  const Nav = () => {
    const [nav, setNav] = useState("");

    if (rank === "1") {
      setNav("ClassList");
    } else {
      setNav("StudentFileView");
    }
    console.log(nav);
    return nav;
  };

  return (
    <Fragment>
      <Card style={globalStyles.card}>
        <TouchableRipple onPress={() => navigation.navigate("Doubts Corner")}>
          <Fragment>
            <Card.Title
              title="Doubts"
              subtitle="Clarify your doubts"
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon="wechat"
                  color="#fff"
                  style={styles.chatIcon}
                />
              )}
            />
            <Card.Content style={globalStyles.cardContent}></Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>

      {rank === "0" ? (
        <Card style={globalStyles.card}>
          <TouchableRipple
            onPress={() => navigation.navigate("StudentFileView")}
          >
            <Fragment>
              <Card.Title
                title="Files"
                subtitle="Get your files"
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="file-document-box-multiple"
                    style={{ backgroundColor: "#3D64A4" }}
                  />
                )}
              />
              <Card.Content style={globalStyles.cardContent}></Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
      ) : rank === "1" ? (
        <Card style={globalStyles.card}>
          <TouchableRipple
            onPress={() => navigation.navigate("TeacherClassList")}
          >
            <Fragment>
              <Card.Title
                title="Files"
                subtitle="Get your files"
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="file-document-box-multiple"
                    style={{ backgroundColor: "#3D64A4" }}
                  />
                )}
              />
              <Card.Content style={globalStyles.cardContent}></Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
      ) : rank === "2" ? (
        <Card style={globalStyles.card}>
          <TouchableRipple onPress={() => navigation.navigate("ClassList")}>
            <Fragment>
              <Card.Title
                title="Files"
                subtitle="Get your files"
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon="file-document-box-multiple"
                    style={{ backgroundColor: "#3D64A4" }}
                  />
                )}
              />
              <Card.Content style={globalStyles.cardContent}></Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
      ) : null}
    </Fragment>
  );
};

export default ChatHome;
