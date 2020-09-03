import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import AuthContextProvider from "./context/AuthContext";
import Main from "./components/Main";

export default function App() {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
