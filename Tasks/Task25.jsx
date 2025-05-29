import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';
import Task25_MyClassComponent from '../Components/Task25classcomp';

export default function Task25() {
    const textRef = useRef();

    function on_text_input(new_text) {
        textRef.current?.changeText(new_text);
    }

    return (
        <View>
            <Task25_MyClassComponent ref={textRef} />
            <TextInput 
              placeholder="Type here"
              onChangeText={on_text_input}
            />
        </View>
    );
}
