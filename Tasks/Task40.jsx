import { Button, View } from "react-native";
import { Provider } from "react-redux";
import { useState } from "react";
import { Task40InputComp } from "../Components/Task40InputComp";
import { Store } from "../Store/Store";

export default function Task40() {
    const [show, setShow] = useState(false);

    function on_press() {
        setShow(!show);
    }
return (
    <Provider store={Store}>
        <View
            style={{
                alignItems: 'center',
                paddingVertical: 150
            }}
        >
        <Button
            title={show ? "Hide" : "Show"}
            onPress={on_press}
        />
            {show && <Task40InputComp />}
        </View>
        </Provider>
    );
}