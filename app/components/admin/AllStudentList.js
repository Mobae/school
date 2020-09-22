import * as React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { AdminContext } from '../../context/AdminContext';
import adminStyles from './AdminStyles';
const LeftContent = (props) => (
  <Avatar.Icon
    {...props}
    icon="human-child"
    color="white"
    style={{ backgroundColor: '#3b3691' }}
  />
);

const StudentList = ({ navigation }) => {
  const { adminState, getAllStudents, reload, studentFlag } = React.useContext(
    AdminContext
  );

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState(adminState.allStudents);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  React.useEffect(() => {
    getAllStudents();
  }, [studentFlag]);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFiltered(adminState.allStudents);
    } else {
      setFiltered(
        adminState.allStudents.filter((student) => {
          if (student.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return student;
          }
        })
      );
    }
  }, [searchQuery]);

  return (
    <View>
      <Searchbar
        placeholder="Search students.."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={adminStyles.scroll}>
        <ScrollView>
          {filtered.map((student) => (
            <View key={student._id}>
              <Card
                style={adminStyles.card}
                onPress={() =>
                  navigation.navigate('Student Details', {
                    user: student,
                    class_: student.studentClass,
                  })
                }
              >
                <Card.Title
                  title={student.name}
                  subtitle={student.email}
                  left={LeftContent}
                />
                <Card.Content></Card.Content>
              </Card>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default StudentList;
