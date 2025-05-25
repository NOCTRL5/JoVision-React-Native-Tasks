import { useState } from "react";
import { Button, Text, View } from "react-native";
export default function Task17() {

    const [name, newname] = useState("");
    const [title, newtitile] = useState("Show");
    function onpress() {
        newname(name===""?"Osama Al-Tawara":"")
        newtitile(title === "Show"?"Hide":"Show");
    }
    return (
        <View>
            <Button onPress={onpress}title={title}>
            </Button >
            <Text style={styles.show}>{name}</Text>
        </View >
    )
}
    const styles = {
        show: {
            margin: 10,
            fontSize: 25,
            textAlign: "center",
        }
    }