import { Component } from "react";
import { Text } from "react-native";
export class Task19ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            style: {
                textStyle: {
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'red'
                },
            }
        }
    }
    render() {
        return (
            <Text
                style={this.state.style.textStyle}>
                Task19's ClassComponent
            </Text>
        );
    }
}