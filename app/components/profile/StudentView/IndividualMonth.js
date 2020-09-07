import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DataTable, Headline, IconButton } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IndividualMonth = () => {
  const [Head, setHead] = React.useState(['Date', 'Present']);
  const icon = (
    <Icon name="done" size={30} color="green" style={{ alignSelf: 'center' }} />
  );
  const [data, setData] = React.useState([
    ['01-01-2020', icon],
    ['02-01-2020', icon],
    ['03-01-2020', icon],
    ['04-01-2020', icon],
  ]);
  return (
    <React.Fragment>
      {/* <View style={{ marginTop: 50 }}>
        <Text
          style={{
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          January
        </Text>
      </View>
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={Head} style={styles.head} textStyle={styles.text} />
          <Rows data={data} textStyle={styles.text} />
        </Table>
      </View> */}
      <Headline style={{ alignSelf: 'center', marginBottom: 10 }}>
        Month
      </Headline>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title sortDirection="ascending">Date</DataTable.Title>
          <DataTable.Title>Attendance</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>21 Jan</DataTable.Cell>
          <DataTable.Cell>
            {/* <IconButton icon="check" size={50} /> */}
            hello
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, alignSelf: 'center' },
});

export default IndividualMonth;
