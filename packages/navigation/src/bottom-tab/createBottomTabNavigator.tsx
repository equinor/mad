import {
    createNavigatorFactory,
    DefaultNavigatorOptions,
    ParamListBase,
    TabActionHelpers,
    TabNavigationState,
    TabRouter,
    TabRouterOptions,
    useNavigationBuilder,
  } from '@react-navigation/native';
  import * as React from 'react';
  
  import type {
    BottomTabNavigationEventMap,
    BottomTabNavigationOptions,
  } from '@react-navigation/bottom-tabs';
  import { BottomTabView } from '@react-navigation/bottom-tabs';
import { createMadDescriptors } from '../_internal/createMadDescriptors';
import type {BottomTabNavigationConfig} from './types';
  
  type Props = DefaultNavigatorOptions<
    ParamListBase,
    TabNavigationState<ParamListBase>,
    BottomTabNavigationOptions,
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
    const { state, descriptors, navigation, NavigationContent } =
      useNavigationBuilder<
        TabNavigationState<ParamListBase>,
        TabRouterOptions,
        TabActionHelpers<ParamListBase>,
        BottomTabNavigationOptions,
        BottomTabNavigationEventMap
      >(TabRouter, {
        id,
        initialRouteName,
        backBehavior,
        children,
        screenListeners,
        screenOptions,
      });

      const modifiedDescriptors = createMadDescriptors(descriptors)
  
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
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap,
    typeof BottomTabNavigator
  >(BottomTabNavigator);