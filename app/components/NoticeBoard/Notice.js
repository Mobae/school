import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';
import styles from './styles';

import NoticeCard from './NoticeCard';

const Notice = ({ navigation }) => {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    user: { rank },
  } = authState;
  const [notices, setNotices] = useState([]);

  const getSchoolNotices = async () => {
    setLoading(true);
    const res = await axios.get(URL + '/schoolnotice', {
      headers: {
        'auth-token': authState.token,
      },
    });
    setNotices(res.data.notices);
    setLoading(false);
  };

  useEffect(() => {
    getSchoolNotices();
  }, []);

  return (
    <Fragment>
      {!loading ? (
        <ScrollView>
          {notices.map((notice) =>
            notice.title && notice.description ? (
              <NoticeCard
                title={notice.title}
                author={notice.author}
                date={notice.date}
                description={notice.description}
                key={notice._id}
              />
            ) : null
          )}
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator
            animating={true}
            size="large"
            style={styles.loading}
          />
        </View>
      )}

      {rank === '2' ? (
        <IconButton
          icon="plus"
          style={styles.fab}
          color="white"
          size={40}
          onPress={() => navigation.push('New Notice')}
        />
      ) : null}
    </Fragment>
  );
};

export default Notice;
