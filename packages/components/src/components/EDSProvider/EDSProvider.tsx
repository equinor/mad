import { ViewProps } from "react-native";
import { createContext } from "react";
import { Theme, ThemeData } from "./ThemeData";

const ThemeContext = createContext(ThemeData[Theme.Light]);
ThemeContext.displayName = "ThemeContext";

export type EDSProviderProps = {
    value: Theme
};

export const EDSProvider = (props: EDSProviderProps & ViewProps) => {
    return <ThemeContext.Provider value={ThemeData[props.value]}>
        {props.children}
    </ThemeContext.Provider>
};

EDSProvider.displayName = "EDSProvider";