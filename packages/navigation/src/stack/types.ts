import {
    DefaultNavigatorOptions,
    ParamListBase,
    StackActionHelpers,
    StackNavigationState,
    StackRouterOptions,
} from "@react-navigation/native";
import { StackNavigationEventMap, StackNavigationOptions } from "@react-navigation/stack";
import { MadCustomFactoryProps, MadNavigationOptions } from "../_internal/types";

export type StackNavigatorProps = DefaultNavigatorOptions<
    ParamListBase,
    string | undefined,
    StackNavigationState<ParamListBase>,
    MadNavigationOptions,
    StackNavigationEventMap,
    StackActionHelpers<ParamListBase>
> &
    StackRouterOptions &
    StackNavigationConfig & MadCustomFactoryProps;

export type StackNavigationConfig = {
    /**
     * Whether inactive screens should be detached from the view hierarchy to save memory.
     * This will have no effect if you disable `react-native-screens`.
     *
     * Defaults to `true`.
     */
    detachInactiveScreens?: boolean;
};

export type StackHeaderMode = 'float' | 'screen'

export type MadStackNavigationOptions = StackNavigationOptions & MadNavigationOptions