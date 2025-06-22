import { StyleSheet, Text } from "react-native";
import  useCurrentTime  from "../Components/Task34CurrentTime";

export default function Task34() {
    const currentTime = useCurrentTime();
    return <Text style={styles.text}>{currentTime.toUTCString()}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: 'yellow',
        backgroundColor: 'black',
        borderRadius: 30,
        paddingVertical: 35,
        paddingHorizontal: 20,
    }
});