/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import IconsScreen from "../screens/IconsScreen";
import {
    DiscoverStackParamList,
    RootStackParamList,
    RootTabParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { DrawScreen } from "../screens/DrawScreen";
import { SignatureScreen } from "../screens/SignatureTest";
import { PaperScreen } from "../screens/components/PaperScreen";
import { PopoverScreen } from "../screens/components/PopoverScreen";
import { ButtonScreen } from "../screens/components/ButtonScreen";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <RootStack.Group screenOptions={{ presentation: "modal" }}>
                <RootStack.Screen name="Modal" component={ModalScreen} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

const DiscoverStack = createNativeStackNavigator<DiscoverStackParamList>();
function DiscoverNavigator() {
    return (
        <DiscoverStack.Navigator
            screenOptions={{
                headerLargeTitle: true,
                headerLargeTitleShadowVisible: true,
                headerLargeTitleStyle: { fontFamily: "Equinor-Bold" },
                headerTitleStyle: {
                    fontFamily: "Equinor-Regular",
                    color: "#243746",
                },
                headerBackTitleStyle: { fontFamily: "Equinor-Regular" },
                headerTintColor: "#007079",
            }}
        >
            <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
            <DiscoverStack.Screen name="Paper" component={PaperScreen} />
            <DiscoverStack.Screen name="Popover" component={PopoverScreen} />
            <DiscoverStack.Screen name="Button" component={ButtonScreen} />
        </DiscoverStack.Navigator>
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
            initialRouteName="Discover"
            screenOptions={{
                tabBarActiveTintColor: "#007079",
                tabBarLabelStyle: { fontFamily: "Equinor-Bold" },
            }}
        >
            <BottomTab.Screen
                name="Discover"
                component={DiscoverNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="briefcase" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Icons"
                component={IconsScreen}
                options={{
                    title: "Icons",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="th" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Draw"
                component={DrawScreen}
                options={{
                    title: "Draw",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="pencil-square-o" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Sign"
                component={SignatureScreen}
                options={{
                    title: "Sign",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="pencil-square-o" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
