/* eslint @typescript-eslint/no-unsafe-assignment: 0 -- this file is mostly copied from react-navigation. They have different rules than us */
/* eslint @typescript-eslint/no-unsafe-return: 0 -- this file is mostly copied from react-navigation. They have different rules than us */
/* eslint @typescript-eslint/no-unsafe-call: 0 -- this file is mostly copied from react-navigation. They have different rules than us */


import { createNavigatorFactory, EventArg, ParamListBase, StackActionHelpers, StackActions, StackNavigationState, StackRouter, StackRouterOptions, useNavigationBuilder } from "@react-navigation/native";
import { MadStackNavigationOptions, StackHeaderMode, StackNavigatorProps } from "./types";
import { StackNavigationEventMap, StackNavigationOptions, StackView } from "@react-navigation/stack";
import React from "react";
import warnOnce from "warn-once";
import { createMadDescriptors } from "../_internal/createMadDescriptors";

function StackNavigator({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    customSubHeader,
    ...rest
  }: StackNavigatorProps) {
    // @ts-expect-error: mode is deprecated
    const mode = rest.mode as 'card' | 'modal' | undefined;
  
    warnOnce(
      mode != null,
      `Stack Navigator: 'mode="${mode}"' is deprecated. Use 'presentation: "${mode}"' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator#presentation for more details.`
    );
  
    // @ts-expect-error: headerMode='none' is deprecated
    const headerMode = rest.headerMode as StackHeaderMode | 'none' | undefined;
  
    warnOnce(
      headerMode === 'none',
      `Stack Navigator: 'headerMode="none"' is deprecated. Use 'headerShown: false' in 'screenOptions' instead.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headershown for more details.`
    );
  
    warnOnce(
      headerMode != null && headerMode !== 'none',
      `Stack Navigator: 'headerMode' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#headermode for more details.`
    );
  
    // @ts-expect-error headerMode='none' is deprecated
    const keyboardHandlingEnabled = rest.keyboardHandlingEnabled;
  
    warnOnce(
      keyboardHandlingEnabled !== undefined,
      `Stack Navigator: 'keyboardHandlingEnabled' is moved to 'options'. Moved it to 'screenOptions' to keep current behavior.\n\nSee https://reactnavigation.org/docs/stack-navigator/#keyboardhandlingenabled for more details.`
    );
  
    const defaultScreenOptions: StackNavigationOptions = {
      presentation: mode,
      headerShown: headerMode ? headerMode !== 'none' : true,
      headerMode: headerMode && headerMode !== 'none' ? headerMode : undefined,
      keyboardHandlingEnabled,
    };
  
    const { state, descriptors, navigation, NavigationContent } =
      useNavigationBuilder<
        StackNavigationState<ParamListBase>,
        StackRouterOptions,
        StackActionHelpers<ParamListBase>,
        MadStackNavigationOptions,
        StackNavigationEventMap
      >(StackRouter, {
        id,
        initialRouteName,
        children,
        screenListeners,
        screenOptions,
        defaultScreenOptions,
      });
  
    React.useEffect(
      () =>
        // @ts-expect-error: there may not be a tab navigator in parent
        navigation.addListener?.('tabPress', (e) => {
          const isFocused = navigation.isFocused();
  
          // Run the operation in the next frame so we're sure all listeners have been run
          // This is necessary to know if preventDefault() has been called
          requestAnimationFrame(() => {
            if (
              state.index > 0 &&
              isFocused &&
              !(e as unknown as EventArg<'tabPress', true>).defaultPrevented
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

    const modifiedDescriptors = createMadDescriptors(descriptors, screenOptions, customSubHeader);
  
    return (
      <NavigationContent>
        <StackView
          {...rest}
          state={state}
          descriptors={modifiedDescriptors}
          navigation={navigation}
        />
      </NavigationContent>
    );
  }

  export const createStackNavigatorFactory = (customSubHeader?: () => React.ReactNode) =>
    createNavigatorFactory<
        StackNavigationState<ParamListBase>,
        MadStackNavigationOptions,
        StackNavigationEventMap,
        typeof StackNavigator
    >(props => <StackNavigator {...props} customSubHeader={customSubHeader} />);