import React, { Fragment } from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';

const ChatHome = ({ navigation }) => {
  return (
    <Fragment>
      <TouchableOpacity>
        <View style={{ margin: 20 }}>
          <Card style={{ height: 100 }}>
            <Card.Title
              title='Chats'
              subtitle='Talk with teachers !!'
              left={(props) => <Avatar.Icon {...props} icon='wechat' />}
            />
          </Card>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Files')}>
        <View style={{ margin: 20, marginTop: 10 }}>
          <Card style={{ height: 100 }}>
            <Card.Title
              title='Files'
              subtitle='Get your files'
              left={(props) => (
                <Avatar.Icon {...props} icon='file-document-box-multiple' />
              )}
            />
          </Card>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default ChatHome;
