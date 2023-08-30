import type { BottomTabBarProps, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { StyleProp, ViewStyle } from "react-native";
import { MadNavigationOptions } from "../_internal/types";

export type BottomTabNavigationConfig = {
    /**
     * Function that returns a React element to display as the tab bar.
     */
    tabBar?: (props: BottomTabBarProps) => React.ReactNode;
    /**
     * Safe area insets for the tab bar. This is used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
     * By default, the device's safe area insets are automatically detected. You can override the behavior with this option.
     */
    safeAreaInsets?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    /**
     * Whether inactive screens should be detached from the view hierarchy to save memory.
     * Make sure to call `enableScreens` from `react-native-screens` to make it work.
     * Defaults to `true` on Android.
     */
    detachInactiveScreens?: boolean;
    /**
     * Style object for the component wrapping the screen content.
     */
    sceneContainerStyle?: StyleProp<ViewStyle>;
};

export type MadBottomTabNavigationOptions = BottomTabNavigationOptions & MadNavigationOptions;
