import React, { Fragment, useContext, useState } from 'react';
import { Avatar, Card, IconButton, TouchableRipple } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import styles from '../NoticeBoard/styles';

import { AuthContext } from '../../context/AuthContext';

const ChatHome = ({ navigation }) => {
  const { authState, getUser } = useContext(AuthContext);
  const {
    user: { rank, class_ },
  } = authState;

  // if (rank === '0') {
  //   const nav = 'StudentFileView';
  // } else if (rank === '1') {
  //   const nav = 'StudentFileView';
  // }
  // const [nav, setNav] = useState('');

  // if (rank === '1') {
  //   setNav('ClassList');
  // } else {
  //   setNav('StudentFileView');
  // }

  const Nav = () => {
    const [nav, setNav] = useState('');

    if (rank === '1') {
      setNav('ClassList');
    } else {
      setNav('StudentFileView');
    }
    console.log(nav);
    return nav;
  };

  return (
    <Fragment>
      <View style={{ margin: 10, marginBottom: 0 }}>
        <Card>
          <TouchableRipple onPress={() => navigation.navigate('Doubts Corner')}>
            <Card.Title
              title='Doubts'
              subtitle='Clarify your doubts'
              left={(props) => (
                <Avatar.Icon
                  {...props}
                  icon='wechat'
                  color='#fff'
                  style={styles.chatIcon}
                />
              )}
            />
          </TouchableRipple>
        </Card>
      </View>

      {rank === '0' ? (
        <View style={{ margin: 10 }}>
          <Card>
            <TouchableRipple
              onPress={() => navigation.navigate('StudentFileView')}
            >
              <Card.Title
                title='Files'
                subtitle='Get your files'
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon='file-document-box-multiple'
                    style={{ backgroundColor: '#3D64A4' }}
                  />
                )}
              />
            </TouchableRipple>
          </Card>
        </View>
      ) : rank === '1' ? (
        <View style={{ margin: 10 }}>
          <Card>
            <TouchableRipple onPress={() => navigation.navigate('ClassList')}>
              <Card.Title
                title='Files'
                subtitle='Get your files'
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon='file-document-box-multiple'
                    style={{ backgroundColor: '#3D64A4' }}
                  />
                )}
              />
            </TouchableRipple>
          </Card>
        </View>
      ) : rank === '2' ? (
        <View style={{ margin: 10 }}>
          <Card>
            <TouchableRipple onPress={() => navigation.navigate('ClassList')}>
              <Card.Title
                title='Files'
                subtitle='Get your files'
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    icon='file-document-box-multiple'
                    style={{ backgroundColor: '#3D64A4' }}
                  />
                )}
              />
            </TouchableRipple>
          </Card>
        </View>
      ) : null}
    </Fragment>
  );
};

export default ChatHome;
