import React, { useContext } from 'react';
import { StyleSheet, ImageComponent } from 'react-native';

import AuthContextProvider from './context/AuthContext';
import AdminContextProvider from './context/AdminContext';
import NoticeContextProvider from './context/NoticeContext';
import Main from './components/Main';

export default function App() {
  return (
    <AuthContextProvider>
      <NoticeContextProvider>
        <AdminContextProvider>
          <Main />
        </AdminContextProvider>
      </NoticeContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
