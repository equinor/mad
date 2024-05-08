import React, { ForwardedRef } from "react";
import {
    NavigationContainer as MadNavigationContainer,
    NavigationContainerProps,
} from "@equinor/mad-navigation";
import { trackNavigation } from "@equinor/mad-insights";
import { NavigationContainerRef } from "@react-navigation/native";

const NavigationContainerInner = <T extends object>(
    props: NavigationContainerProps<T>,
    ref?: ForwardedRef<NavigationContainerRef<T>>,
) => (
    <MadNavigationContainer<T>
        {...props}
        ref={ref}
        onRouteChange={(current, prevRoute) => {
            trackNavigation(current);
            props.onRouteChange?.(current, prevRoute);
        }}
    />
);

export const NavigationContainer = React.forwardRef(
    NavigationContainerInner,
) as typeof MadNavigationContainer;
