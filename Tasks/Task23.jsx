import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task23Component } from '../Components/Task23Component';

export default class Task23 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Initial Text"
        };
    }

    updateText = (newText) => {
        this.setState({ text: newText });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <Task23Component setText={this.updateText} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        color: "blue",
        textAlign: "center",
    },
});
