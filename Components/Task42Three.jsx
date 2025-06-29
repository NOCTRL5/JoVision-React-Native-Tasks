import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function Task42Three(props) {
    const { style } = props;
    const navigator = useNavigation();
    function to_screen_1() {
        return navigator.navigate("Screen 1");
    }
    function to_screen_2() {
        return navigator.navigate("Screen 2");
    }
    function to_screen_4() {
        return navigator.navigate("Screen 4");
    }
    return (
        <View style={style}>
            <Text>Screen Three</Text>
            <Button title="To Screen 1" onPress={to_screen_1} />
            <Button title="To Screen 2" onPress={to_screen_2} />
            <Button title="To Screen 4" onPress={to_screen_4} />
        </View>
    );
}