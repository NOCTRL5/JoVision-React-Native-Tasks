import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { useState } from "react";
import { Task39InputComp } from "../Components/Task39InputComp";
import { store } from "../Store/Store";

export default function Task39() {
    const [show, setShow] = useState(false);
    function on_press() {
        setShow(!show);
    }
    return (
        <Provider store={store}>
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Button
                    title={show ? "Hide" : "Show"}
                    onPress={on_press}
                />
                {show && <Task39InputComp />}
            </View>
        </Provider>
    );
}