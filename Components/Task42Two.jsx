import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function Task42Two(props) {
    const { style } = props;
    const navigator = useNavigation();
    function to_screen_1() {
        return navigator.navigate("Screen 1");
    }
    function to_screen_3() {
        return navigator.navigate("Screen 3");
    }
    function to_screen_4() {
        return navigator.navigate("Screen 4");
    }
    return (
        <View style={style}>
            <Text>Screen Two</Text>
            <Button title="To Screen 1" onPress={to_screen_1} />
            <Button title="To Screen 3" onPress={to_screen_3} />
            <Button title="To Screen 4" onPress={to_screen_4} />
        </View>
    );
}