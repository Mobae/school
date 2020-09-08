import * as React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card, Searchbar } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

import {AdminContext} from '../../context/AdminContext';
import adminStyles from "./AdminStyles";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const StudentList = () => {
  const { adminState, getAllStudents } = React.useContext(AdminContext);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState(adminState.allStudents);
  const onChangeSearch = query => {
      setSearchQuery(query);
    };

  React.useEffect(() => {
    getAllStudents();
  }, [])

  React.useEffect(() => {
    if(searchQuery === ''){
        setFiltered(adminState.allStudents);
    } else {
        setFiltered(adminState.allStudents.filter((student) => {
            if(student.name.toLowerCase().includes(searchQuery.toLowerCase())){
                return(student);
            }
        }));
    }
  }, [searchQuery]);

  return (
    <View>
        <Searchbar
            placeholder="Search class.."
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <ScrollView>
        { filtered.map(student => (
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
