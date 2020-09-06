import React, { Fragment, useRef, useContext } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Text,
  Title,
  Card,
  Avatar,
  Paragraph,
  TouchableRipple,
  Subheading,
  Headline,
  IconButton,
} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';

import { AuthContext } from '../../context/AuthContext';

const NoticeIcon = () => {
  return <Avatar.Icon icon="bulletin-board" size={45} />;
};

const Notice = () => {
  const {
    authState: {
      user: { rank },
    },
  } = useContext(AuthContext);
  const refRBSheet = useRef();

  return (
    <Fragment>
      <ScrollView>
        <Title style={styles.title}>Notice Board</Title>
        <Card style={styles.notice}>
          <TouchableRipple onPress={() => refRBSheet.current.open()}>
            <Fragment>
              <Card.Title
                title="Notice"
                subtitle="Notice aaya hai bhai"
                left={NoticeIcon}
              />
              <Card.Content style={{ marginBottom: 8 }}>
                <Subheading>Subject Of the Notice</Subheading>
                <Paragraph>Issued By: Teacher Name</Paragraph>
              </Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
        <RBSheet ref={refRBSheet} closeOnDragDown={true} height={500}>
          <View style={styles.notice}>
            <Headline style={styles.headline}>Subject of the Notice</Headline>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              obcaecati cumque facilis cum iusto facere nisi officia veritatis
              in. Debitis nesciunt possimus ullam, nam inventore maxime! Dolore
              voluptate maxime consequatur.
            </Paragraph>
          </View>
        </RBSheet>
        {/* {rank === 1 ? (
        <IconButton
          icon="content-save"
          style={styles.fab}
          color="white"
          size={40}
          onPress={() => {
            showDialog();
          }}
        />
      ) : null} */}
      </ScrollView>
      <IconButton
        icon="plus"
        style={styles.fab}
        color="white"
        size={40}
        onPress={() => {}}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  headline: {
    marginBottom: 10,
  },
  notice: {
    margin: 10,
    marginBottom: 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 18,
    bottom: 20,
    height: 63,
    borderRadius: 50,
    backgroundColor: '#6200EE',
    width: 63,
  },
});

export default Notice;
