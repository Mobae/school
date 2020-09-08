import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import adminStyles from "./AdminStyles";

const ClassList = ({ navigation }) => {
  const { adminState, setCurrClass, currClass, getCurrClassTeachers, classObj, getClasses } = React.useContext(AdminContext);

  
  React.useEffect(() => {
  }, [])

  return (
    <View>
        <ScrollView>
        { adminState.classes.map(class_ => (
            <View key={class_._id}>
                <TouchableOpacity onPress={() => {
                        setCurrClass(class_._id);
                        // getCurrClassTeachers();
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
