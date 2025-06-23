import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, TextInput, Text, View, StyleSheet, Alert } from "react-native";

export default function Task35() {
    const [originalName, setOriginalName] = useState(null);
    const [originalAge, setOriginalAge] = useState(null);
    const [originalCountry, setOriginalCountry] = useState(null);
    const [error, setError] = useState(null);
    const errorMessage = 'Please fill up the empty fields.';
    const regStrings = /[A-Za-z]/gm;
    function on_name_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalName('');
            setError(errorMessage);
            return;
        }
        return regStrings.test(txt)
            ? setOriginalName(txt)
            : setError(errorMessage);
    }
    function on_age_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalAge('');
            setError(errorMessage);
            return;
        }
        return /[0-9]/gm.test(txt)
            ? setOriginalAge(txt)
            : setError(errorMessage);
    }
    function on_country_change(txt) {
        if (txt != null) {
            setError('');
        } else {
            setOriginalCountry('');
            setError(errorMessage);
            return;
        }
        return regStrings.test(txt)
            ? setOriginalCountry(txt)
            : setError(errorMessage);
    }
    async function on_submit() {
        if (originalName == null || originalAge == null || originalCountry == null) {
            setError(errorMessage);
            return;
        }
        setError('');
        const obj = {
            name: originalName,
            age: originalAge,
            country: originalCountry,
            timestamp: new Date().getTime(),
        };
        try {
            const data = JSON.stringify(obj);
            await AsyncStorage.setItem(`${obj.timestamp}_${obj.name}`, data);
        } catch (e) {
            console.error(e);
            setError(e);
        }
        return Alert.alert('Submitted Successfully',
            null,
            [{
                text: 'Ok',
            }]);
    }
    async function get_data() {
        function handleReduce(p, e) {
            const modified_p = p.substring(0, 13);
            const modified_e = e.substring(0, 13);
            const x = modified_p >= modified_e ? p : e;
            return x;
        }
        try {
            const allKeys = await AsyncStorage.getAllKeys();
            if (allKeys.length == 0)
                return;
            const currentTime = new Date().getTime();
            const mostRecent = allKeys.reduce(handleReduce, allKeys[0]);
            const difference = Math.abs(currentTime - parseInt(mostRecent.substring(0, 13)));
            if (difference <= 600000 && difference > 0) {
                const item = await AsyncStorage.getItem(mostRecent);
                const data = JSON.parse(item);
                const { name, age, country } = data;
                setOriginalName(name);
                setOriginalAge(age);
                setOriginalCountry(country);
            }
        } catch (e) {
            console.error(e);
            setError(e);
        }
        return;
    }
    function handleEffect() {
        get_data();
    }
    useEffect(handleEffect, [Task35]);
    return (
        <View style={styles.container}>
            <TextInput
                defaultValue={originalName}
                onChangeText={on_name_change}
                placeholder="Your name..."
            />
            <TextInput
                defaultValue={originalAge}
                onChangeText={on_age_change}
                placeholder="Your age..."
                keyboardType="number-pad"
            />
            <TextInput
                defaultValue={originalCountry}
                onChangeText={on_country_change}
                placeholder="Your country..."
            />
            {error &&
                <Text style={styles.error}>{error}</Text>
            }
            <Button
                title="Submit"
                onPress={on_submit}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontWidth: 'bold'
    },
    container: {
        width: 400,
        margin: 100,
        fontSize: 34,
        padding: 120,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: 'black',
        backgroundColor: 'orange',
        verticalAlign: 'middle',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'space-evenly',
        justifyContent: 'center',
    },
});