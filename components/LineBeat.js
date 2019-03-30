import React from 'react';
import {VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
class LineBeat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
  
    return (


      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    )
  }
}

export default LineBeat;