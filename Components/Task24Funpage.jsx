import { useImperativeHandle, useState, forwardRef } from "react";
import { Text } from "react-native";
import React from "react";

export default function Task24_MyFunctionPage(props) {
    const [text, setText] = useState("Task24")
    
    function handler() {
        return ({
            changeText(string) {
                setText(string);
            },
        });
    }
    useImperativeHandle(props.text, handler);

    const styles = {
        textStyle: {
            fontSize: 20,
            color: 'purple',
            textAlign: 'center'
        }
    }
    
    return (
        <Text style={styles.textStyle}>
            {text}
        </Text>
    )
}