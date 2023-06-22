import React, { createContext, PropsWithChildren } from "react";
import { ColorScheme, Density } from "../../styling/types";
import { PortalProvider } from "../Portal/PortalContext";

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
                {props.children}
            </PortalProvider>
        </EDSContext.Provider>
    );
};

EDSProvider.displayName = "EDSProvider";
