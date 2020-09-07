import React, { Fragment } from 'react';
import { Card, Paragraph, Avatar, TouchableRipple } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const BrowseNotice = ({ navigation }) => {
  return (
    <Fragment>
      <Card style={styles.card}>
        <TouchableRipple onPress={() => navigation.push('School Notice Board')}>
          <Fragment>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title
              title="School Notice Board"
              titleStyle={styles.titleStyle}
              subtitleStyle={styles.titleStyle}
            />
            <Card.Content style={styles.content}>
              <Paragraph>Notice for all students of the school</Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
      <Card style={styles.card}>
        <TouchableRipple onPress={() => navigation.push('Class Notice Board')}>
          <Fragment>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title
              title="Class Notice Board"
              titleStyle={styles.titleStyle}
              subtitleStyle={styles.titleStyle}
            />
            <Card.Content style={styles.content}>
              <Paragraph>Notice for Students of your class</Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  titleStyle: {
    alignSelf: 'center',
  },
  content: {
    marginBottom: 8,
    alignItems: 'center',
  },
});

export default BrowseNotice;
