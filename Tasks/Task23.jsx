import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Task23Component } from '../Components/Task23Component';

export default function Task23() {
    const [text, setText] = useState("Task23");

    return (
        <View>
            <Text style={styles.textStyle}>
                {text}
            </Text>
            <Task23Component setText={setText} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        color: "blue",
        textAlign: "center",
    },
});
