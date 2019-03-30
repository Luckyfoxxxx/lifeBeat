import React from 'react'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class AreaChartExample extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      points: this.props.initial,
    }
  }

  componentDidMount() {
    
    this.setState({points: this.props.points});
  }


    render() {

        const data = this.props.data;

        return (
            <AreaChart
                style={{ height: 200 }}
                data={ this.props.data }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid/>
            </AreaChart>
        )
    }
}

export default AreaChartExample;