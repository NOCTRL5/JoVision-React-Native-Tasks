import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { useState } from "react";
import { Task39InputComponent } from "../Components/Task39InputComponent";
import { store } from "../Store/store";

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
                {show && <Task39InputComponent />}
            </View>
        </Provider>
    );
}