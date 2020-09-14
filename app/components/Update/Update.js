import * as React from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button, View, StyleSheet, Text, Image } from 'react-native';

const Update = () => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Button
        title='Show Dialog'
        onPress={() => {
          showDialog();
        }}
      />
      <Dialog
        visible={visible}
        onTouchOutside={() => {
          hideDialog();
        }}
      >
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
