import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export function Task42One(props) {
    const { style } = props;
    const navigator = useNavigation();
    function to_screen_2() {
        return navigator.navigate("Screen 2");
    }
    function to_screen_3() {
        return navigator.navigate("Screen 3");
    }
    function to_screen_4() {
        return navigator.navigate("Screen 4");
    }
    return (
        <View style={style}>
            <Text>Screen One</Text>
            <Button title="To Screen 2" onPress={to_screen_2} />
            <Button title="To Screen 3" onPress={to_screen_3} />
            <Button title="To Screen 4" onPress={to_screen_4} />
        </View>
    );
}