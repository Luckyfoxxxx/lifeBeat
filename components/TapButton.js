import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export const TapButton = (props) => {
    return (
      <View style ={styles.container} >
        <TouchableHighlight
         style={styles.button}
         onPress={props.click}
         underlayColor={'#edebfd'}
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

  },

  button: {
    backgroundColor: "#eec3fd",
    alignItems: 'center',
    flex: 1,
    borderRadius: 60,
    
  },

  touchable: {
    flex: 1,
  }
  
})