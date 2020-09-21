import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FAB } from "react-native-paper";

import { AuthContext } from "../../context/AuthContext";

const AllDoubts = ({ navigation }) => {
  return (
    <FAB
      icon="plus"
      label="New Doubt"
      style={{ position: "absolute", alignSelf: "center", bottom: 30 }}
      onPress={() => navigation.navigate("Add Doubt")}
    />
  );
};

export default AllDoubts;
