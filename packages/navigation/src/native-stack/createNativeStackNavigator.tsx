/**
 * Based on the original createNativeStackNavigator from react navigation
 * @see https://github.com/react-navigation/react-navigation/blob/main/packages/native-stack/src/navigators/createNativeStackNavigator.tsx
 */
import {
    createNavigatorFactory,
    EventArg,
    ParamListBase,
    StackActionHelpers,
    StackActions,
    StackNavigationState,
    StackRouter,
    StackRouterOptions,
    useNavigationBuilder,
} from "@react-navigation/native";
import React, { useEffect } from "react";

import type { NativeStackNavigationEventMap } from "@react-navigation/native-stack";
import { NativeStackView } from "@react-navigation/native-stack";
import { createMadDescriptors } from "../_internal/createMadDescriptors";
import type { MadNativeStackNavigationOptions, NativeStackNavigatorProps } from "./types";

function NativeStackNavigator({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    customSubHeader,
    ...rest
}: NativeStackNavigatorProps) {
    const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder<
        StackNavigationState<ParamListBase>,
        StackRouterOptions,
        StackActionHelpers<ParamListBase>,
        MadNativeStackNavigationOptions,
        NativeStackNavigationEventMap
    >(StackRouter, {
        id,
        initialRouteName,
        children,
        screenListeners,
        screenOptions,
    });

    useEffect(
        () =>
            // @ts-expect-error: there may not be a tab navigator in parent
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call -- don't really know how do deal with this error :/
            navigation?.addListener?.("tabPress", (e: unknown) => {
                const isFocused = navigation.isFocused();

                // Run the operation in the next frame so we're sure all listeners have been run
                // This is necessary to know if preventDefault() has been called
                requestAnimationFrame(() => {
                    if (
                        state.index > 0 &&
                        isFocused &&
                        !(e as EventArg<"tabPress", true>).defaultPrevented
                    ) {
                        // When user taps on already focused tab and we're inside the tab,
                        // reset the stack to replicate native behaviour
                        navigation.dispatch({
                            ...StackActions.popToTop(),
                            target: state.key,
                        });
                    }
                });
            }),
        [navigation, state.index, state.key],
    );

    const modifiedDescriptors = createMadDescriptors(descriptors, screenOptions, customSubHeader);

    return (
        <NavigationContent>
            <NativeStackView
                {...rest}
                state={state}
                navigation={navigation}
                descriptors={modifiedDescriptors}
            />
        </NavigationContent>
    );
}

export const createNativeStackNavigatorFactory = (customSubHeader?: () => React.ReactNode) =>
    createNavigatorFactory<
        StackNavigationState<ParamListBase>,
        MadNativeStackNavigationOptions,
        NativeStackNavigationEventMap,
        typeof NativeStackNavigator
    >(props => <NativeStackNavigator {...props} customSubHeader={customSubHeader} />);
