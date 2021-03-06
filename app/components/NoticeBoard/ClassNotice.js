import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';
import styles from './styles';

import NoticeCard from './NoticeCard';

const ClassNotice = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState([]);
  const {
    authState: { user, token },
  } = useContext(AuthContext);
  const { rank, class_ } = user;

  const getNotices = async () => {
    setLoading(true);
    const notices = await axios.get(URL + '/classnotice/' + user.class_, {
      'auth-token': token,
    });
    setNotices(notices.data.notices);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getNotices();
    } catch (err) {
      console.log(err);
    }
  }, [isFocused]);

  return (
    <Fragment>
      {!loading ? (
        <ScrollView>
          {notices.map((notice) => (
            <NoticeCard
              title={notice.title}
              author={notice.author}
              date={notice.date}
              description={notice.description}
              key={notice._id}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loading}
            color="#0a6605"
          />
        </View>
      )}
      {rank === '1' ? (
        <IconButton
          icon="plus"
          style={styles.fab}
          color="white"
          size={40}
          onPress={() => navigation.push('New Class Notice')}
        />
      ) : null}
      <Text></Text>
    </Fragment>
  );
};

export default ClassNotice;
