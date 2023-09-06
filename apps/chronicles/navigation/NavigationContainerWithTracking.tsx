import React, { useRef } from "react";
import { trackNavigation } from "@equinor/mad-insights";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";

/**
 * @todo This component will fit perfectly into it's own package
 * Adds tracking to react navigation
 */
type NavigationContainerProps<T extends object> = Parameters<typeof NavigationContainer<T>>[0];
export const NavigationContainerWithTracking = <T extends object>(
    props: NavigationContainerProps<T>,
) => {
    const navigationRef = useNavigationContainerRef<T>();
    const routeNameRef = useRef<string | undefined>();

    const onReady = () => {
        if (props.onReady) props.onReady();
        const currentRoute = navigationRef.getCurrentRoute();
        if (!currentRoute) return;
        routeNameRef.current = currentRoute.name;
    };
    const trackStateChange = async () => {
        const currentRoute = navigationRef.getCurrentRoute();
        if (!currentRoute) return;
        const previousRouteName = routeNameRef.current;
        const currentRouteName = currentRoute.name;

        if (previousRouteName !== currentRouteName) {
            trackNavigation(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
    };
    const onStateChange: typeof props.onStateChange = (...args) => {
        trackStateChange();
        if (props.onStateChange) props.onStateChange(...args);
    };

    return (
        <NavigationContainer<T>
            {...props}
            ref={navigationRef}
            onReady={onReady}
            onStateChange={onStateChange}
        />
    );
};
