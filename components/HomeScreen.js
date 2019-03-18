import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Button } from 'react-native';
import {TapButton} from './TapButton.js';
import Counter from './Counter.js';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Lifebeat',
  };
  constructor(props) {
    super(props)
    this.state = {
      updates: 0,
      taps: 0,
      bpm: 0,
      startTime: null,

    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 500);
  }

  tick() {
    let duration = Date.now() - this.state.startTime;
    duration = duration/1000;
    let beatsPerMin = (this.state.taps / duration) * 60;
    beatsPerMin = beatsPerMin.toFixed(2);
    this.setState({bpm: beatsPerMin })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  handleClick() {
    // if start time is not set, set the start time on first press
    if(this.state.startTime == null) {
      let start = Date.now();
      this.setState({startTime: start});
      this.setState({taps: this.state.taps+1});

    }
    this.setState({taps: this.state.taps+1});
    let duration = Date.now() - this.state.startTime;
    duration = duration/1000;
    let beatsPerMin = (this.state.taps / duration) * 60;
    beatsPerMin = beatsPerMin.toFixed(2);
    this.setState({bpm: beatsPerMin })
  }

  render() {
    const {navigate} = this.props.navigation;
    const bpm = this.state.bpm;
    return (
      <View style = {styles.container}>
        <Grid>
          <Row style = {styles.row}>
            <Counter 
              bpm={bpm}
            >
            </Counter>
            
          </Row>
          <Row style = {styles.row1}>
            <TapButton click={this.handleClick}/>
          </Row>
          <Row style = {styles.row2}>

          </Row>
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

