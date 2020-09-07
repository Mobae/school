import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import AuthContextProvider from './context/AuthContext';
import AdminContextProvider from './context/AdminContext';
import Main from './components/Main';

export default function App() {
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <Main />
      </AdminContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
