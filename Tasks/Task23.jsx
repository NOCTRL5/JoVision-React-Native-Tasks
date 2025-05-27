import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Task23Component } from '../Components/Task23Component';

export default function Task22() {
    return (
        <View>
            <Text>
                "yes"
            </Text>
            <Task23_MyClassComponent setText={setText} />
        </View>
    );
}
