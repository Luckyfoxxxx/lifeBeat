import React from 'react';
import Menu from './Menu.js';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { withNavigation } from 'react-navigation';


class HomeScreenHeader extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    

    render() {

    
        return (

            <View style={styles.headerContainer}>
                
                
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('menu')}
                >
                    <Image
                        source={require('../assets/png/menu.png')}
                        style={styles.img}
                    
                    />

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: '#1D2121',
        flex: 1,
        height: 100,
        marginTop: -10,

    },

    img: {
        height: 50,
        width: 50,
        marginLeft: 100
    }


});

export default withNavigation(HomeScreenHeader);