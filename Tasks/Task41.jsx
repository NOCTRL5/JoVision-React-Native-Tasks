import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Task41One } from "../Components/Task41One";
import { Task41Two } from "../Components/Task41Two";
import { Task41Three } from "../Components/Task41Three";
import { Task41Four } from "../Components/Task41Four";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();
const screens = {
    screenOne: Task41One,
    screenTwo: Task41Two,
    screenThree: Task41Three,
    screenFour: Task41Four,
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },
});
export default function Task41() {
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