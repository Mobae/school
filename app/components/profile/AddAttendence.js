import * as React from 'react';
import {
  DataTable,
  RadioButton,
  Button,
  Paragraph,
  IconButton,
  Dialog,
  Portal,
  Provider as PaperProvider,
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

const AddAttendence = () => {
  const [checked, setChecked] = React.useState(0);
  const [date, setDate] = React.useState(CurrentDate);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  var today = new Date(),
    CurrentDate =
      today.getDate() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getFullYear();

  return (
    <React.Fragment>
      <PaperProvider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert !!!</Dialog.Title>
              <Dialog.Content>
                <Paragraph style={styles.byline}>Are you sure?</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog} style={styles.yes}>
                  Yes
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
        <View>
          <DatePicker
            style={{
              width: 190,
              marginTop: 40,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            date={date}
            androidMode='default'
            format='DD-MM-YYYY'
            minDate='01-01-2000'
            maxDate='31-12-2050'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            iconSource={(uri = require('../../calender.png'))}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 3,
                marginLeft: 18,
              },
              dateInput: {
                margin: 50,
                borderRadius: 2,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
        <IconButton
          icon='content-save'
          style={styles.fab}
          color='white'
          size={40}
          onPress={() => {
            showDialog();
          }}
        />
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.name}>Names</DataTable.Title>
              <DataTable.Title style={styles.present}>Present</DataTable.Title>
              <DataTable.Title style={styles.absent}>Absent</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell style={styles.name}>
                Ajay Kumar Sharma
              </DataTable.Cell>
              <DataTable.Cell style={styles.present}>
                <View style={styles.RadioButton}>
                  <RadioButton
                    value='present'
                    status={checked === 'present' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('present')}
                    color='green'
                    uncheckedColor='grey'
                  />
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={styles.absent}>
                <View style={styles.RadioButtonAb}>
                  <RadioButton
                    style={{ paddingRight: 20 }}
                    value='present'
                    status={checked === 'absent' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('absent')}
                    color='red'
                    uncheckedColor='grey'
                  />
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </PaperProvider>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  present: {
    // marginLeft: 10,
    justifyContent: 'flex-end',
    position: 'relative',
    paddingHorizontal: 'auto',
  },
  presentChecked: {
    paddingLeft: 215,
    paddingTop: 5,
  },
  name: {
    marginLeft: 3.5,
  },
  RadioButton: {
    width: 35,
    height: 32,
  },
  absent: {
    justifyContent: 'flex-end',
    position: 'relative',
    width: '20px',
  },
  RadioButtonAb: {
    width: 35,
    height: 32,
  },
  chip: {
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  yes: {
    paddingRight: 10,
    marginBottom: 10,
  },
  byline: {
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 18,
    bottom: 0,
    height: 63,
    borderRadius: 50,
    backgroundColor: '#00bfff',
    width: 63,
  },
});
export default AddAttendence;
