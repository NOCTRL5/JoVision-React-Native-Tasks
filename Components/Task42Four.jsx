import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function Task42Four(props) {
    const { style } = props;
    const navigator = useNavigation();
    function to_screen_1() {
        return navigator.navigate("Screen 1");
    }
    function to_screen_2() {
        return navigator.navigate("Screen 2");
    }
    function to_screen_3() {
        return navigator.navigate("Screen 3");
    }
    return (
        <View style={style}>
            <Text>Screen Four</Text>
            <Button title="To Screen 1" onPress={to_screen_1} />
            <Button title="To Screen 2" onPress={to_screen_2} />
            <Button title="To Screen 3" onPress={to_screen_3} />
        </View>
    );
}