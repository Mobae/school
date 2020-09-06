import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const TeacherList = () => {
  const { adminState, getTeachers } = React.useContext(AdminContext);
  

//   React.useEffect(() => {
//     getTeachers();
//   }, [])

  return (
    <View>
        <ScrollView>
        { adminState.teachers.map(teacher => (
            <View key={teacher._id}>
                <Card style={styles.card}>
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


const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 0,
    },
    modalToggle: {
        marginBottom: 10,
        padding: 10,
        alignSelf: 'center',
        position: 'relative'
    },
    modalClose: {

    },  
    addBtn: {
        backgroundColor: 'gray',
        marginLeft: 240,
        borderRadius: 50
    },
    modalContent: {
        flex: 1
    }
});
export default TeacherList;
