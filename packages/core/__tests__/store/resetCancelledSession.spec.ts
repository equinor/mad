import { ExpoAuthSession } from "@equinor/mad-auth";
import { act, renderHook } from "@testing-library/react-native";
import { disableDemoMode, enableDemoMode } from "../../src/store/demo-mode";
import {
    getIsAuthSessionInvalidated,
    rearmAuthSession,
    useAuthSessionGeneration,
} from "../../src/store/auth-session";
import { resetCancelledSession } from "../../src/store/auth-session/resetCancelledSession";

jest.mock("@equinor/mad-auth", () => ({
    ExpoAuthSession: { signOut: jest.fn() },
}));

const mockedSignOut = jest.mocked(ExpoAuthSession.signOut);

describe("resetCancelledSession", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        rearmAuthSession();
        disableDemoMode();
        mockedSignOut.mockReturnValue(true);
    });

    it("signs out and invalidates concurrent cancellations once", async () => {
        enableDemoMode();

        const firstReset = resetCancelledSession();
        const secondReset = resetCancelledSession();

        expect(getIsAuthSessionInvalidated()).toBe(true);

        await Promise.all([firstReset, secondReset]);

        expect(mockedSignOut).toHaveBeenCalledTimes(1);
        expect(getIsAuthSessionInvalidated()).toBe(true);
    });

    it("still invalidates when sign out throws", async () => {
        mockedSignOut.mockImplementationOnce(() => {
            throw new Error("Unable to sign out");
        });

        await expect(resetCancelledSession()).resolves.toBeUndefined();

        expect(getIsAuthSessionInvalidated()).toBe(true);
    });

    it("invalidates before sign out cleanup settles", async () => {
        let resolveSignOut: (() => void) | undefined;
        mockedSignOut.mockReturnValueOnce(
            new Promise<void>(resolve => {
                resolveSignOut = resolve;
            }) as never,
        );
        const { result } = renderHook(() => useAuthSessionGeneration());

        let reset: Promise<void>;
        act(() => {
            reset = resetCancelledSession();
        });

        expect(result.current).toBe(1);
        expect(mockedSignOut).not.toHaveBeenCalled();

        await Promise.resolve();
        expect(mockedSignOut).toHaveBeenCalledTimes(1);

        resolveSignOut?.();
        await reset!;
    });

    it("allows another reset after a successful login rearms the session", async () => {
        await resetCancelledSession();
        rearmAuthSession();

        await resetCancelledSession();

        expect(mockedSignOut).toHaveBeenCalledTimes(2);
    });
});
