import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';


const BeatChart = ({ ...props }) => (
  <ImageBackground style={styles.background}>
    <View style={styles.container}>
      <YAxis
        style={{ marginHorizontal: 10  }}
        data={ props.chartscale }
        formatLabel={ (value) => value }
        contentInset={{ top: 20, bottom: 5   }}
        svg={{ fontSize: 12, fill: 'grey' }}
        numberOfTicks={9}
      />
      <LineChart
        style={{ height: 250 }}
        data={props.data}
        svg={{ stroke: 'rgb(0, 255, 255)' }}
        contentInset={{ top: 20, bottom: 5 }}
        yMin={60}
        yMax={220}
        style={{ flex: 1, marginLeft: 20 }}
        numberOfTicks={9}
        showGrid={true}
        
      >
        <Grid />
      </LineChart>
      
      
      
    </View>
  </ImageBackground>
); 



const styles = StyleSheet.create({
  container: {
    height: 300,
    flexDirection: 'row',
  },

  background: {
    width: '100%',
    height: 300
  }
})


export default BeatChart;


