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

const AddAttendence = () => {
  const [checked, setChecked] = React.useState(0);
  
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <React.Fragment>
      <PaperProvider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>

        <Chip
          icon='content-save'
          onPress={() => showDialog()}
          style={styles.chip}
          // mode='outlined'
          selectedColor='blue'
        >
          Save
        </Chip>
        <View style={styles.header}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title numeric>Names</DataTable.Title>
              <DataTable.Title style={styles.present}>Present</DataTable.Title>
              <DataTable.Title numeric>Absent</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell style={styles.name}>Ajay Sharma</DataTable.Cell>
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
            </DataTable.Row>
          </DataTable>
        </View>
      </PaperProvider>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
  },
  present: {
    paddingLeft: 235,
  },
  presentChecked: {
    paddingLeft: 215,
    paddingTop: 5,
  },
  name: {
    paddingLeft: 10,
  },
  RadioButton: {
    width: 28,
    height: 32,
  },
  RadioButtonAb: {
    width: 35,
    height: 32,
  },
  chip: {
    justifyContent: 'flex-end',
    // paddingLeft: 270,
    color: 'white',
    marginTop: 30,
  },
});

export default AddAttendence;
