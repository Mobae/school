import * as React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
import adminStyles from "./AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const TeacherList = () => {
  const { adminState, getTeachers } = React.useContext(AdminContext);

  React.useEffect(() => {
    getTeachers();
  }, [])

  return (
    <View>
        <ScrollView>
        { adminState.teachers.map(teacher => (
            <View key={teacher._id}>
                <Card style={adminStyles.card}>
                    <Card.Title
                        title={teacher.name}
                        subtitle={teacher.email}
                        left={LeftContent}
                    />
                    <Card.Content></Card.Content>
                </Card>
            </View>
        )) }
        </ScrollView>
    </View>
  );
};

export default TeacherList;
