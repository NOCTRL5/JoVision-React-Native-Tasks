import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Task22Fun } from "../Components/Task22Fun";

export default function Task22() {
    const [text, setText] = useState("...")
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textStyle}>
                {text}
            </Text>
            <Task22Fun setText={setText} />
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
      alignItems: 'center',
      padding: 20,
    },
    textStyle: {
      fontSize: 20,
      color: "blue",
      textAlign: "center",
      marginBottom: 20,
    },
});