import * as React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { AdminContext } from '../../context/AdminContext';
import adminStyles from './AdminStyles';
const LeftContent = (props) => (
  <Avatar.Icon {...props} icon='teach' style={{ backgroundColor: '#8A3B37' }} />
);

const TeacherList = () => {
  const { adminState, getTeachers, getAllStudents, reload } = React.useContext(
    AdminContext
  );

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = React.useState(adminState.classes);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  React.useEffect(() => {
    getTeachers();
  }, []);

  React.useEffect(() => {
    if (searchQuery === '') {
      setFiltered(adminState.teachers);
    } else {
      setFiltered(
        adminState.teachers.filter((teacher) => {
          if (teacher.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return teacher;
          }
        })
      );
    }
  }, [searchQuery]);

  return (
    <View>
      <Searchbar
        placeholder='Search teacher..'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={adminStyles.scroll}>
        <ScrollView>
          {filtered ? (
            filtered.map((teacher) => (
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
            ))
          ) : (
            <Card style={adminStyles.card}>
              <Card.Title title='None' left={LeftContent} />
            </Card>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default TeacherList;
