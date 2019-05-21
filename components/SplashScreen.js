import React from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { Svg } from 'expo';
import SvgUri from 'react-native-svg-uri';
import Pinard from '../assets/svg/pinard.svg';
import { Easing } from "react-native";




class SplashScreen extends React.Component  {

    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                useNativeDriver: true,
                duration: 3000,
            }
        ).start();
    }

    render() {
        let {fadeAnim} = this.state;
        return (
            <View style={styles.container}>
                <Animated.View 
                    style={{
                    opacity: fadeAnim,
                    }}
                >
                    <Text style={styles.text}>
                        Pocket Pinard 
                    </Text>
                </Animated.View>
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
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center'
      
    },
    text: {
        fontSize: 60,
        marginTop: 100,


        color: '#00FFFF',
    },

    img: {
        
        flex: 1,
        resizeMode: 'contain',

    },
    imageContainer: {
        marginTop: 40,
        width: 200,
        height: 300,
        alignItems: 'center',
    }
});

export default SplashScreen;