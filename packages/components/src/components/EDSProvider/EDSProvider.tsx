import React, { createContext, PropsWithChildren } from "react";
import { ColorScheme, Density } from "../../styling/types";
import { PortalProvider } from "../Portal/PortalContext";
import { Portal } from "../Portal";
import { DialogServiceProvider } from "../Dialog/service/DialogServiceProvider";

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
            <PortalProvider>
                <Portal.Host style={{ flex: 1 }} name="root">
                    <Portal.Host style={{ flex: 1 }} renderPortalsFirst={false} name="scrim">
                        {props.children}
                        <DialogServiceProvider />
                    </Portal.Host>
                </Portal.Host>
            </PortalProvider>
        </EDSContext.Provider>
    );
};

EDSProvider.displayName = "EDSProvider";
