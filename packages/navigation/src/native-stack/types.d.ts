import type { ParamListBase, StackNavigationState, StackRouterOptions, DefaultNavigatorOptions } from '@react-navigation/native';
import type { NativeStackNavigationOptions, NativeStackNavigationEventMap } from '@react-navigation/native-stack';
export type NativeStackNavigatorProps = DefaultNavigatorOptions<ParamListBase, StackNavigationState<ParamListBase>, NativeStackNavigationOptions, NativeStackNavigationEventMap> & StackRouterOptions & NativeStackNavigationConfig;
export type NativeStackNavigationConfig = {};
