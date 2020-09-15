import React, { Fragment, useContext } from 'react';
import { Card, Avatar, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import globalStyles from '../styles/global';
import { AuthContext } from '../../context/AuthContext';

const SchoolIcon = (props) => <Avatar.Icon {...props} icon="school" />;

const ClassIcon = (props) => (
  <Avatar.Icon {...props} icon="account-multiple-outline" />
);

const BrowseNotice = ({ navigation }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  return (
    <Fragment>
      <Card style={globalStyles.card}>
        <TouchableRipple onPress={() => navigation.push('School Notice Board')}>
          <Fragment>
            <Card.Title
              title="School Notices"
              subtitle="Notice board for School"
              left={SchoolIcon}
            />
            <Card.Content style={globalStyles.cardContent}></Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
      {user.rank === '2' ? null : (
        <Card style={globalStyles.card}>
          <TouchableRipple
            onPress={() => navigation.push('Class Notice Board')}
          >
            <Fragment>
              <Card.Title
                title="Class Notices"
                subtitle={'Notice board for Class ' + user.className}
                left={ClassIcon}
              />
              <Card.Content style={globalStyles.cardContent}></Card.Content>
            </Fragment>
          </TouchableRipple>
        </Card>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  p: {
    color: '#606060',
  },
  button: {
    marginLeft: 'auto',
  },
  card: {
    margin: 10,
    marginTop: 15,
    marginBottom: 0,
  },
  content: {
    marginLeft: 5,
  },
});

export default BrowseNotice;
