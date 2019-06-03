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
      lastUpdated: 0,
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
      this.setState({bpmArr: arr, bpm: 0, lastPress: 0, lastUpdated: 0});
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

    // If the array has more than 100 points. remove the first element of the array
    if(arr.length >= 100) {arr.shift()};

    // make sure to not update the Counter unless the BPM has changed with more than 5 and there is more than 1,5 sec since last update. 
    if(Math.abs(beats - this.state.bpm) >= 5 && now - this.state.lastUpdated >= 1500) {
      arr.push(beats);
      this.setState({bpmArr: arr, bpm: beats, lastUpdated: now});
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
      <ThemeContext.Consumer>
        {value => (

        
          <View style={styles.container}>
              <View style={styles.row1}>
                <Counter
                  bpm={bpm}
                >
                </Counter>
              </View>

              <View style={styles.row2}>
                <BeatChart data={bpmArr} starttime={starttime} chartscale={chartScale}/> 
              </View>

              <View style={styles.row3}>
                <TapButton click={this.handleClick} theme={value}/>
              </View>
          </View>
        )}
      </ThemeContext.Consumer>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9F7F9'
  },

  row1: {
    flex: 0.45
  },

  row2: {
    flex: 1,
  },

  row3: {
    flex: 0.6,
  }
  
})

export default HomeScreen;

