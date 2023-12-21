/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import IconsScreen from "../screens/IconsScreen";
import { DiscoverStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { DrawScreen } from "../screens/DrawScreen";
import { SignatureScreen } from "../screens/SignatureTest";
import { PaperScreen } from "../screens/components/PaperScreen";
import { PopoverScreen } from "../screens/components/PopoverScreen";
import { ButtonScreen } from "../screens/components/ButtonScreen";
import { Color, Icon, IconName, useToken } from "@equinor/mad-components";
import { InputScreen } from "../screens/components/InputScreen";
import { TextFieldScreen } from "../screens/components/TextFieldScreen";
import { SearchScreen } from "../screens/components/SearchScreen";
import { CellScreen } from "../screens/components/CellScreen";
import { NavigationCellScreen } from "../screens/components/NavigationCellScreen";
import { AccordionScreen } from "../screens/components/AccordionScreen";
import { MenuScreen } from "../screens/components/MenuScreen";
import { ProgressIndicatorScreen } from "../screens/components/ProgressIndicatorScreen";
import { PortalScreen } from "../screens/components/PortalScreen";
import { DialogScreen } from "../screens/components/DialogScreen";
import { EnvironmentScreen } from "../screens/components/EnvironmentScreen";
import { ButtonCellScreen } from "../screens/components/ButtonCellScreen";
import { SwitchCellScreen } from "../screens/components/SwitchCellScreen";
import { SelectionControlsScreen } from "../screens/components/SelectionControlsScreen";
import { ErrorBoundaryScreen } from "../screens/components/ErrorBoundaryScreen";
import {
    createBottomTabNavigator,
    createNativeStackNavigator,
    createCoreStackNavigator,
    NavigationContainer,
} from "@equinor/mad-core";
import { config } from "../mad.config";
import { AutocompleteScreen } from "../screens/components/AutocompleteScreen";
import { GoToSettingsButton } from "../components/GoToSettingsButton";
import { SampleSettingsScreen } from "./SettingsScreen";
import { ChipScreen } from "../screens/components/ChipScreen";
import { TabsScreen } from "../screens/components/TabsScreen";

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

const CoreStack = createCoreStackNavigator(config);
function RootNavigator() {
    return (
        <CoreStack.Navigator>
            <CoreStack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
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

const DiscoverStack = createNativeStackNavigator<DiscoverStackParamList>();
function DiscoverNavigator() {
    return (
        <DiscoverStack.Navigator
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
                headerRight: () => <GoToSettingsButton marginRight={-12} />,
            }}
        >
            <DiscoverStack.Screen name="Discover" component={DiscoverScreen} />
            <DiscoverStack.Screen name="Paper" component={PaperScreen} />
            <DiscoverStack.Screen name="Popover" component={PopoverScreen} />
            <DiscoverStack.Screen name="Button" component={ButtonScreen} />
            <DiscoverStack.Screen
                name="SelectionControls"
                component={SelectionControlsScreen}
                options={{ headerTitle: "Selection Controls" }}
            />
            <DiscoverStack.Screen name="TextField" component={TextFieldScreen} />
            <DiscoverStack.Screen name="Input" component={InputScreen} />
            <DiscoverStack.Screen name="Autocomplete" component={AutocompleteScreen} />
            <DiscoverStack.Screen name="Search" component={SearchScreen} />
            <DiscoverStack.Screen name="Cell" component={CellScreen} />
            <DiscoverStack.Screen name="NavigationCell" component={NavigationCellScreen} />
            <DiscoverStack.Screen name="ButtonCell" component={ButtonCellScreen} />
            <DiscoverStack.Screen name="SwitchCell" component={SwitchCellScreen} />
            <DiscoverStack.Screen name="Accordion" component={AccordionScreen} />
            <DiscoverStack.Screen name="Menu" component={MenuScreen} />
            <DiscoverStack.Screen
                name="ProgressIndicator"
                options={{ title: "Progress Indicators" }}
                component={ProgressIndicatorScreen}
            />
            <DiscoverStack.Screen name="Portal" component={PortalScreen} />
            <DiscoverStack.Screen name="Dialog" component={DialogScreen} />
            <DiscoverStack.Screen name="Environment" component={EnvironmentScreen} />
            <DiscoverStack.Screen name="ErrorBoundary" component={ErrorBoundaryScreen} />
            <DiscoverStack.Screen name="Chip" component={ChipScreen} />
            <DiscoverStack.Screen
                name="Tabs"
                component={TabsScreen}
                options={{ headerLargeTitle: false }}
            />
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
            initialRouteName="DiscoverTab"
            screenOptions={{
                tabBarLabelStyle: { fontFamily: "Equinor-Bold" },
                headerRight: () => <GoToSettingsButton marginRight={8} />,
            }}
        >
            <BottomTab.Screen
                name="DiscoverTab"
                component={DiscoverNavigator}
                options={{
                    title: "Discover",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="binoculars" color={color as Color} />
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
