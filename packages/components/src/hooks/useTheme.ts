import { useContext, useMemo } from "react";
import { EDSContext } from "../components/EDSProvider";
import { createTokenProxy } from "../styling/createTokenProxy";

export function useTheme() {
    const context = useContext(EDSContext);
    if (!context) throw new Error("Could not find the EDS Context. Have you set up the EDSProvider in your app root?");
    const tokenProxy = useMemo(() => {
        return createTokenProxy(context.colorScheme, context.density);
    }, [context]);
    return tokenProxy;
}