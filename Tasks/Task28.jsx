import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, View, FlatList, SafeAreaView } from "react-native";

export default function Task28() {
    const images_list = [
        require('../Resources/0.jpg'),
        require('../Resources/1.jpg'),
        require('../Resources/2.jpg'),
        require('../Resources/3.png'),
        require('../Resources/4.jpg'),
        require('../Resources/5.jpg'),
        require('../Resources/6.jpg'),
        require('../Resources/7.jpg'),
        require('../Resources/8.jpg'),
        require('../Resources/9.jpg'),
        require('../Resources/10.jpg'),
        require('../Resources/11.gif')
    ]

    const renderItem = ({ item }) => (
        <Image
            source={item}
            style={{ width: 550, height: 800, marginRight: 10 }}
            resizeMode="contain"
        />
    );

    return (
        <SafeAreaView>
        <FlatList
            style={{
                margin: 15,
                padding: 20,
            }}
            data={images_list}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            />
        </SafeAreaView>
    )
}