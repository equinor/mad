import React, { createContext, PropsWithChildren } from "react";
import { ColorScheme, Density } from "../../styling/types";
import { PortalProvider } from "../Portal/PortalContext";
import { Portal } from "../Portal";
import { DialogServiceProvider } from "../Dialog/service/DialogServiceProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrimProvider } from "../_internal/ScrimProvider";

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
                    <ScrimProvider>
                        <Portal.Host style={{ flex: 1 }} name="root">
                            {props.children}
                            <DialogServiceProvider />
                        </Portal.Host>
                    </ScrimProvider>
                </PortalProvider>
            </GestureHandlerRootView>
        </EDSContext.Provider >
    );
};

EDSProvider.displayName = "EDSProvider";
