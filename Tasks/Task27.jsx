import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, View } from "react-native";

export default function Task27() {
    const [image, choose_image] = useState(null);

    const styles = {
        safe_area: {
            flex: 1,
            backgroundColor: 'white',
        },
        scroll_view: {
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
        },
        size_image: {
            width: 300,
            height: 300,
        }
    };
    
    const images_list = [
        require('../Resources/0.jpg'),
        require('../Resources/1.jpg'),
        require('../Resources/2.jpg')
    ]
    function on_button_press() {
        Alert.alert(
            'Choose an image ',
            '',
            [
                { text: '1', onPress: () => choose_image(0) },
                { text: '2', onPress: () => choose_image(1) },
                { text: '3', onPress: () => choose_image(2) },
            ],
        )
    }
    function noimages() {
        choose_image(null);
    }

    return (
        <View style={styles.safe_area}>
            <ScrollView contentContainerStyle={styles.scroll_view}>
                <Button title="Choose Image" onPress={on_button_press}></Button>
                <Button title="Clear All Images" onPress={noimages}></Button>
                {image !== null && (
                    <Image
                        style={styles.size_image}
                        source={images_list[image]}
                    />
                )}
            </ScrollView>
        </View>
    );
}