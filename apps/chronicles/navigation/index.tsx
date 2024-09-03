/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import DiscoverScreen from "../screens/components/DiscoverScreen";
import IconsScreen from "../screens/IconsScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { DrawScreen } from "../screens/DrawScreen";
import { SignatureScreen } from "../screens/SignatureTest";
import { Color, Icon, IconName, useBreakpoint, useToken } from "@equinor/mad-components";
import {
    createBottomTabNavigator,
    createNativeStackNavigator,
    createCoreStackNavigator,
    NavigationContainer,
    getDefaultScreenOptionsForLoginScreen,
} from "@equinor/mad-core";
import { config } from "../mad.config";
import { GoToSettingsButton } from "../components/GoToSettingsButton";
import { SampleSettingsScreen } from "./SettingsScreen";
import {
    ComponentsStackParamList,
    DFWStackParamList,
    RootStackParamList,
    RootTabParamList,
} from "../types/navigation";
import { ComponentScreen } from "../screens/components/ComponentScreen";
import { ComponentName } from "../types/components";
import { DFWDiscoverScreen } from "../screens/dfw/DFWDiscoverScreen";
import { DFWComponentScreen } from "../screens/dfw/DFWComponentsScreen";
import { DFWComponentName } from "../types/dfwcomponents";
import { SampleLoginScreen } from "./LoginScreen";
import { ToastScreen } from "../screens/ToastScreen";
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

const ComponentsStack = createNativeStackNavigator<ComponentsStackParamList>();
function DiscoverNavigator() {
    return (
        <ComponentsStack.Navigator
            initialRouteName="Discover"
            screenOptions={{
                headerLargeTitle: true,
                headerLargeTitleShadowVisible: true,
                headerLargeTitleStyle: { fontFamily: "Equinor-Bold" },
                headerTitleStyle: {
                    fontFamily: "Equinor-Regular",
                },
                headerBackTitleStyle: { fontFamily: "Equinor-Regular" },
                customSubHeaderShown: false,
                headerRight: () => <GoToSettingsButton />,
            }}
        >
            <ComponentsStack.Screen name="Discover" component={DiscoverScreen} />
            <ComponentsStack.Screen
                name="Component"
                component={ComponentScreen}
                options={({ route }) => ({
                    title: ComponentName[route.params.name],
                    ...(route.params.screenOptions ?? {}),
                })}
            />
        </ComponentsStack.Navigator>
    );
}

const DFWStack = createNativeStackNavigator<DFWStackParamList>();

function DFWNavigator() {
    return (
        <DFWStack.Navigator
            initialRouteName="DFWDiscover"
            screenOptions={{
                headerLargeTitle: true,
                headerLargeTitleShadowVisible: true,
                headerLargeTitleStyle: { fontFamily: "Equinor-Bold" },
                headerTitleStyle: {
                    fontFamily: "Equinor-Regular",
                },
                headerBackTitleStyle: { fontFamily: "Equinor-Regular" },
                customSubHeaderShown: false,
                headerRight: () => <GoToSettingsButton marginRight={-12} />,
            }}
        >
            <DFWStack.Screen name="DFWDiscover" component={DFWDiscoverScreen} />
            <DFWStack.Screen
                name="DFWComponent"
                component={DFWComponentScreen}
                options={({ route }) => ({
                    title: DFWComponentName[route.params.name],
                    ...(route.params.screenOptions ?? {}),
                })}
            />
        </DFWStack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const breakpoint = useBreakpoint();
    return (
        <BottomTab.Navigator
            initialRouteName="Components"
            screenOptions={{
                tabBarLabelStyle: { fontFamily: "Equinor-Bold" },
                headerRight: () => <GoToSettingsButton marginRight={8} />,
            }}
        >
            <BottomTab.Screen
                name="Components"
                component={DiscoverNavigator}
                options={{
                    title: "Components",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="binoculars" color={color as Color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="DFW"
                component={DFWNavigator}
                options={{
                    title: breakpoint === "xs" ? "DFW" : "Digital Field Worker",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="video-input-component" color={color as Color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="IconsTab"
                component={IconsScreen}
                options={{
                    title: "Icons",
                    tabBarIcon: ({ color }) => <TabBarIcon name="grid" color={color as Color} />,
                }}
            />
            <BottomTab.Screen
                name="ToastTab"
                component={ToastScreen}
                options={{
                    title: "Toast",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="bullhorn-outline" color={color as Color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="DrawTab"
                component={DrawScreen}
                options={{
                    title: "Draw",
                    tabBarIcon: ({ color }) => <TabBarIcon name="draw" color={color as Color} />,
                }}
            />
            <BottomTab.Screen
                name="SignTab"
                component={SignatureScreen}
                options={{
                    title: "Sign",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="signature-image" color={color as Color} />
                    ),
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
