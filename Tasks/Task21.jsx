import React from "react";
import { useState } from "react"
import { Button, View, Text } from "react-native";
import  Task21Function  from "../Components/Task21FunctionPage";

export default function Task21() {
    const [show, setShow] = useState(false);
    const [buttontitle, setTitle] = useState("Show");

    function onbuttonpress() {
        setShow(!show);
        setTitle(!show?"Hide":"Show")
    }
    return (
        <View>
            <Button title={buttontitle} onPress={onbuttonpress}></Button>
            {show && <Task21Function />}
        </View>
    );
}
const styles = {
    show: {
        margin: 10,
        fontSize: 25,
        textAlign: "center",
    }
}