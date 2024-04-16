import { useMemo, useRef } from "react";
import { Swipeable } from "react-native-gesture-handler";

export const useSwipeableMethods = () => {
    const swipeableRef = useRef<Swipeable>(null);
    const swipeableMethods: SwipeableMethods = useMemo(
        () => ({
            close: logErrorIfUndefined(swipeableRef.current?.close),
            openLeft: logErrorIfUndefined(swipeableRef.current?.openLeft),
            openRight: logErrorIfUndefined(swipeableRef.current?.openRight),
            reset: logErrorIfUndefined(swipeableRef.current?.reset),
        }),
        [swipeableRef.current],
    );
    console.log("SWIPEABLE REF", swipeableRef);
    return { swipeableMethods, swipeableRef };
};

export type SwipeableMethods = Pick<Swipeable, "close" | "openLeft" | "openRight" | "reset">;

const logErrorIfUndefined = (fn: (() => void) | undefined) => {
    if (!fn)
        return () => {
            console.error(
                "Swipeable method unavailable. If you are running a test, this is expected behaviour. Otherwise, contact maintainers of `@equinor/mad-components`",
            );
        };
    return fn;
};
