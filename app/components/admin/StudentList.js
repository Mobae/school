import * as React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
import adminStyles from "./AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const StudentList = () => {
  const { adminState, getStudents } = React.useContext(AdminContext);

  React.useEffect(() => {
    getStudents();
  }, [])

  return (
    <View>
        <ScrollView>
        { adminState.students.map(student => (
            <View key={student._id}>
                <Card style={adminStyles.card}>
                    <Card.Title
                        title={student.name}
                        subtitle={student.email}
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

export default StudentList;
