/**
 * Based on the original createBottomTabNavigator from react navigation
 * @see https://github.com/react-navigation/react-navigation/blob/main/packages/bottom-tabs/src/navigators/createBottomTabNavigator.tsx
 */
import {
    createNavigatorFactory,
    DefaultNavigatorOptions,
    ParamListBase,
    TabActionHelpers,
    TabNavigationState,
    TabRouter,
    TabRouterOptions,
    useNavigationBuilder,
} from "@react-navigation/native";
import * as React from "react";

import type { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabView } from "@react-navigation/bottom-tabs";
import { createMadDescriptors } from "../_internal/createMadDescriptors";
import type { BottomTabNavigationConfig, MadBottomTabNavigationOptions } from "./types";

type Props = DefaultNavigatorOptions<
    ParamListBase,
    TabNavigationState<ParamListBase>,
    MadBottomTabNavigationOptions,
    BottomTabNavigationEventMap
> &
    TabRouterOptions &
    BottomTabNavigationConfig;

function BottomTabNavigator({
    id,
    initialRouteName,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    sceneContainerStyle,
    ...rest
}: Props) {
    const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
        TabNavigationState<ParamListBase>,
        TabRouterOptions,
        TabActionHelpers<ParamListBase>,
        MadBottomTabNavigationOptions,
        BottomTabNavigationEventMap
    >(TabRouter, {
        id,
        initialRouteName,
        backBehavior,
        children,
        screenListeners,
        screenOptions,
    });

    const modifiedDescriptors = createMadDescriptors(descriptors, screenOptions);

    return (
        <NavigationContent>
            <BottomTabView
                {...rest}
                state={state}
                navigation={navigation}
                descriptors={modifiedDescriptors}
                sceneContainerStyle={sceneContainerStyle}
            />
        </NavigationContent>
    );
}

export const createBottomTabNavigator = createNavigatorFactory<
    TabNavigationState<ParamListBase>,
    MadBottomTabNavigationOptions,
    BottomTabNavigationEventMap,
    typeof BottomTabNavigator
>(BottomTabNavigator);
