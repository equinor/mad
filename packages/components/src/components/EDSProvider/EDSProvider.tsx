import { createContext } from "react";
import { ColorScheme, Density } from "../../styling/types";

export type EDSProviderProps = {
    colorScheme: ColorScheme;
    density: Density;
};

export const EDSContext = createContext<EDSProviderProps>({ colorScheme: "light", density: "comfortable" });
EDSContext.displayName = "EDSContext";


export const EDSProvider = (props: React.PropsWithChildren<EDSProviderProps>) => {
    return <EDSContext.Provider value={{ colorScheme: props.colorScheme, density: props.density }}>
        {props.children}
    </EDSContext.Provider>
};

EDSProvider.displayName = "EDSProvider";