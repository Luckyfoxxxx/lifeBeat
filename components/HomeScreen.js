import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import { Button } from 'react-native';
import {TapButton} from './TapButton.js';
 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Lifebeat',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Grid>
          <Col style = {styles.column}>
            <TapButton />
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969'
  },
  column: {
    backgroundColor: "#007F7F"
  }
})

export default HomeScreen;

