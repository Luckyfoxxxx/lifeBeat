import React from 'react';
import { View } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'

const BeatChart = ({ data }) => (
      <LineChart
        style={{ height: 200 }}
        data={data}
        svg={{ stroke: 'rgb(0, 255, 255)' }}
        contentInset={{ top: 20, bottom: 20 }}
        yAccessor={({ item, index }) => item}
      >
        <Grid />
      </LineChart>
); 


export default BeatChart;


