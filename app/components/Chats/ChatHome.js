import React, { Fragment, useContext } from 'react';
import { Avatar, Card, IconButton, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import styles from '../NoticeBoard/styles';

import { AuthContext } from '../../context/AuthContext';

const ChatHome = ({ navigation }) => {

  const { authState, getUser } = useContext(AuthContext);
  const {
    user: { rank, class_ },
  } = authState;

  if(rank === '0'){
    const nav = 'StudentFileView';
  } else if(rank === '1') {
    const nav = 'StudentFileView';
  }

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
          <TouchableRipple onPress={() => navigation.navigate('ClassList')}>
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
