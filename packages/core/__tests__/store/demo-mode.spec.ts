import { renderHook, act } from "@testing-library/react-native";
import {
    disableDemoMode,
    enableDemoMode,
    getIsDemoModeEnabled,
    useDemoMode,
} from "../../src/store/demo-mode";

describe("Demo mode", () => {
    it("Should be disabled by default", () => {
        const initial = getIsDemoModeEnabled();
        expect(initial).toBe(false);
    });

    it("Should be possible to enable demo mode", () => {
        act(enableDemoMode);
        const isEnabled = getIsDemoModeEnabled();
        expect(isEnabled).toBe(true);
    });

    it("Should be possible to disable demo mode", () => {
        act(enableDemoMode);
        const isEnabled = getIsDemoModeEnabled();
        expect(isEnabled).toBe(true);
        act(disableDemoMode);
        const isEnabled2 = getIsDemoModeEnabled();
        expect(isEnabled2).toBe(false);
    });

    it("Should be possible to enable and disable demo mode through the hook", () => {
        const { result, rerender } = renderHook(() => useDemoMode());

        act(() => result.current.enableDemoMode());
        rerender({});
        expect(result.current.isEnabled).toBe(true);

        act(() => result.current.disableDemoMode());
        rerender({});
        expect(result.current.isEnabled).toBe(false);
    });

    it("Should give you the same results whether you are using the 'useDemoMode' or the non-reactive functions", () => {
        const { result, rerender } = renderHook(() => useDemoMode());
        expect(result.current.isEnabled).toBe(getIsDemoModeEnabled());

        act(() => result.current.enableDemoMode());
        rerender({});
        expect(result.current.isEnabled).toBe(getIsDemoModeEnabled());

        act(() => result.current.disableDemoMode());
        rerender({});
        expect(result.current.isEnabled).toBe(getIsDemoModeEnabled());

        act(enableDemoMode);
        rerender({});
        expect(result.current.isEnabled).toBe(getIsDemoModeEnabled());

        act(disableDemoMode);
        rerender({});
        expect(result.current.isEnabled).toBe(getIsDemoModeEnabled());
    });
});
