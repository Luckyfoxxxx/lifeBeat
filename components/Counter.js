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
          {this.props.bpm} 
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
    alignItems: 'center',
    marginBottom: 20
    
  },
  text: {
    width: '100%',
    height: 50,
  },
  counter: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 60,

  },
  countertext: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }

});