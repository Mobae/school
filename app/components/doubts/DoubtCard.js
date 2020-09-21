import React, { Fragment, useRef } from "react";
import { View } from "react-native";
import {
  Card,
  Avatar,
  Paragraph,
  TouchableRipple,
  Subheading,
  Headline,
} from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";

const DoubtIcon = () => {
  return (
    <Avatar.Icon
      icon="comment"
      size={45}
      style={{ backgroundColor: "#63211A" }}
    />
  );
};

const DoubtCard = (props) => {
  const refRBSheet = useRef();
  let { date } = props;
  date = new Date(date).toDateString();
  return (
    <Fragment>
      <Card style={styles.card}>
        <TouchableRipple onPress={() => refRBSheet.current.open()}>
          <Fragment>
            <Card.Title title={props.title} subtitle={date} left={DoubtIcon} />
            <Card.Content style={{ marginBottom: 8 }}>
              <Subheading>{props.description}</Subheading>
              <Paragraph>Doubt by: {props.author}</Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
      <RBSheet ref={refRBSheet} closeOnDragDown={true} height={500}>
        <View style={styles.card}>
          <Headline style={styles.headline}>{props.title}</Headline>
          <Paragraph>{props.description}</Paragraph>
        </View>
      </RBSheet>
    </Fragment>
  );
};

export default DoubtCard;
