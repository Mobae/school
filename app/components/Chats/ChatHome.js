import React, { Fragment } from 'react';
import { Avatar, Card, IconButton, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import styles from '../NoticeBoard/styles';

const ChatHome = ({ navigation }) => {
  return (
    <Fragment>
      <View style={{ margin: 10, marginBottom: 0 }}>
        <Card>
          <TouchableRipple onPress={() => navigation.navigate('Chat')}>
            <Card.Title
              title="Chats"
              subtitle="Talk with teachers !!"
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon="wechat"
                  color="#fff"
                  style={styles.chatIcon}
                />
              )}
            />
          </TouchableRipple>
        </Card>
      </View>

      <View style={{ margin: 10 }}>
        <Card>
          <TouchableRipple onPress={() => navigation.navigate('Files')}>
            <Card.Title
              title="Files"
              subtitle="Get your files"
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon="file-document-box-multiple"
                  style={{ backgroundColor: '#3D64A4' }}
                />
              )}
            />
          </TouchableRipple>
        </Card>
      </View>
    </Fragment>
  );
};

export default ChatHome;
