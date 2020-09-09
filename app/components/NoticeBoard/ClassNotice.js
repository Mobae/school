import React, {
  Fragment,
  useRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { ScrollView, View } from "react-native";
import {
  Card,
  Avatar,
  Paragraph,
  TouchableRipple,
  Subheading,
  Headline,
  IconButton,
} from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";

import { AuthContext } from "../../context/AuthContext";
import { URL } from "../../config";
import styles from "./styles";

import axios from "axios";

const NoticeIcon = () => {
  return <Avatar.Icon icon="bulletin-board" size={45} />;
};

const NoticeCard = (props) => {
  const refRBSheet = useRef();
  let { date } = props;
  date = new Date(date).toDateString();
  return (
    <Fragment>
      <Card style={styles.notice}>
        <TouchableRipple onPress={() => refRBSheet.current.open()}>
          <Fragment>
            <Card.Title title={props.title} subtitle={date} left={NoticeIcon} />
            <Card.Content style={{ marginBottom: 8 }}>
              <Subheading>{props.description}</Subheading>
              <Paragraph>Issued By: {props.author}</Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
      <RBSheet ref={refRBSheet} closeOnDragDown={true} height={500}>
        <View style={styles.notice}>
          <Headline style={styles.headline}>{props.title}</Headline>
          <Paragraph>{props.description}</Paragraph>
        </View>
      </RBSheet>
    </Fragment>
  );
};

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

// const styles = StyleSheet.create({
//   title: {
//     alignSelf: "center",
//   },
//   headline: {
//     marginBottom: 10,
//   },
//   notice: {
//     margin: 10,
//     marginBottom: 0,
//   },
//   fab: {
//     position: "absolute",
//     margin: 16,
//     right: 18,
//     bottom: 20,
//     height: 63,
//     borderRadius: 50,
//     backgroundColor: "#6200EE",
//     width: 63,
//   },
// });

export default ClassNotice;
