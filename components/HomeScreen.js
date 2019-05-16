import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Button } from 'react-native';
import { TapButton } from './TapButton.js';
import Counter from './Counter.js';
import BeatChart from './BeatChart.js';
import AreaChartExample from './AreaChartExample.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Lifebeat',
  };
  constructor(props) {
    super(props)
    this.state = {
      bpm: 0,
      test: [141,141,142, 143, 142, 142, 142, 143,
              141, 142, 144,141,142, 140,142,142, 143, 145, 146, 145, 145,
              144, 144, 143,142,145,144,142,142,144,143, 144,
              145,144,142,143,142,142,143,144,145,144,144,142,
              143, 144, 144, 145, 143, 142,142,142, 143, 144, 145, 143,
              142],
      bpmArr: [],
      startTime: 0,
      tap1: 0,
      tap2: 0,
      tap3: 0,
      tap4: 0
      


    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    //this.interval = setInterval(() => this.tick(), 750);
  }

  tick() {
    /*
    // reset if it is more than 2000ms since last press
    if (Date.now() - this.state.lastPress > 2000) {
      this.setState({ taps: 0 });
      this.setState({ bpm: 0 });
      this.setState({duration: 0});
      return;
    }

    let duration = Date.now() - this.state.startTime;
    duration = duration / 1000;
    this.setState({duration: duration});

    let beatsPerMin = (this.state.taps / duration) * 60;
    beatsPerMin = beatsPerMin.toFixed(0);

    // Only set BPM if duration is more than 0,2 sec to avoid very high bpm on first press
    if (duration > 0.2) {
      this.setState({ bpm: beatsPerMin })
    }

 */

  }

  componentWillUnmount() {
    //clearInterval(this.interval);
  }


  handleClick() {
    // if start time is not set, et the start time on first press
    let now = Date.now();
    let p;
    if(this.state.startTime == 0) {
      this.setState({startTime: now})
      let tap1 = now;
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
    this.setState({bpm: beats});
    arr = this.state.bpmArr;
    arr.push(beats);      
    this.setState({bpmArr: arr});
    //this.setState({bpm: 60000 / p});
    
    //this.setState({bpm: this.state.bpm+1});

  
   

  }

  render() {
    const { navigate } = this.props.navigation;
    const bpm = this.state.bpm;
    const bpmArr = this.state.bpmArr;
    return (
      <View style={styles.container}>
        <Grid>
          <Row style={styles.row}>
            <Counter
              bpm={bpm}
            >
            </Counter>

          </Row>
          <Row style={styles.row1}>
            <TapButton click={this.handleClick} />

          </Row>
          
        <BeatChart data={bpmArr}/> 
          
        </Grid>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2121'
  },
  row1: {
    backgroundColor: "#007F7F",
  },
  row: {
    backgroundColor: '#1D2121'
  },
  row2: {
    backgroundColor: '#1D2121'
  }
})

export default HomeScreen;

