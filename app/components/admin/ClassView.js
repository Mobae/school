import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import {AdminContext} from '../../context/AdminContext';
import { ScrollView } from "react-native-gesture-handler";
import AddClassTeacher from './AddClassTeacher';
import AddSubTeacher from './AddSubTeacher';
import adminStyles from "./AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ClassView = ({ navigation }) => {
  const { getCurrClassTeachers, classObj, currClass, flag } = React.useContext(AdminContext);
  const [ classTeacherModalOpen, setClassTeacherModalOpen ] = React.useState(false);
  const [ subTeacherModalOpen, setSubTeacherModalOpen ] = React.useState(false);
  const [ pin1, setPin1 ] = React.useState('');
  const [ pin2, setPin2 ] = React.useState('');
  

  React.useEffect(() => {
    getCurrClassTeachers(); 
  }, [pin1]);
  React.useEffect(() => {
    getCurrClassTeachers(); 
  }, [pin2]);

  if(flag){
    return (
        <View>
            <AddClassTeacher setPin1={setPin1} navigation={navigation}  classTeacherModalOpen={classTeacherModalOpen} setClassTeacherModalOpen={setClassTeacherModalOpen} />
            <AddSubTeacher setPin2={setPin2} navigation={navigation}  subTeacherModalOpen={subTeacherModalOpen} setSubTeacherModalOpen={setSubTeacherModalOpen} />
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
                            // navigation.navigate('StudentList');
                        }}
                    >
                        { 
                            classObj.classTeacher[0] !== undefined ? (
                                <View>
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
                                </View>
                            ) : (
                                <View>
                                    <Card style={adminStyles.card}>
                                        <Card.Title title="Class Teacher"  />
                                        <Card.Actions>
                                            <Button onPress={() => setClassTeacherModalOpen(true)} >ADD</Button>
                                        </Card.Actions>
                                    </Card>
                                    <Card style={adminStyles.card}>
                                        <Card.Title 
                                            title="None"
                                            left={LeftContent} 
                                        />
                                    </Card>
                                </View>
                            )
                        }
                    </TouchableOpacity>

                    <Card style={adminStyles.card}>
                        <Card.Title title="Subject teachers"  />
                        <Card.Actions>
                            <Button onPress={() => setSubTeacherModalOpen(true)} >ADD</Button>
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
  } else{
      return (
        <View>
            <Card style={adminStyles.card}>
                <Card.Title title="Loading..." left={LeftContent} />
            </Card>
        </View>
      );
  }
};

export default ClassView;
