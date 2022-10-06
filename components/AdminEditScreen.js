import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AdminEditScreen = (props) => {
  const [bus1, setbus1] = React.useState('');
  const [bus2, setbus2] = React.useState('');
  const [bus3, setbus3] = React.useState('');
  const [bus4, setbus4] = React.useState('');
  const [bus5, setbus5] = React.useState('');
  const [bus6, setbus6] = React.useState('');
  const [bus7, setbus7] = React.useState('');
  const [bus8, setbus8] = React.useState('');
  const [bus9, setbus9] = React.useState('');
  const [bus10, setbus10] = React.useState('');
  const [bus11, setbus11] = React.useState('');
  const [bus12, setbus12] = React.useState('');
  const [bus13, setbus13] = React.useState('');
  const [bus14, setbus14] = React.useState('');
  const [bus15, setbus15] = React.useState('');
  const [bus16, setbus16] = React.useState('');
  const [bus17, setbus17] = React.useState('');
  const [bus18, setbus18] = React.useState('');
  const [bus19, setbus19] = React.useState('');
  const [bus20, setbus20] = React.useState('');
  const [realDate, setRealDate] = React.useState('');

  useEffect(() => {
    axios
      .get(
        'https://fingobox.com/api/database/rows/61/KgbX373We7y6rOiGDNwroY/53'
      )
      .then((res) => {
        console.log('res.data: ', res.data);
        setbus1(res.data[0].columns.bus1);
        setbus2(res.data[0].columns.bus2);
        setbus3(res.data[0].columns.bus3);
        setbus4(res.data[0].columns.bus4);
        setbus5(res.data[0].columns.bus5);
        setbus6(res.data[0].columns.bus6);
        setbus7(res.data[0].columns.bus7);
        setbus8(res.data[0].columns.bus8);
        setbus9(res.data[0].columns.bus9);
        setbus10(res.data[0].columns.bus10);
        setbus11(res.data[0].columns.bus11);
        setbus12(res.data[0].columns.bus12);
        setbus13(res.data[0].columns.bus13);
        setbus14(res.data[0].columns.bus14);
        setbus15(res.data[0].columns.bus15);
        setbus16(res.data[0].columns.bus16);
        setbus17(res.data[0].columns.bus17);
        setbus18(res.data[0].columns.bus18);
        setbus19(res.data[0].columns.bus19);
        setbus20(res.data[0].columns.bus20);
        var today = new Date();
        var date = today.getMonth() + 1 + '-' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes();
        time = time.split(':'); // convert to array
        // fetch
        var hours = Number(time[0]);
        var minutes = Number(time[1]);

        // calculate
        var timeValue = '';

        if (hours > 0 && hours <= 12) {
          timeValue = '' + hours;
        } else if (hours > 12) {
          timeValue = '' + (hours - 12);
        } else if (hours == 0) {
          timeValue = '12';
        }

        timeValue += minutes < 10 ? ':0' + minutes : ':' + minutes; // get minutes
        timeValue += hours >= 12 ? ' P.M.' : ' A.M.'; // get AM/PM
        var dateTime = date + ', ' + timeValue;
        setRealDate(dateTime);
      });
  }, []);

  const busUpdate = () => {
    axios
      .put('https://fingobox.com/api/database/row', {
        app_id: 61,
        app_token: 'KgbX373We7y6rOiGDNwroY',
        database_id: 53,
        database_row_id: 152,
        database_column_values: {
          bus1: bus1,
          bus2: bus2,
          bus3: bus3,
          bus4: bus4,
          bus5: bus5,
          bus6: bus6,
          bus7: bus7,
          bus8: bus8,
          bus9: bus9,
          bus10: bus10,
          bus11: bus11,
          bus12: bus12,
          bus13: bus13,
          bus14: bus14,
          bus15: bus15,
          bus16: bus16,
          bus17: bus17,
          bus18: bus18,
          bus19: bus19,
          bus20: bus20,
          realdate: realDate,
        },
      })

      .then((res) => {
        console.log('res.data: ', res.data);
      })
      .catch((err) => console.log('err: ', err.response.data));
  };

  const clear = () => {
    setbus1('');
    setbus2('');
    setbus3('');
    setbus4('');
    setbus5('');
    setbus6('');
    setbus7('');
    setbus8('');
    setbus9('');
    setbus10('');
    setbus11('');
    setbus12('');
    setbus13('');
    setbus14('');
    setbus15('');
    setbus16('');
    setbus17('');
    setbus18('');
    setbus19('');
    setbus20('');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Image style={styles.image} source={require('../assets/busLoop.png')} />
      <SafeAreaView style={styles.inputsView}>
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 1"
                placeholderTextColor="#000000"
                value={bus1}
                onChangeText={(text) => {
                  setbus1(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 3"
                placeholderTextColor="#000000"
                value={bus3}
                onChangeText={(text) => {
                  setbus3(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 5"
                placeholderTextColor="#000000"
                value={bus5}
                onChangeText={(text) => {
                  setbus5(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 7"
                placeholderTextColor="#000000"
                value={bus7}
                onChangeText={(text) => {
                  setbus7(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 9"
                placeholderTextColor="#000000"
                value={bus9}
                onChangeText={(text) => {
                  setbus9(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 11"
                placeholderTextColor="#000000"
                value={bus11}
                onChangeText={(text) => {
                  setbus11(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 13"
                placeholderTextColor="#000000"
                value={bus13}
                onChangeText={(text) => {
                  setbus13(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 15"
                placeholderTextColor="#000000"
                value={bus15}
                onChangeText={(text) => {
                  setbus15(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 17"
                placeholderTextColor="#000000"
                value={bus17}
                onChangeText={(text) => {
                  setbus17(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 19"
                placeholderTextColor="#000000"
                value={bus19}
                onChangeText={(text) => {
                  setbus19(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 2"
                placeholderTextColor="#000000"
                value={bus2}
                onChangeText={(text) => {
                  setbus2(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 4"
                placeholderTextColor="#000000"
                value={bus4}
                onChangeText={(text) => {
                  setbus4(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 6"
                placeholderTextColor="#000000"
                value={bus6}
                onChangeText={(text) => {
                  setbus6(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 8"
                placeholderTextColor="#000000"
                value={bus8}
                onChangeText={(text) => {
                  setbus8(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 10"
                placeholderTextColor="#000000"
                value={bus10}
                onChangeText={(text) => {
                  setbus10(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 12"
                placeholderTextColor="#000000"
                value={bus12}
                onChangeText={(text) => {
                  setbus12(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 14"
                placeholderTextColor="#000000"
                value={bus14}
                onChangeText={(text) => {
                  setbus14(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 16"
                placeholderTextColor="#000000"
                value={bus16}
                onChangeText={(text) => {
                  setbus16(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 18"
                placeholderTextColor="#000000"
                value={bus18}
                onChangeText={(text) => {
                  setbus18(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                placeholder="Bus 20"
                placeholderTextColor="#000000"
                value={bus20}
                onChangeText={(text) => {
                  setbus20(text);
                }}
              />
            </SafeAreaView>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.inputsView}>
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.submitBtn} onPress={() => clear()}>
            <Text style={styles.submitText}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => props.navigation.navigate('ExtraNotesScreen')}>
            <Text style={styles.submitText}>Extra Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => busUpdate()}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    <SafeAreaView style={styles.returnBtnView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('LoginScreen')}
          title="Return to Login">
          <Text style={styles.returnBtnText}> Return To Login </Text>
          </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
  },

  image: {
    marginTop: 10,
    marginBottom: 20,
    width: 200,
    height: 150,
  },

  inputText: {
    fontWeight: 'bold',
    fontSize: 16,
    alignContent: 'center',
  },

  returnBtnView: {
    position: 'absolute',
    bottom: '5%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#a80b18',
  },

  returnBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#c0c0c0',
    alignContent: "center",
    padding: 3
  },

  submitBtn: {
    width: '90%',
    height: 70,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 5,
    backgroundColor: '#a80b18',
  },

  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bec2cb',
    textAlign: 'center',
  },

  saveText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bec2cb',
    textAlign: 'center',
  },


  busInput: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    height: 30,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  inputsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputs: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
});

export default AdminEditScreen;
