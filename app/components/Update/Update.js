import * as React from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';

const Update = () => {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <Dialog visible={visible}>
        <DialogContent
          style={{
            backgroundColor: 'white',
          }}
        >
          <View style={{ margin: 25, alignItems: 'center' }}>
            <Image
              source={require('../../logo.png')}
              style={{ width: 245, height: 85 }}
            />
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>
              Checking For Updates !!
            </Text>
            <Text style={{ fontWeight: '900', color: 'black', fontSize: 16 }}>
              Description:
            </Text>
            <Text
              style={{ color: 'blue', fontSize: 16 }}
              onPress={() => Linking.openURL('http://google.com')}
            >
              Tap to download the latest version.
            </Text>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};
export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
});
