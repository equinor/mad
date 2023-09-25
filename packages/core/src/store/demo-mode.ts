import { create } from "zustand";
import { devtools } from "zustand/middleware";

type ReleaseNotesState = {
    demoModeIsEnabled: boolean;
    enableDemoMode: () => void;
    disableDemoMode: () => void;
};

const useDemoModeStore = create<ReleaseNotesState>()(
    devtools(
        set => ({
            demoModeIsEnabled: false,
            enableDemoMode: () => set(() => ({ demoModeIsEnabled: true })),
            disableDemoMode: () => set(() => ({ demoModeIsEnabled: false })),
        }),
        { name: "core/demo-mode" },
    ),
);
