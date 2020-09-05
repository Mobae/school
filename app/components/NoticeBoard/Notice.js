import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Title,
  Card,
  Avatar,
  Paragraph,
  TouchableRipple,
} from 'react-native-paper';

const NoticeIcon = () => {
  return <Avatar.Icon icon="bulletin-board" size={45} />;
};

const Notice = () => {
  return (
    <Fragment>
      <Title style={styles.title}>Notice Board</Title>
      <Card style={styles.notice}>
        <TouchableRipple onPress={() => console.log('Pressed')}>
          <Fragment>
            <Card.Title
              title="Notice"
              subtitle="Notice aaya hai bhai"
              left={NoticeIcon}
            />
            <Card.Content>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                earum labore repudiandae. Non quod dolor commodi error, culpa
                molestiae inventore itaque exercitationem necessitatibus id
                expedita nam eveniet aperiam repellat. Corrupti.
              </Paragraph>
            </Card.Content>
          </Fragment>
        </TouchableRipple>
      </Card>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  notice: {
    margin: 10,
    marginBottom: 0,
  },
});

export default Notice;
