import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter.js';
import Stats from './components/Stats.js';
import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';
import Menu from './components/Menu.js';
import HomeScreenHeader from './components/HomeScreenHeader.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';




const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    stats: {
      screen: Stats 
    },
    menu: {
      screen: Menu
    },
    header: {
      screen: HomeScreenHeader
    },
  },
  {
    initialRouteName: 'Home'
    
  },
  
);


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000)
  }

  render() {
    const isLoading = this.state.isLoading;
    if(this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      
      <AppContainer />
    );
  }
}

