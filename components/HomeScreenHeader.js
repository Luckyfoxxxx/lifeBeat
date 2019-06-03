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
                        source={require('../assets/png/menu_2.png')}
                        style={styles.img}
                    
                    />

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    headerContainer: {
        backgroundColor: '#c9f7f9',
        flex: 1,
        height: 100,
        marginTop: -10,

    },

    img: {
        marginLeft: 5,
        marginTop: 30
    }


});

export default withNavigation(HomeScreenHeader);