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
            backgroundColor: '#7575a3',
          }}
        >
          <View style={{ margin: 25, alignItems: 'center' }}>
            <Image
              source={require('../../logo.png')}
              style={{ width: 245, height: 85 }}
            />
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>
              Checking For Updates !!
            </Text>
            <Text style={{ fontWeight: '900', color: 'white', fontSize: 16 }}>
              Description:
            </Text>
            <Text
              style={{ color: 'red', fontSize: 16 }}
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
