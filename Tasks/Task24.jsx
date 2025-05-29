import { useRef} from "react";
import { View, TextInput } from "react-native";
import { Task24FunPage } from "../Components/Task24FunPage";
import React from "react";

export default function Task24() {
    const textRef = useRef();

    const on_text_input = (new_text) => {
        textRef.current?.updateText(new_text);
    }
    return (
        <View>
            <Task24FunPage text={textRef} />
            <TextInput onChangeText={on_text_input}
            placeholder="Type here"/>
        </View>
    )
}