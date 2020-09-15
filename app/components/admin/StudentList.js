import * as React from 'react';
import { View, Text } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Searchbar,
  ActivityIndicator,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { AdminContext } from '../../context/AdminContext';
import adminStyles from './AdminStyles';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const StudentList = () => {
  const { adminState, getStudents, loading } = React.useContext(AdminContext);

  React.useEffect(() => {
    getStudents();
  }, []);

  return (
    <View>
      {!loading ? (
        <ScrollView>
          {adminState.students.map((student) => (
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
          ))}
        </ScrollView>
      ) : (
        <View style={adminStyles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={adminStyles.loading}
          />
        </View>
      )}
    </View>
  );
};

export default StudentList;
