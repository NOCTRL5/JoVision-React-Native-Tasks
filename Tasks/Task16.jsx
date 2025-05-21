import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Task16() {
    const [name, setname] = useState("");

    function on_button_press() {
        setname(name === "" ? "Osama Al-Tawara" : "");
    }

    return (  
        <View>
            <Button
                title="Show"
                onPress={on_button_press}>
            </Button>
            <Text style={styles.myName}>{name}</Text>
        </View>
    )
}

const styles = {
    myName: {
        margin: 10,
        fontSize: 20,
        textAlign: "center",
    }
}