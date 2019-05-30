import React from 'react';
import {View, Text, Button} from 'react-native';
export default class Menu extends React.Component {

    render() {
        return (
            <View>
                <Button 
                    title='save graph'
                    color='#656b83'
                >
                </Button>
                <Button
                    title='reset graph'
                    color='#656b83'
                >

                </Button>
            </View>
        )
    }

}