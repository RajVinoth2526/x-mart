import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from "./auth/loginscreen";
import { Entypo } from '@expo/vector-icons';
import RegistrationScreen from "./auth/registerscreen";
import { MaterialIcons } from '@expo/vector-icons';
import { primaryColor } from "../../css/style";
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileScreen from "./profilescreen";
import CardScreen from "./cardscreen";
import ShoppingScreen from "./shoppingscreen";
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            {/* Define each tab here */}
            <Tab.Screen
                name="Login"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={primaryColor} />
                    ),
                    tabBarLabelStyle: { display: 'none' },
                    headerShown: false
                }}>
                {() => <ShoppingScreen />}
            </Tab.Screen>

            <Tab.Screen
                name="Card"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="shopping-cart" size={24} color={primaryColor} />
                    ),
                    tabBarLabelStyle: { display: 'none' },
                    headerShown: false
                }}>
                {() => <CardScreen />}
            </Tab.Screen>

            <Tab.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person" size={24} color={primaryColor} />
                    ),
                    tabBarLabelStyle: { display: 'none' },
                    headerShown: false
                }}>
                {() => <ProfileScreen />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default HomeScreen;
