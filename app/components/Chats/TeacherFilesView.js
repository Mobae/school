import * as React from 'react';
import {
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';

const TeacherFilesView = () => {
  return (
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
  );
};

export default TeacherFilesView;
