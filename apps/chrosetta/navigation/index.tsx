import React from "react";
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { ColorSchemeName } from "react-native";

import { Color, Icon, IconName, useToken } from "@equinor/mad-components";
import {
    NavigationContainer,
    createBottomTabNavigator,
    createCoreStackNavigator,
    getDefaultScreenOptionsForLoginScreen,
} from "@equinor/mad-core";
import { GoToSettingsButton } from "../components/GoToSettingsButton";
import { config } from "../mad.config";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList, RootTabParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import { SampleLoginScreen } from "./LoginScreen";
import { SampleSettingsScreen } from "./SettingsScreen";
import { OCRScreen } from "../screens/OCRScreen";
import HomeScreen from "../screens/HomeScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    const token = useToken();
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={{
                dark: colorScheme === "dark",
                colors: {
                    primary: token.colors.interactive.primary,
                    background: token.colors.container.background,
                    card: token.colors.container.default,
                    text: token.colors.text.primary,
                    border: token.colors.border.medium,
                    notification: token.colors.interactive.primary,
                },
            }}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

const CoreStack = createCoreStackNavigator<RootStackParamList>(config);
function RootNavigator() {
    return (
        <CoreStack.Navigator>
            <CoreStack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <CoreStack.Screen
                name="Login"
                component={SampleLoginScreen}
                options={getDefaultScreenOptionsForLoginScreen()}
            />
            <CoreStack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <CoreStack.Screen name="Settings" component={SampleSettingsScreen} />
        </CoreStack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarLabelStyle: { fontFamily: "Equinor-Bold" },
                headerRight: () => <GoToSettingsButton marginRight={8} />,
            }}
        >
            <BottomTab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color as Color} />,
                }}
            />
            <BottomTab.Screen
                name="OCRScreen"
                component={OCRScreen}
                options={{
                    title: "Tag Scanner",
                    tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color as Color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: IconName; color: Color }) {
    return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}
