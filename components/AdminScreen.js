import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const AdminScreen = (props) => {
  const [password, setPassword] = React.useState('');
   const [status, setStatus] = React.useState("Enter Password:");
  const PASSWORD = "bus732";
   const passNav = ({password,props}) => {
  let content
  if(password == PASSWORD) {
  content = () => props.navigation.navigate("AdminEditScreen")
  return content()}
  else return setStatus("Incorrect. Please try again.")
}

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <Text style={styles.title}>Admin Login</Text>
      <Image style={styles.image} source={require('../assets/Admin.jpg')} />
      <Text style={styles.statusTxt} value = {status}> {status} </Text>
      <TouchableOpacity style={styles.loginBtn} title="Admin">
        <View>
          <TextInput
            style={styles.adminText}
            placeholder="Password"
            placeholderTextColor="#bec2cb"
            secureTextEntry={true}
            value = {password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitBtn}
        onPress = {() => 
        passNav({password,props})
        }>
        <Text>Submit</Text>
      </TouchableOpacity>
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

  image: {
    marginTop: 50,
    marginBottom: 80,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#a80b18',
  },

  adminText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bec2cb',
    alignContent: 'center',
  },

  submitBtn: {
    width: '25%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#bec2cb',
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

  statusTxt: {
   marginBottom: 10,
   fontSize: 20,
  },
});

export default AdminScreen;
