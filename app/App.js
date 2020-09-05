import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import AuthContextProvider from "./context/AuthContext";
import Main from "./components/Main";
import StudentContextProvider from "./context/StudentContext";

export default function App() {
  return (
    <AuthContextProvider>
      <StudentContextProvider>
        <Main />
      </StudentContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
