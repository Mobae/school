import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Paragraph, Headline } from 'react-native-paper';
import globalStyles from '../styles/global';

const OTP = () => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 200 }}>
      <View style={globalStyles.view}>
        {/* <Paragraph style={{ fontWeight: 'bold', color: '#000' }}>
          Enter OTP sent to example@example.com
        </Paragraph> */}
        <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>
          Enter OTP sent to :
        </Headline>
        <Headline style={{ fontSize: 18, fontWeight: 'bold' }}>
          example@example.com
        </Headline>

        <TextInput
          mode="outlined"
          placeholder="Enter OTP"
          style={{ marginVertical: 20 }}
          autoCapitalize="none"
          secureTextEntry={true}
          keyboardType="phone-pad"
        />
        <Button
          style={{ marginTop: 8 }}
          title="Submit"
          mode="contained"
          color="#4a3b82"
        >
          Submit
        </Button>
        <Paragraph style={{ marginTop: 50 }}>
          OTP will expire in 5 mins. Please check your mail.
        </Paragraph>
      </View>
    </View>
  );
};

export default OTP;
