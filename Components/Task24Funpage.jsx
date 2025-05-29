import { useImperativeHandle, useState } from "react";
import { Text } from "react-native";
import React from "react";

export default function Task24_MyFunctionPage(props) {
    const [text, setText] = useState("Task24")
    const styles = {
        textStyle: {
            fontSize: 20,
            color: 'pruple',
            textAlign: 'center'
        }
    }
    function handler() {
        return ({
            changeText(string) {
                setText(string);
            },
        });
    }
    useImperativeHandle(props.text, handler);
    return (
        <Text style={styles.textStyle}>
            {text}
        </Text>
    )
}