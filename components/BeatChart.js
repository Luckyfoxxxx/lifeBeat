import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';


const BeatChart = ({ ...props }) => (
    <View style={styles.container}>
      <YAxis
        style={{ marginHorizontal: 10 }}
        data={ props.chartscale }
        formatLabel={ (value) => value }
        contentInset={{ top: 20, bottom: 20,  }}
        svg={{ fontSize: 15, fill: 'grey' }}
      />
      <LineChart
        style={{ height: 200 }}
        data={props.data}
        svg={{ stroke: 'rgb(0, 255, 255)' }}
        contentInset={{ top: 20, bottom: 20 }}
        showGrid={false}
        yMin={0}
        yMax={200}
        style={{ flex: 1, marginLeft: 20 }}
        
      >
      
      </LineChart>
      
      
      
    </View>
); 



const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'row',
  }
})


export default BeatChart;


