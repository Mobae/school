import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const Home = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Home Component</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
  },
  title: {
    alignSelf: 'center',
  },
});

export default Home;