import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TapButton} from './TapButton.js';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.counter}>
          {this.props.count} 
        </Text>
        <Text style={styles.countertext}>
          bpm
        </Text>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  text: {
    width: '100%',
    height: 50,
  },
  counter: {
    color: '#00FFFF',
    textAlign: 'center',
    fontSize: 60,

  },
  countertext: {
    color: '#00FFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }

});