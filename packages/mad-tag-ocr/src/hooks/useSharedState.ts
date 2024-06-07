import { useEffect } from "react";
import { useSharedValue } from "react-native-worklets-core";

export function useStateToSharedValue<T>(state: T) {
    const sharedValue = useSharedValue<T>(state);

    useEffect(() => {
        sharedValue.value = state;
    }, [state, sharedValue]);

    return sharedValue;
}
