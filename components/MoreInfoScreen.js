import React from 'react';
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
} from 'react-native';


const MoreInfoScreen = (props) => {
 const [notes, setNotes] = React.useState('');
  const[update, setUpdate] = React.useState('');
  
  axios
    .get('https://fingobox.com/api/database/rows/62/D5FGMbSAuE6vDhtaI3pOLm/54')
    .then((res) => {
      console.log('res.data: ', res.data);
      if(res.data[0].columns.notes == "")
      setNotes("No Extra Bus Info.")
      else  setNotes(res.data[0].columns.notes);
     setUpdate(res.data[0].columns.realdate)
    });


  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar/>
      <Image style={styles.image} source={require('../assets/busLoop.png')} />
      <Text style={styles.lastUpdatedText}> Last Updated: {update} </Text>
      <View style={styles.notesView}>
      <Text style={styles.inputText}>{notes}</Text>
      </View>
      <SafeAreaView style={styles.arrowView}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('StudentScreen')}
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

  image: {
    marginTop: 40,
    marginBottom: 40,
    width: 300,
    height: 200,
  },

  lastUpdatedText: {
    // fontFamily: 'DamascusBold',
    fontWeight: 'bold',
    fontSize: 20,
  },

notesView: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
    marginTop: 20,
    backgroundColor: '#ffffff',
    flex: .8,
  },

  inputText: {
    fontSize: 20,
    textAlign: "left",
    padding: 10
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

export default MoreInfoScreen;
