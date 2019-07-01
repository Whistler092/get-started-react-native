import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Gretting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        )
    }
}

class LotsOfGrettings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', top: 50 }}>
                <Gretting name='Ramiro' />
                <Gretting name='Susana' />
                <Gretting name='Helena' />
            </View>
        );
    }
}

export default LotsOfGrettings;