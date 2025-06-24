import { TextInput, View } from "react-native";
import { Task38_CompOne } from "./Task38_CompOne";
import { useContext } from "react";
import { TextContext } from "./Task38_Text";

export function Task38_ComponentTwo() {
    const { text, setText } = useContext(TextContext);

    return <View style={{
        width: 300,
        height: 120,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'black',
        margin: 8,
        backgroundColor: '#333333',
        color: 'white',
        alignItems: 'center'
    }}>
        <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Write here..."
            style={{
                margin: 14,
                padding: 4,
                cursor: 'skyblue',
                borderWidth: 1,
                borderRadius: 12,
                color: 'skyblue',
                backgroundColor: 'midnightblue',
                width: 250,
                height: 40,
            }}
        />
        <Task38_CompOne />
    </View>
}