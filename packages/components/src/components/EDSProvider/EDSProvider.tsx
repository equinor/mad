import React, { createContext, PropsWithChildren } from "react";
import { ColorScheme, Density } from "../../styling/types";
import { PortalProvider } from "../Portal/PortalContext";
import { Portal } from "../Portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type EDSProviderProps = {
    colorScheme: ColorScheme;
    density: Density;
};

export const EDSContext = createContext<EDSProviderProps>({
    colorScheme: "light",
    density: "tablet",
});
EDSContext.displayName = "EDSContext";

export const EDSProvider = (
    props: PropsWithChildren<EDSProviderProps>
) => {
    return (
        <EDSContext.Provider
            value={{ colorScheme: props.colorScheme, density: props.density }}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <PortalProvider>
                    <Portal.Host style={{ flex: 1 }} name="root">
                        {props.children}
                    </Portal.Host>
                </PortalProvider>
            </GestureHandlerRootView>
        </EDSContext.Provider>
    );
};

EDSProvider.displayName = "EDSProvider";
