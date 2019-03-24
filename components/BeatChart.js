import React from 'react'
import {View} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts'
 
class BeatChart extends React.PureComponent {
  
  constructor(props) {
    super(props)
    
    this.state = {
      data: [1,2,3]
    }


    };

    componentWillReceiveProps() {
      this.setState({data: this.props.data});
    }

    componentDidMount() {
      this.setState({data: this.props.data});
    }

    render() {
 
        const arr = this.props.data;
 
        return (
          <View>
            <LineChart
                style={{ height: 200 }}
                data = {arr}
                svg={{ stroke: 'rgb(0, 255, 255)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
          </View>
        )
    }
 
}

export default BeatChart;