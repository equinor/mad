import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createStorage } from "../storage";

type ReleaseNotesState = {
    lastDisplayedReleaseNotesVersion: string | null;
    setLastDisplayedReleaseNotesVersion: (ver: string) => void;
};

const useReleaseNotesStore = create<ReleaseNotesState>()(
    devtools(
        persist(
            set => ({
                lastDisplayedReleaseNotesVersion: null,
                setLastDisplayedReleaseNotesVersion: (ver: string) =>
                    set(() => ({ lastDisplayedReleaseNotesVersion: ver })),
            }),
            {
                name: "release-notes",
                storage: createStorage<ReleaseNotesState>(),
            },
        ),
        { name: "core/release-notes" },
    ),
);

export const useReleaseNotesVersion = (): ReleaseNotesState => useReleaseNotesStore();

export const getLastDisplayedReleaseNotesVersion = () =>
    useReleaseNotesStore.getState().lastDisplayedReleaseNotesVersion;
export const { setLastDisplayedReleaseNotesVersion } = useReleaseNotesStore.getState();
