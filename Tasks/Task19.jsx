import { Button, View } from "react-native";
import { Task19ClassComponent } from "../Components/Task19comp.jsx";
import { useState } from "react";

export function Task19() {
    const [show, setShow] = useState(false);
    const [buttontitle, setButtonTitle] = useState("Show");
    function onbuttonpress() {
        setShow(!show);
        setButtonTitle(!show ?"Hide":"Show");
    }
    return (
        <View>
            <Button title={buttontitle} onPress={onbuttonpress}></Button>
            {show && <Task19ClassComponent />}
        </View>
    );
}