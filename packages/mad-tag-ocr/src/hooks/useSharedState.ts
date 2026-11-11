import { useEffect } from "react";
import { useSharedValue } from "react-native-worklets-core";

export function useStateToSharedValue<T>(state: T) {
    const sharedValue = useSharedValue<T>(state);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability -- immutability lint issue that can be looked at later
        sharedValue.value = state;
    }, [state, sharedValue]);

    return sharedValue;
}
