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
      updates: 0,
      taps: 0,
      currentTaps: 0,
      currentTime: null,
      bpm: 0,
      bpmArray: [0,1,2],
      startTime: null,
      lastPress: null,
      duration: null,


    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 750);
  }

  tick() {

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



  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  handleClick() {
    // if start time is not set, set the start time on first press
    press = Date.now();
    this.setState({ taps: this.state.taps + 1 });

    if (this.state.taps == 0) {
      let start = Date.now();
      this.setState({ startTime: start, lastPress: press });

    }

    if(this.state.duration > 2 ) {
      let time = Date.now();
      this.setState({currentTime: time});
    }
    if(this.state.duration > 2) {
      this.setState({currentTaps: this.state.currentTaps+1});
    }
    if(this.state.duration > 5) {

    }
    let duration = Date.now() - this.state.startTime;
    // convert duration from ms to seconds
    duration = duration / 1000;
    this.setState({duration: duration});

    let beatsPerMin = (this.state.taps / duration) * 60;
    beatsPerMin = beatsPerMin.toFixed(0);
    let bpmArr = this.state.bpmArray;
    bpmArr.push(beatsPerMin);
    this.setState({bpmArray: bpmArr, lastPress: press, bpm: beatsPerMin});


  }

  render() {
    const { navigate } = this.props.navigation;
    const bpm = this.state.bpm;
    const bpmArr = this.state.bpmArray;
    let test = [1,4,8,6];
    let init = [0,67,155, 114];
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

