import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import {AdminContext} from '../../context/AdminContext';
import { ScrollView } from "react-native-gesture-handler";
import AddClassTeacher from './AddClassTeacher';
import adminStyles from "./AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ClassView = ({ navigation }) => {
  const { getCurrClassTeachers, classObj, addClassTeacher } = React.useContext(AdminContext);
  const [ classTeacherModalOpen, setClassTeacherModalOpen ] = React.useState(false);

  React.useEffect(() => {
    getCurrClassTeachers();
  }, [])

  return (
    <View>
        <AddClassTeacher navigation={navigation} addClassTeacher={addClassTeacher} classTeacherModalOpen={classTeacherModalOpen} setClassTeacherModalOpen={setClassTeacherModalOpen} />
        <ScrollView>
                <TouchableOpacity onPress={() => {
                        navigation.navigate('StudentList');
                    }}
                >
                    <Card style={adminStyles.card}>
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
                    <Card style={adminStyles.card}>
                        <Card.Title title="Class Teacher"  />
                        <Card.Actions>
                            <Button onPress={() => setClassTeacherModalOpen(true)} >EDIT</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={adminStyles.card}>
                        <Card.Title 
                            title={classObj.classTeacher[0].name} 
                            left={LeftContent} 
                        />
                    </Card>
                </TouchableOpacity>

                <Card style={adminStyles.card}>
                    <Card.Title title="Subject teachers"  />
                    <Card.Actions>
                        <Button onPress={() => setTeacherModalOpen(true)} >ADD</Button>
                    </Card.Actions>
                </Card>

                {classObj.subTeachers.map((teacher) => (
                    <Card style={adminStyles.card} key={teacher._id}>
                        <Card.Title title={teacher.name} left={LeftContent} />
                    </Card>
                ))}
        </ScrollView>
    </View>
  );
};

export default ClassView;
