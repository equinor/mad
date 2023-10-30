import { act, renderHook } from "@testing-library/react-native";
import { useReleaseNotesVersion } from "../../src/store/release-notes";
import {
    getLastDisplayedReleaseNotesVersion,
    setLastDisplayedReleaseNotesVersion,
} from "../../src/store/release-notes/release-notes";

describe("release-notes", () => {
    it("should have a default value of null", () => {
        const { result } = renderHook(() => useReleaseNotesVersion());
        expect(result.current.lastDisplayedReleaseNotesVersion).toBe(null);
    });

    it("should be possible to read and update the value with and without the hook", () => {
        const { result, rerender } = renderHook(() => useReleaseNotesVersion());
        expect(result.current.lastDisplayedReleaseNotesVersion).toBe(
            getLastDisplayedReleaseNotesVersion(),
        );

        act(() => result.current.setLastDisplayedReleaseNotesVersion("1.0.0"));
        rerender({});
        expect(
            result.current.lastDisplayedReleaseNotesVersion ===
                getLastDisplayedReleaseNotesVersion(),
        ).toBeTruthy();
        expect(result.current.lastDisplayedReleaseNotesVersion).toBe("1.0.0");

        act(() => setLastDisplayedReleaseNotesVersion("2.0.0"));
        rerender({});
        expect(
            result.current.lastDisplayedReleaseNotesVersion ===
                getLastDisplayedReleaseNotesVersion(),
        ).toBeTruthy();
        expect(result.current.lastDisplayedReleaseNotesVersion).toBe("2.0.0");
    });
});
