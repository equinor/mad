import { useContext, useMemo } from "react";
import { EDSContext } from "../components/EDSProvider/EDSContext";
import { createTokenProxy } from "../styling/createTokenProxy";

/**
 * Resolves the current values from the master token directly.
 * Use this only when you specifically need values from the token directly in your component.
 * For styling, use `useStyles` with `EDSStyleSheet.create` instead.
 * @returns A resolved instance of the master token that adheres to the current app theme.
 */
export function useToken() {
    const context = useContext(EDSContext);
    const tokenProxy = useMemo(() => {
        return createTokenProxy(context.colorScheme, context.density);
    }, [context.colorScheme, context.density]);
    return tokenProxy;
}
