import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

// You can import from local files
import LoginScreen from './components/LoginScreen';
import AdminScreen from './components/AdminScreen';
import StudentScreen from './components/StudentScreen';
import MoreInfoScreen from './components/MoreInfoScreen';
import AdminEditScreen from './components/AdminEditScreen';
import ExtraNotesScreen from './components/ExtraNotesScreen';
// or any pure javascript modules available in npm
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MyStack.Screen name="LoginScreen" component={LoginScreen} />
        <MyStack.Screen name="AdminScreen" component={AdminScreen} />
        <MyStack.Screen name="AdminEditScreen" component={AdminEditScreen} />
        <MyStack.Screen name="StudentScreen" component={StudentScreen} />
        <MyStack.Screen name="MoreInfoScreen" component={MoreInfoScreen} />
        <MyStack.Screen name="ExtraNotesScreen" component={ExtraNotesScreen} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
