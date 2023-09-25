import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type ReleaseNotesState = {
    lastDisplayedReleaseNotesVersion: string;
    setLastDisplayedReleaseNotesVersion: (ver: string) => void;
};

const useLastDisplayedReleaseNotes = create<ReleaseNotesState>()(
    devtools(
        persist(
            set => ({
                lastDisplayedReleaseNotesVersion: "-1",
                setLastDisplayedReleaseNotesVersion: (ver: string) =>
                    set(_ => ({ lastDisplayedReleaseNotesVersion: ver })),
            }),
            {
                name: "release-notes",
            },
        ),
    ),
);
