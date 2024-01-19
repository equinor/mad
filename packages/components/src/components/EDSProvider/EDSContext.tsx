import { createContext } from "react";
import { ColorScheme, Density } from "../../styling";

export type EDSContextType = {
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

export const EDSContext = createContext<EDSContextType>({
    colorScheme: "light",
    density: "tablet",
});

EDSContext.displayName = "EDSContext";
