import { Component } from "react";
import { Text } from "react-native";
import { TextContext } from "./Task38_Text";

export class Task38_CompOne extends Component {
    static contextType = TextContext;
    render() {
        const { text } = this.context;
        return <Text
            style={{
                color: 'white',
                fontSize: 18,
            }}
        >
            Text: {text}
        </Text>;
    }
}