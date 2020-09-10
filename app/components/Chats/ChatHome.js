import React, { Fragment } from 'react';
import { Avatar, Card, IconButton, TouchableRipple } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';

const ChatHome = ({ navigation }) => {
  return (
    <Fragment>
      <View style={{ margin: 10, marginBottom: 0 }}>
        <Card>
          <TouchableRipple onPress={() => navigation.navigate('Chat')}>
            <Card.Title
              title="Chats"
              subtitle="Talk with teachers !!"
              left={(props) => <Avatar.Icon {...props} icon="wechat" />}
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
                <Avatar.Icon {...props} icon="file-document-box-multiple" />
              )}
            />
          </TouchableRipple>
        </Card>
      </View>
    </Fragment>
  );
};

export default ChatHome;
