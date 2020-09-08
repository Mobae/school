import * as React from 'react';
import { DataTable, Card, Avatar } from 'react-native-paper';
import { View } from 'react-native';

const Files = () => {
  return (
    <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
      <DataTable style={{ marginTop: 50, alignSelf: 'center' }}>
        <DataTable.Header>
          <DataTable.Title>Files</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
          <DataTable.Title numeric>Size (MB)</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>File 1</DataTable.Cell>
          <DataTable.Cell numeric>01-03-09</DataTable.Cell>
          <DataTable.Cell numeric>3.6</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell> File 2</DataTable.Cell>
          <DataTable.Cell numeric>01-03-09</DataTable.Cell>
          <DataTable.Cell numeric>2.6</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default Files;
