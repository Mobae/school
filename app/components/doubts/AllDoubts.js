import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";

import styles from "./styles";

import { AuthContext } from "../../context/AuthContext";

const AllDoubts = ({ navigation }) => {
  const isFocused = useIsFocused();
  const {
    authState: { token, user },
  } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [doubts, setDoubts] = useState([]);

  const getDoubts = async () => {
    setLoading(true);
    const res = await axios.get(URL + "/doubt" + user.class_, {
      headers: {
        "auth-token": token,
      },
    });
    setDoubts(res.data.doubts);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getDoubts();
    } catch (err) {
      console.log(err);
    }
  }, [isFocused]);

  return (
    <Fragment>
      {!loading ? (
        <FAB
          icon="plus"
          label="New Doubt"
          style={{ position: "absolute", alignSelf: "center", bottom: 30 }}
          onPress={() => navigation.navigate("Add Doubt")}
        />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={{ alignSelf: "center" }}
          />
        </View>
      )}
    </Fragment>
  );
};

export default AllDoubts;
