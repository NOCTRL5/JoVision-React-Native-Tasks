import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Task17(){
    const [name, sname] = useState("");
    const [title, stitle] = useState("Show");

    function on_button_press() {
        stitle(title === "Show" ? "Hide" : "Show");
        sname(name === "" ? "Osama Al-Tawara" : "");
    }

    return (
        <View>
            <Button
                title={title}
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