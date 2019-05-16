import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter.js';
import Stats from './components/Stats.js';
import HomeScreen from './components/HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    stats: {
      screen: Stats 
    },
  },
  {
    initialRouteName: 'Home'

  },
  
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      
      <AppContainer />
    );
  }
}

