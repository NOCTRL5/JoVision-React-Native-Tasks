import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class Task23Component extends Component {
    render() {
        return (
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                onChangeText={this.props.setText} 
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        borderRadius: 5,
    }
});
