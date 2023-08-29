import { DefaultNavigatorOptions, ParamListBase, TabNavigationState, TabRouterOptions } from '@react-navigation/native';
import * as React from 'react';
import type { BottomTabNavigationEventMap, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationConfig } from './types';
type Props = DefaultNavigatorOptions<ParamListBase, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap> & TabRouterOptions & BottomTabNavigationConfig;
declare function BottomTabNavigator({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, sceneContainerStyle, ...rest }: Props): React.JSX.Element;
export declare const createBottomTabNavigator: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState<ParamListBase>, BottomTabNavigationOptions, BottomTabNavigationEventMap, typeof BottomTabNavigator>;
export {};
