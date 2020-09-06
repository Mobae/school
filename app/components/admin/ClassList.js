import * as React from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

import {AdminContext} from '../../context/AdminContext';
import { ScrollView } from "react-native-gesture-handler";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ClassList = ({ navigation }) => {
  const { adminState, getClasses, setCurrClass } = React.useContext(AdminContext);
  
  React.useEffect(() => {
    // getClasses();
    setCurrClass('');
  }, [])

  return (
    <View>
        <ScrollView>
        { adminState.classes.map(class_ => (
            <View key={class_._id}>
                <TouchableOpacity onPress={() => {
                        setCurrClass(class_._id);
                        navigation.navigate('StudentList');
                    }}
                >
                    <Card style={styles.card}>
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
export default ClassList;
