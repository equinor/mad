import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import * as React from 'react';
import type { NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { NativeStackNavigatorProps } from './types';
declare function NativeStackNavigator({ id, initialRouteName, children, screenListeners, screenOptions, ...rest }: NativeStackNavigatorProps): React.JSX.Element;
export declare const createNativeStackNavigator: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, StackNavigationState<ParamListBase>, NativeStackNavigationOptions, NativeStackNavigationEventMap, typeof NativeStackNavigator>;
export {};
