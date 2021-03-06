import React, { useContext, useState, useEffect, Fragment } from 'react';
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
import { StyleSheet, View, Alert, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext';
import { URL } from '../../config';
import { ScrollView } from 'react-native-gesture-handler';

const StudentRow = (props) => {
  useEffect(() => {
    if (props.status === 'P') {
      setChecked('present');
    }
    if (props.status === 'A') {
      setChecked('absent');
    }
  }, [props.status]);
  const [checked, setChecked] = React.useState(0);
  return (
    <DataTable.Row>
      <DataTable.Cell style={styles.name}>{props.name}</DataTable.Cell>
      <DataTable.Cell style={styles.present}>
        <View style={styles.RadioButton}>
          <RadioButton
            value='present'
            status={checked === 'present' ? 'checked' : 'unchecked'}
            onPress={() => {
              props.updateAttendance(props._id, 'P');
              setChecked('present');
            }}
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
            onPress={() => {
              props.updateAttendance(props._id, 'A');
              setChecked('absent');
            }}
            color='red'
            uncheckedColor='grey'
          />
        </View>
      </DataTable.Cell>
    </DataTable.Row>
  );
};

const AddAttendence = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const {
    authState: { user },
  } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [attendances, setAttendances] = useState([]);

  const getStudents = async () => {
    try {
      const res = await axios.get(URL + '/class/students/' + user.class_);
      setStudents(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAttendances = async () => {
    try {
      const res = await axios.post(URL + '/attendance/class/day/', {
        date,
        students,
      });
      if (res.data.error) {
        console.log(res.data);
        setAttendances([]);
      } else {
        let attList = res.data.attendances;
        attList = attList.map((at) => {
          const student = students.find((st) => st._id === at.studentId);
          at.name = student.name;
          return at;
        });
        setAttendances(attList);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateAttendance = (_id, status) => {
    let att = [...attendances];
    console.log(_id, status);
    const index = att.findIndex((at) => at.studentId === _id);
    console.log(index);
    if (index !== -1) {
      let item = { ...att[index], status: status };
      att[index] = item;
      setAttendances(att);
    } else {
      att.push({ studentId: _id, status });
      setAttendances(att);
    }
  };

  const handleSubmit = async () => {
    console.log(date, attendances);
    try {
      const res = await axios.post(URL + '/attendance/class/update', {
        date,
        attendances,
      });
      console.log(res);
      createSuccessAlert();
    } catch (err) {
      console.log(err);
      createErrorAlert();
    }
    // try {
    //   const res = await axios.post(URL + "/attendance/class", {
    //     date,
    //     attendances,
    //   });
    //   if (res.data.error) {
    //     console.log(res.data.error);
    //     createErrorAlert();
    //   } else {
    //     console.log(res.data);
    //     createSuccessAlert();
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const createErrorAlert = () =>
    Alert.alert(
      'Error',
      'An unexpected error occured.',
      [{ text: 'OK', onPress: () => navigation.navigate('Attendance') }],
      { cancelable: false }
    );

  const createSuccessAlert = () =>
    Alert.alert(
      'Success',
      'Attendance edited.',
      [{ text: 'OK', onPress: () => navigation.navigate('Attendance') }],
      { cancelable: false }
    );

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    getAttendances();
  }, [students, date]);

  return (
    <React.Fragment>
      <PaperProvider>
        <View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Save Attendance</Dialog.Title>
              <Fragment>
                <Dialog.Content>
                  <Paragraph style={styles.byline}>Are you sure?</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={() => {
                      hideDialog();
                      handleSubmit();
                    }}
                    style={styles.yes}
                  >
                    Yes
                  </Button>
                </Dialog.Actions>
              </Fragment>
            </Dialog>
          </Portal>
        </View>
        <View>
          <View>
            <Button
              icon='calendar'
              mode='contained'
              onPress={showDatepicker}
              style={{
                margin: 10,
                marginRight: 80,
                marginLeft: 80,
                backgroundColor: '#33b233',
              }}
            >
              {date.toString().substr(0, 16)}
            </Button>
          </View>
          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
            />
          )}
        </View>

        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={styles.name}>Names</DataTable.Title>
              <DataTable.Title style={styles.present}>Present</DataTable.Title>
              <DataTable.Title style={styles.absent}>Absent</DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {attendances.length !== 0 ? (
                attendances.map((st) => (
                  <StudentRow
                    name={st.name}
                    key={st._id}
                    _id={st.studentId}
                    status={st.status}
                    updateAttendance={updateAttendance}
                  />
                ))
              ) : (
                <Paragraph style={{ alignSelf: 'center', marginTop: 10 }}>
                  Attendance for this day does not exist
                </Paragraph>
              )}
              <Button
                onPress={() => {
                  showDialog();
                }}
                icon='content-save'
                mode='contained'
                color='#159957'
                style={styles.btn}
              >
                submit
              </Button>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
            </ScrollView>
          </DataTable>
        </View>
      </PaperProvider>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  datepicker: {
    width: 200,
    alignSelf: 'center',
  },
  present: {
    // marginLeft: 10,
    justifyContent: 'flex-end',
    position: 'relative',
    paddingHorizontal: 'auto',
  },
  btn: {
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
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
    width: 20,
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
    backgroundColor: '#33b233',
    width: 63,
  },
});
export default AddAttendence;
