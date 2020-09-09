import * as React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const TeacherFilesView = () => {
  return (
    <React.Fragment>
      <Button
        icon='attachment'
        mode='contained'
        onPress={() => console.log('Pressed')}
        style={styles.attach}
      >
        Attach Files
      </Button>
      <View
        style={{
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 1</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 2</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={{ marginTop: 10, backgroundColor: '#eee' }}>
            <Card.Content>
              <Title>File 3</Title>
              <Paragraph>Description</Paragraph>
              <View style={{ flexDirection: 'row' }}>
                <Paragraph>Date:</Paragraph>
                <Paragraph style={{ marginLeft: 160 }}>Size:</Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default TeacherFilesView;
const styles = StyleSheet.create({
  attach: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 17,
    borderRadius: 20,
  },
});
