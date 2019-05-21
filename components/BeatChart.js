import React from 'react';
import { View } from 'react-native';
import { LineChart, Grid, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const BeatChart = ({ data, start }) => (
    <View>
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: 'rgb(0, 255, 255)' }}
        contentInset={{ top: 20, bottom: 20 }}
        yAccessor={({ item, index }) => item}
        showGrid='false'
        yMin={0}
        yMax={300}
        
      >
      
        <Grid />
      </LineChart>
      
    </View>
); 


export default BeatChart;


