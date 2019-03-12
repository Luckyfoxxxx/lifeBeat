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
      number: 1
    };
    this.handleClick = this.handleClick.bind(this);

  }


  handleClick() {
    this.setState({number: this.state.number+1 })
  }

  render() {
    const {navigate} = this.props.navigation;
    const count = this.state.number;
    return (
      <View style = {styles.container}>
        <Grid>
          <Row style = {styles.row}>
            <Counter 
              count={count}
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

