import { ScrollView, Text, RefreshControl } from "react-native";
import react, { useState} from "react";
export default function Task36() {
    function generateRandomWord(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    function generateWords() {
        const newarr = [];
        for (let i = 0; i < 100; i++) {
            newarr.push(generateRandomWord(Math.random() * 7 % 17 + 3));
        }
        return newarr;
    }
    const [words, setWords] = useState(generateWords());
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setWords(generateWords());
            setRefreshing(false);
        }, 1000);
    };
    function handleMapping(e, i) {
        return <Text
            key={i}
            style={{
                color: 'lightgrey',
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
                width: 412,
                borderRadius: 16,
            }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {words.map(handleMapping)}
        </ScrollView>
    );
}
