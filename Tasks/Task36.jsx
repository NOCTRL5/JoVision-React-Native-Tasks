import { ScrollView, Text } from "react-native";
export function Task36() {
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    const arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(generateRandomWord(Math.random() * 7 % 17 + 3));
    }
    function handleMapping(e, i) {
        return <Text
            key={i}
            style={{
                color: 'black',
                backgroundColor: '#444444',
                paddingHorizontal: 30,
                paddingVertical: 5,
            }}>
            {e}
        </Text>;
    }
    return (
        <ScrollView
            style={{
                width: 300,
                borderRadius: 16,
            }}
        >
            {arr.map(handleMapping)}
        </ScrollView>
    );
}