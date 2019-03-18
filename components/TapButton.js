import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export const TapButton = (props) => {
    return (
      <View style ={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={props.click}
        >
          
          <Text>
            Tap the beat
          </Text>
          
      
        </TouchableHighlight>

        
      </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#656b83",

  },

  button: {
    backgroundColor: "#656b83",
    alignItems: 'center',
    flex: 1,
  },

  touchable: {
    flex: 1,
  }
  
})