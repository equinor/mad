import React, { useRef } from "react";
import {
    NavigationContainer as ReactNavigationNavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";

type ExtraProps = {
    onRouteChange?: (currentRoute: string, prevRoute: string | undefined) => void;
};

export type NavigationContainerProps<T extends object> = Parameters<
    typeof ReactNavigationNavigationContainer<T>
>[0] &
    ExtraProps;
export const NavigationContainer = <T extends object>(props: NavigationContainerProps<T>) => {
    const navigationRef = useNavigationContainerRef<T>();
    const routeNameRef = useRef<string | undefined>();

    const onReady = () => {
        if (props.onReady) props.onReady();
        const currentRoute = navigationRef.getCurrentRoute();
        if (!currentRoute) return;
        routeNameRef.current = currentRoute.name;
    };
    const onRouteChange = async () => {
        if (!props.onRouteChange) return;
        const currentRoute = navigationRef.getCurrentRoute();
        if (!currentRoute) return;
        const previousRouteName = routeNameRef.current;
        const currentRouteName = currentRoute.name;

        if (previousRouteName !== currentRouteName) {
            props.onRouteChange(currentRouteName, previousRouteName);
        }

        routeNameRef.current = currentRouteName;
    };
    const onStateChange: typeof props.onStateChange = (...args) => {
        onRouteChange();
        if (props.onStateChange) props.onStateChange(...args);
    };

    return (
        <ReactNavigationNavigationContainer<T>
            {...props}
            ref={navigationRef}
            onReady={onReady}
            onStateChange={onStateChange}
        />
    );
};
