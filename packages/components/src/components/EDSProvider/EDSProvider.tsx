import React, { PropsWithChildren } from "react";
import { ColorScheme, Density } from "../../styling/types";
import { Portal, PortalProvider } from "../Portal";
import { DialogServiceProvider } from "../Dialog/service/DialogServiceProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrimProvider } from "../_internal/ScrimProvider";
import { EDSContext } from "./EDSContext";

export type EDSProviderProps = {
    /**
     * The color scheme to use for the components. You can fetch the system scheme using the
     * `useColorScheme` hook provided by react native.
     * @see https://reactnative.dev/docs/usecolorscheme
     */
    colorScheme: ColorScheme;
    /**
     * The density value to use for the components. You can configure the conditional for these yourself,
     * but an advised approach is to treat all screen widths below 576 as `phone`.
     */
    density: Density;
};

export const EDSProvider = (props: PropsWithChildren<EDSProviderProps>) => {
    return (
        <EDSContext.Provider value={{ colorScheme: props.colorScheme, density: props.density }}>
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
        </EDSContext.Provider>
    );
};

EDSProvider.displayName = "EDSProvider";
