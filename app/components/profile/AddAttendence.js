import * as React from 'react';
import {
  DataTable,
  RadioButton,
  Button,
  FAB,
  Chip,
  Paragraph,
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
        <View style={{ marginLeft: 100 }}>
          <DatePicker
            style={{ width: 190, marginTop: 40, alignItems: 'center' }}
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
        <FAB
          style={styles.fab}
          icon='content-save'
          animated
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
            {/* <DataTable.Row>
              <DataTable.Cell style={styles.name}>Aditya</DataTable.Cell>
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
              <DataTable.Cell>
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
            <DataTable.Row>
              <DataTable.Cell style={styles.name}>Aryan</DataTable.Cell>
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
              <DataTable.Cell>
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
            </DataTable.Row> */}
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
    margin: 20,
    right: 10,
    bottom: 25,
    height: 63,
    width: 63,
  },
});

export default AddAttendence;
