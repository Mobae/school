import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

import {AdminContext} from '../../context/AdminContext';
import { ScrollView } from "react-native-gesture-handler";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ClassView = ({ navigation }) => {
  const { adminState, getClasses, setCurrClass, getClass } = React.useContext(AdminContext);

  React.useEffect(() => {
    getClass();
  }, [])

  return (
    <View>
        <ScrollView>
                <TouchableOpacity onPress={() => {
                        navigation.navigate('StudentList');
                    }}
                >
                    <Card style={styles.card}>
                        <Card.Title
                        title="Students"
                        left={LeftContent}
                        />
                        <Card.Content></Card.Content>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                        navigation.navigate('StudentList');
                    }}
                >
                    <Card style={styles.card}>
                        <Card.Title title="Class teacher" left={LeftContent} />
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('TeacherList')} >EDIT</Button>
                        </Card.Actions>
                    </Card>
                </TouchableOpacity>

                <Card style={styles.card}>
                    <Card.Title title="Subject teachers" left={LeftContent} />
                    <Card.Actions>
                        <Button onPress={() => setTeacherModalOpen(true)} >ADD</Button>
                    </Card.Actions>
                </Card>
                
                
                

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
export default ClassView;
