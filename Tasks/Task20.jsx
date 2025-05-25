import { Button, View } from "react-native";
import { Task20ClassComponent } from "../Components/Task20comp";
import { useState } from "react";

export function Task20() {
    const [show, setShow] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("Show");

    function on_button_press() {
        setShow(!show);
        setButtonTitle(!show ? "Hide" : "Show");
    }
    return (
        <View>
            <Button title={buttonTitle} onPress={on_button_press}></Button>
            {show && <Task20ClassComponent />}
        </View>
    );
}