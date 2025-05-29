import { useImperativeHandle, useState, forwardRef } from "react";
import { Text } from "react-native";
import React from "react";

const Task24FunPage = forwardRef((props, ref) => {
    const [text, setText] = useState("Task24")
    
    useImperativeHandle(ref, () => ({
        changeText(newText) {
            setText(newText);
        },
    }));

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
    );
});
export default Task24FunPage;