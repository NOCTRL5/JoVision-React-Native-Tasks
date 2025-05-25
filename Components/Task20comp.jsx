import { Component } from "react";
import { Text } from "react-native";
export class Task20ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            styles: {
                textStyle: {
                    color: "red",
                    fontSize: 18,
                    textAlign: "center"
                }
            }
        }
    }
    componentDidMount() {
        console.log("Task20 ClassComponent loaded");
    }
    componentWillUnmount() {
        console.log("Task20 ClassComponent unloaded");
    }
    render() {
        return (
            <Text style={this.state.styles.textStyle}>
                Task20 ClassComponent
            </Text>
        )
    }
}