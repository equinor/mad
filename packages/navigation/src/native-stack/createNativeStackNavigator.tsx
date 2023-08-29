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
  } from '@react-navigation/native';
  import * as React from 'react';
  
  import type {
    NativeStackNavigationEventMap,
    NativeStackNavigationOptions,
  } from '@react-navigation/native-stack';
  import { NativeStackView } from '@react-navigation/native-stack';
import { createMadDescriptors } from '../_internal/createMadDescriptors';
import type {NativeStackNavigatorProps} from './types'
  
  function NativeStackNavigator({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) {
    const { state, descriptors, navigation, NavigationContent } =
      useNavigationBuilder<
        StackNavigationState<ParamListBase>,
        StackRouterOptions,
        StackActionHelpers<ParamListBase>,
        NativeStackNavigationOptions,
        NativeStackNavigationEventMap
      >(StackRouter, {
        id,
        initialRouteName,
        children,
        screenListeners,
        screenOptions,
      });
  
    React.useEffect(
      () =>
        // @ts-expect-error: there may not be a tab navigator in parent
        navigation?.addListener?.('tabPress', (e: unknown) => {
          const isFocused = navigation.isFocused();
  
          // Run the operation in the next frame so we're sure all listeners have been run
          // This is necessary to know if preventDefault() has been called
          requestAnimationFrame(() => {
            if (
              state.index > 0 &&
              isFocused &&
              !(e as EventArg<'tabPress', true>).defaultPrevented
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
      [navigation, state.index, state.key]
    );

    const modifiedDescriptors = createMadDescriptors(descriptors);
  
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
  
  export const createNativeStackNavigator = createNavigatorFactory<
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    typeof NativeStackNavigator
  >(NativeStackNavigator);