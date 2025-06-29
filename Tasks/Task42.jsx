import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Task42One } from "../Components/Task42One";
import { Task42Two } from "../Components/Task42Two";
import { Task42Three } from "../Components/Task42Three";
import { Task42Four } from "../Components/Task42Four";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const screens = {
    screenOne: Task42One,
    screenTwo: Task42Two,
    screenThree: Task42Three,
    screenFour: Task42Four,
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
});
export function Task42() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Screen 1"
            >
                <Tab.Screen
                    name="Screen 1"
                    component={screens.screenOne}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 2"
                    component={screens.screenTwo}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 3"
                    component={screens.screenThree}
                    options={{
                        style: styles.screen,
                    }}
                />
                <Tab.Screen
                    name="Screen 4"
                    component={screens.screenFour}
                    options={{
                        style: styles.screen,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}