import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Svg } from 'expo';
import SvgUri from 'react-native-svg-uri';
import Pinard from '../assets/svg/pinard.svg';


export const SplashScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
               Pocket Pinard 
            </Text>
            <View style={styles.imageContainer}>
                <Image
                        source={require('../assets/svg/bitmap.png')}
                        style={styles.img}

                    >
                </Image>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center'
      
    },
    text: {
        fontSize: 50,
        marginTop: 100,


        color: '#00FFFF',
    },

    img: {
        
        flex: 1,
        resizeMode: 'contain',

    },
    imageContainer: {
        marginTop: 20,
        width: 200,
        height: 300,
        alignItems: 'center',
    }
});