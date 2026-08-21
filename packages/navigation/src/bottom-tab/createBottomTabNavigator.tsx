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
    TypedNavigator,
    useNavigationBuilder,
} from "@react-navigation/native";
import * as React from "react";

import type { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabView } from "@react-navigation/bottom-tabs";
import { createMadDescriptors } from "../_internal/createMadDescriptors";
import type { BottomTabNavigationConfig, MadBottomTabNavigationOptions, MadBottomTabNavigatorProps, MadBottomTabNavigatorTypeBag } from "./types";
import { MadCustomFactoryProps } from "../_internal/types";

type Props = DefaultNavigatorOptions<
    ParamListBase,
    string | undefined,
    TabNavigationState<ParamListBase>,
    MadBottomTabNavigationOptions,
    BottomTabNavigationEventMap,
    TabActionHelpers<ParamListBase>
> &
    TabRouterOptions &
    BottomTabNavigationConfig &
    MadCustomFactoryProps;

function BottomTabNavigator({
    id,
    initialRouteName,
    backBehavior,
    children,
    screenListeners,
    screenOptions,
    sceneContainerStyle,
    customSubHeader,
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

    const modifiedDescriptors = createMadDescriptors(descriptors, { ...screenOptions, sceneContainerStyle, }, customSubHeader);

    return (
        <NavigationContent>
            <BottomTabView
                {...rest}
                state={state}
                navigation={navigation}
                descriptors={modifiedDescriptors}
            />
        </NavigationContent>
    );
}

export const createBottomTabNavigatorFactory = (customSubHeader?: () => React.ReactNode) => {
    return function <ParamList extends ParamListBase = ParamListBase>(): TypedNavigator<
        MadBottomTabNavigatorTypeBag<ParamList>
    > {

        // Define the custom navigator layout wrapper
        const CustomBottomTabNavigator = (props: MadBottomTabNavigatorProps<ParamList>) => {
            // Cast the base navigator safely using the correct Bottom Tab interfaces
            const TargetTab = BottomTabNavigator as React.ComponentType<MadBottomTabNavigatorProps<ParamList>>;

            return <TargetTab {...props} customSubHeader={customSubHeader} />;
        };

        // Instantiate and return via the factory cleanly
        const factory = createNavigatorFactory(CustomBottomTabNavigator);

        return factory() as unknown as TypedNavigator<MadBottomTabNavigatorTypeBag<ParamList>>;
    };
};