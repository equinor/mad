import React, { LegacyRef, createContext, forwardRef, useContext, useMemo, useRef } from "react";
import { Swipeable, SwipeableProps } from "react-native-gesture-handler";

const SwipeableWithContextInner = (props: SwipeableProps, ref: LegacyRef<Swipeable>) => {
    const internalRef = useRef<Swipeable>(null);
    if (typeof ref === "string" || typeof ref === "function")
        throw new Error("Don't use legacy refs when referencing SwipeableWithContext");
    const refToUse = ref ?? internalRef;
    const swipeableMethods: SwipeableMethods = useMemo(
        () => ({
            close: logErrorIfUndefined(refToUse.current?.close),
            openLeft: logErrorIfUndefined(refToUse.current?.openLeft),
            openRight: logErrorIfUndefined(refToUse.current?.openRight),
            reset: logErrorIfUndefined(refToUse.current?.reset),
        }),
        [refToUse, refToUse.current],
    );
    return (
        <SwipeableMethodsContext.Provider value={swipeableMethods}>
            <Swipeable ref={refToUse} {...props} />
        </SwipeableMethodsContext.Provider>
    );
};

const logErrorIfUndefined = (fn?: (() => void) | undefined) => {
    if (!fn)
        return () => {
            console.error(
                "Swipeable method unavailable. Make sure you are running this method inside a `SwipeableWithContext` component. Otherwise, contact maintainers of `@equinor/mad-components`",
            );
        };
    return fn;
};
const SwipeableMethodsContext = createContext<SwipeableMethods>({
    close: logErrorIfUndefined(),
    openLeft: logErrorIfUndefined(),
    openRight: logErrorIfUndefined(),
    reset: logErrorIfUndefined(),
});

export const useSwipeableMethods = () => useContext(SwipeableMethodsContext);

export type SwipeableMethods = Pick<Swipeable, "close" | "openLeft" | "openRight" | "reset">;

export const SwipeableWithContext = forwardRef(SwipeableWithContextInner);
