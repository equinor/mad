import { act, renderHook } from "@testing-library/react-native";
import {
    getIsAuthSessionInvalidated,
    invalidateAuthSession,
    rearmAuthSession,
    useAuthSessionGeneration,
} from "../../src/store/auth-session";

describe("Auth session", () => {
    beforeEach(() => {
        rearmAuthSession();
    });

    it("increments the navigator generation once per invalidated session", () => {
        const { result } = renderHook(() => useAuthSessionGeneration());
        const initialGeneration = result.current;

        act(invalidateAuthSession);
        act(invalidateAuthSession);

        expect(result.current).toBe(initialGeneration + 1);
        expect(getIsAuthSessionInvalidated()).toBe(true);
    });

    it("can be rearmed for a later session", () => {
        const { result } = renderHook(() => useAuthSessionGeneration());
        const initialGeneration = result.current;

        act(invalidateAuthSession);
        act(rearmAuthSession);
        act(invalidateAuthSession);

        expect(result.current).toBe(initialGeneration + 2);
    });
});
