import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import adminStyles from "./AdminStyles";

const ClassList = ({ navigation }) => {
  const { adminState, setCurrClass } = React.useContext(AdminContext);
  
  React.useEffect(() => {
    setCurrClass(adminState.classes[0]._id);
  }, [])

  return (
    <View>
        <ScrollView>
        { adminState.classes.map(class_ => (
            <View key={class_._id}>
                <TouchableOpacity onPress={() => {
                        setCurrClass(class_._id);
                        navigation.navigate('ClassView');
                    }}
                >
                    <Card style={adminStyles.card}>
                        <Card.Title
                        title={class_.name}
                        left={LeftContent}
                        />
                        <Card.Content></Card.Content>
                    </Card>
                </TouchableOpacity>
            </View>
        )) }
        </ScrollView>
    </View>
  );
};

export default ClassList;
