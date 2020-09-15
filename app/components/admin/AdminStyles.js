import React from 'react';
import { StyleSheet } from 'react-native';

const adminStyles = StyleSheet.create({
  scroll: {
    marginBottom: 5,
  },
  card: {
    margin: 10,
    marginBottom: 0,
  },
  modalToggle: {
    marginBottom: 10,
    padding: 10,
    alignSelf: 'center',
    position: 'relative',
  },
  modalClose: {},
  addBtn: {
    backgroundColor: 'gray',
    marginLeft: 240,
    borderRadius: 50,
  },
  modalContent: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default adminStyles;
