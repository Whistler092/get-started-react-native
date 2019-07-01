import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

    state = { isShowingText: true };

    componentDidMount() {
        //Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Blink;