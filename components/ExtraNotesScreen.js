import React, {useEffect} from 'react';
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
  Keyboard
} from 'react-native';

const ExtraNotesScreen = (props) => {
  const [notes, setNotes] = React.useState('');
  const[realDate, setRealDate] = React.useState('');
   

useEffect(() => {
  axios
    .get('https://fingobox.com/api/database/rows/62/D5FGMbSAuE6vDhtaI3pOLm/54')
    .then((res) => {
      console.log('res.data: ', res.data);
      setNotes(res.data[0].columns.notes);
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
},[])


  const busUpdate = () => {
    axios
      .put('https://fingobox.com/api/database/row', {
       "app_id": 62,
    "app_token": "D5FGMbSAuE6vDhtaI3pOLm",
    "database_id": 54,
    "database_row_id": 146,
    "database_column_values": {
        "notes": notes,
        "realdate": realDate,
        }
    })
    
      .then(res => {
        console.log("res.data: ", res.data);
      })
      .catch(err => console.log("err: ", err.response.data))
  }

  
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Text style={styles.title}> Extra Bus Details</Text>
        <TouchableOpacity style={styles.busInput}>
            <SafeAreaView>
              <TextInput
                style={styles.inputText}
                multiline = {true}
                numberOfLines = {8}
                scrollEnabled={false}
                blurOnSubmit = {true}
                placeholder="Enter Any extra information (e.g. bus number changes, delayed buses, etc.)"
                placeholderTextColor="#000000"
                value={notes}
                onChangeText={(text) => {
                  setNotes(text);  
                }
                }
              />
            </SafeAreaView>
          </TouchableOpacity>
           <View style={styles.container}>
          <TouchableOpacity style={styles.submitBtn}
      onPress = {() => busUpdate()}>
        <Text style={styles.submitText}>Save</Text>
      </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.arrowView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AdminEditScreen')}
          title="Back">
          <Image style={styles.arrowImage} source={require('../assets/left-arrow.png')} />
          </TouchableOpacity>
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

 title: {
    // fontFamily: 'Tahoma',
    fontSize: 40,
    marginTop: 50,
   marginBottom: 20,
  },

  inputText: {
    fontSize: 20,
    textAlign: "left",
    padding: 10
  },

  returnBtnView: {
    position: 'absolute',
    bottom: "5%",
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
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 10,
    backgroundColor: '#a80b18',
  },

  submitText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bec2cb',
   alignContent: 'center',
   padding: 10
  },


  busInput: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    marginTop: 20,
    backgroundColor: '#ffffff',
    flex: 2,
  },

  container: {
    flex: 1
  },

  arrowView: {
    position: 'absolute',
    bottom: '5%',
    left: '7%',
  },

 arrowImage: {
   width: 50,
   height: 40
 }

});

export default ExtraNotesScreen;
