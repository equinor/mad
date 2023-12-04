import React from "react";
import {
    NavigationContainer as MadNavigationContainer,
    NavigationContainerProps,
} from "@equinor/mad-navigation";
import { trackNavigation } from "@equinor/mad-insights";

export const NavigationContainer = <T extends object>(props: NavigationContainerProps<T>) => (
    <MadNavigationContainer
        {...props}
        onRouteChange={(current, prevRoute) => {
            trackNavigation(current);
            props.onRouteChange?.(current, prevRoute);
        }}
    />
);
