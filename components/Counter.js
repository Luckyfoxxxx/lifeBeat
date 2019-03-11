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
    let {number} = this.state
    return (
      <View style={styles.container}>
        <Text>{number}</Text>
        <Tapper />
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  text: {
    width: '100%',
    height: 50,
    backgroundColor: 'powderblue'
  }
});