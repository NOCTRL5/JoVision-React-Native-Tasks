import { View } from "react-native";
import { useState } from "react";
import { Task38_ComponentTwo } from "../Components/Task38_ComponentTwo.jsx";
import { TextContext } from "../Components/Task38_Text";

export default function Task38() {
    const [text, setText] = useState();
    return (
        <TextContext.Provider value={{ text, setText }}>
            <View>
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
                <Task38_ComponentTwo />
            </View>
        </TextContext.Provider>
    )
}