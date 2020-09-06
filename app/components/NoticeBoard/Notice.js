import React, { Fragment, useRef } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import {
  Text,
  Title,
  Card,
  Avatar,
  Paragraph,
  TouchableRipple,
  Subheading,
  Headline,
} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';

const NoticeIcon = () => {
  return <Avatar.Icon icon="bulletin-board" size={45} />;
};

const Notice = () => {
  const refRBSheet = useRef();
  return (
    <ScrollView>
      <Title style={styles.title}>Notice Board</Title>
      <Card style={styles.notice}>
        <TouchableRipple onPress={() => refRBSheet.current.open()}>
          <Fragment>
            <Card.Title
              title="Notice"
              subtitle="Notice aaya hai bhai"
              left={NoticeIcon}
            />
            <Card.Content style={{ marginBottom: 8 }}>
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
      <RBSheet ref={refRBSheet} closeOnDragDown={true} height={500}>
        <View style={styles.notice}>
          <Headline style={styles.headline}>Subject of the Notice</Headline>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            obcaecati cumque facilis cum iusto facere nisi officia veritatis in.
            Debitis nesciunt possimus ullam, nam inventore maxime! Dolore
            voluptate maxime consequatur.
          </Paragraph>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  headline: {
    marginBottom: 10,
  },
  notice: {
    margin: 10,
    marginBottom: 0,
  },
});

export default Notice;
