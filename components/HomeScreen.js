import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Button } from 'react-native';
import { TapButton } from './TapButton.js';
import Counter from './Counter.js';
import BeatChart from './BeatChart.js';

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
      currentTime: 0,
      bpm: 0,
      bpmArray: [50,55,66],
      startTime: null,
      lastPress: null,
      duration: null,


    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
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
      this.setState({ startTime: start });
      this.setState({ lastPress: press });

    }

    if(this.state.currentTaps > 0) {
      this.setState({currentTaps: this.state.currentTaps+1});
    }

    let duration = Date.now() - this.state.startTime;
    // convert duration from ms to seconds
    duration = duration / 1000;
    this.setState({duration: duration});
/*
    if(duration > 2000 && this.state.currentTime == 0 ) {
      currentTime = Date.now();
      this.setState({currentTaps: this.state.currentTaps+1});
      this.setState({currentTime: currentTime});
      
    }

    else if(duration > 5 ) {
      this.setState({startTime: this.state.currentTime});
      this.setState({taps: this.state.currentTaps});
      this.setState({currentTaps: 0})
      this.setState({currentTime: 0});
    }
  */

    // calculate beats per minute
    let beatsPerMin = (this.state.taps / duration) * 60;
    beatsPerMin = beatsPerMin.toFixed(0);
    this.setState({ bpm: beatsPerMin })
    let bpmArr = this.state.bpmArray;
    bpmArr.push(beatsPerMin);
    this.setState({bpmArray: bpmArr})
    this.setState({ lastPress: press });


  }

  render() {
    const { navigate } = this.props.navigation;
    const bpm = this.state.bpm;
    const bpmArr = this.state.bpmArray;
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

