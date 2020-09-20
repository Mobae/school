import React, { Fragment, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Headline, TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';

import { AuthContext } from '../../context/AuthContext';

import globalStyles from '../styles/global';

const Login = () => {
  const { LogIn, authState, getUser } = useContext(AuthContext);
  const handleSubmit = async (values) => {
    const { email, password } = values;
    LogIn({ email, password });
  };

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 200 }}>
      <Headline style={globalStyles.headline}>Login</Headline>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={globalStyles.view}>
            <TextInput
              mode='outlined'
              label='Email'
              autoCapitalize='none'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              mode='outlined'
              label='Password'
              style={{ marginVertical: 10 }}
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              style={{ marginTop: 15 }}
              onPress={handleSubmit}
              title='Submit'
              mode='contained'
              color='#4a3b82'
            >
              Submit
            </Button>
          </View>
        )}
      </Formik>
      <StatusBar style='auto' />
    </View>
  );
};

export default Login;
