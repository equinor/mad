import { useContext, useMemo } from "react";
import { EDSContext } from "../components/EDSProvider";
import { createTokenProxy } from "../styling/createTokenProxy";

export function useToken() {
    const context = useContext(EDSContext);
    const tokenProxy = useMemo(() => {
        return createTokenProxy(context.colorScheme, context.density);
    }, [context]);
    return tokenProxy;
}
