import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Button } from 'react-native';
import { TapButton } from './TapButton.js';
import Counter from './Counter.js';
import BeatChart from './BeatChart.js';
import AreaChartExample from './AreaChartExample.js';
import HomeScreenHeader from './HomeScreenHeader.js';
import { ThemeContext } from '../assets/themes/themes.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <HomeScreenHeader />
  };
  constructor(props) {
    super(props)
    this.state = {
      bpm: 0,
      bpmArr: [],
      startTime: 0,
      lastPress: 0,
      tap1: 0,
      tap2: 0,
      tap3: 0,
      tap4: 0,
      chartScale: [60,100,140,180,220],
      


    };
    this.handleClick = this.handleClick.bind(this);
    this.initInterval = this.initInterval.bind(this);

  }

  componentDidMount() {
    
  }

  initInterval() {
    this.interval = setInterval(() => this.tick(), 1000);

  }

  tick() {
    if(this.state.lastPress != 0 && (Date.now() - this.state.lastPress) > 2000 ) {
      this.setState({startTime: 0, tap1: 0, tap2: 0, tap3: 0, tap4: 0});
      arr = this.state.bpmArr;
      arr.push(0);
      this.setState({bpmArr: arr, bpm: 0, lastPress: 0});
      // write 0 to arr
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  handleClick() {
    // if start time is not set, set the start time on first press
    let now = Date.now();
    this.setState({lastPress: now});
    let p;
    if(this.state.startTime == 0) {
      this.setState({startTime: now})
      let tap1 = now;
      this.initInterval();
      return;
    }

    else if(this.state.tap2 == 0) {
      this.setState({tap2: now});
      p = this.state.tap2 - this.state.tap1;
      return;
    }

    else if(this.state.tap3 == 0) {
      this.setState({tap3: now})
      p = ((this.state.tap2 - this.state.tap1) + (this.state.tap3 - this.state.tap2)) / 2;
      return;
    }

    else if(this.state.tap4 == 0) {
      this.setState({tap4: now});
      let p = ((this.state.p2 - this.state.p1) + (this.state.p3 - this.state.p2) + (this.state.p4 - this.state.p3)) / 2;
      return;
    }

    else {
      this.setState({tap1: this.state.tap2, tap2: this.state.tap3, tap3: this.state.tap4, tap4: now});
      p = ((this.state.tap2 - this.state.tap1) + (this.state.tap3 - this.state.tap2) +
              (this.state.tap4 - this.state.tap3)) / 3
     
    }

    
    let beats = Math.round((60000 / p));
    let arr = this.state.bpmArr;
    if(Math.abs(beats - this.state.bpm) >= 5 ) {
      arr.push(beats);
      this.setState({bpmArr: arr, bpm: beats});
      return;
    }

    arr.push(beats);
    this.setState({bpmArr: arr});

    


    //this.setState({bpm: 60000 / p});
    
    //this.setState({bpm: this.state.bpm+1});

  
   

  }

  render() {
    const bpm = this.state.bpm;
    const bpmArr = this.state.bpmArr;
    const starttime = this.state.startTime;
    const {chartScale} = this.state;
    return (
      <View style={styles.container}>
        <Grid>
          <Row style={styles.row}>
            <Counter
              bpm={bpm}
            >
            </Counter>

          </Row>
          <Row style={styles.row}>
            <TapButton click={this.handleClick} />

          </Row>
          
        <BeatChart data={bpmArr} starttime={starttime} chartscale={chartScale}/> 
          
        </Grid>

      </View>
      
    );
  }
}

HomeScreen.contextType = ThemeContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2121'
  },

  row: {
    backgroundColor: '#1D2121'
  },
  
})

export default HomeScreen;

