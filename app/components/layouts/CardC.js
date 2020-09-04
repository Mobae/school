import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title } from "react-native-paper";

const CardC = (props) => {
  return (
    <Card style={styles}>
      <Card.Title
        title={props.title}
        subtitle={props.subtitle}
        left={props.leftContent}
      ></Card.Title>
      <Card.Content></Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  margin: 10,
  marginBottom: 0,
});

export default CardC;
