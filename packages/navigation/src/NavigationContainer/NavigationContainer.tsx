import {
    NavigationContainerRef,
    NavigationContainer as ReactNavigationNavigationContainer,
    useNavigationContainerRef,
} from "@react-navigation/native";
import React, { ForwardedRef, useRef } from "react";

type ExtraProps = {
    onRouteChange?: (currentRoute: string, prevRoute: string | undefined) => void;
};

export type NavigationContainerProps<T extends object> = Parameters<
    typeof ReactNavigationNavigationContainer<T>
>[0] &
    ExtraProps;

const NavigationContainerInner = <T extends object>(
    props: NavigationContainerProps<T>,
    ref?: ForwardedRef<NavigationContainerRef<T>>,
) => {
    const navigationRef = useNavigationContainerRef<T>();
    if (typeof ref === "function") throw new Error("Don't use legacy refs on NavigationContainer");
    const finalRef = ref ?? navigationRef;
    const routeNameRef = useRef<string | undefined>();

    const onReady = () => {
        if (props.onReady) props.onReady();
        const currentRoute = finalRef.current?.getCurrentRoute();
        if (!currentRoute) return;
        routeNameRef.current = currentRoute.name;
    };
    const onRouteChange = () => {
        if (!props.onRouteChange) return;
        const currentRoute = finalRef.current?.getCurrentRoute();
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
            ref={finalRef}
            onReady={onReady}
            onStateChange={onStateChange}
        />
    );
};

export const NavigationContainer = React.forwardRef(NavigationContainerInner) as <T extends object>(
    props: NavigationContainerProps<T> & { ref?: ForwardedRef<NavigationContainerRef<T>> },
) => React.ReactElement;
