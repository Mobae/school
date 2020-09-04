import React, { Fragment } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';

const TopBar = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <Appbar.Header>
        <Appbar.Action icon="home" />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default TopBar;
