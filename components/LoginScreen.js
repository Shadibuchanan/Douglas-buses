import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const LoginScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/busBackgroundS.jpg')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <StatusBar />
        <View style={styles.titleBackground}>
        <Text style={styles.title}>Douglas Buses</Text>
        </View>
        <Image style={styles.image} source={require('../assets/eaglesLogo.png')} />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate('AdminScreen')}
          title="Admin">
          <Text style={styles.loginText}> Admin </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => props.navigation.navigate('StudentScreen')}
          title="Student">
          <Text style={styles.loginText}> Student </Text>
        </TouchableOpacity>
      </SafeAreaView>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fffdd0',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
  },


  title: {
    fontWeight: 'bold',
    // fontFamily: 'Tahoma',
    fontSize: 40,
    color: '#a80b18',
    textAlign: 'center',
  },

  titleBackground: {
    backgroundColor: '#ffffff',
    width: "100%",
    paddingVertical: 10,
    marginTop: 50,
    marginBottom: 20,
    opacity: .9
  },

  image: {
    marginTop: 110,
    marginBottom: 120,
    width: 300,
    height: 175,
    opacity: .95
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
    opacity: .8,
  },

  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bec2cb',
    alignContent: 'center',
  },
});

export default LoginScreen;
