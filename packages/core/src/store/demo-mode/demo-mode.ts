import { create } from "zustand";
import { devtools } from "zustand/middleware";

type DemoModeState = {
    isEnabled: boolean;
    enableDemoMode: () => void;
    disableDemoMode: () => void;
};

const useDemoModeStore = create<DemoModeState>()(
    devtools(
        set => ({
            isEnabled: false,
            enableDemoMode: () => set(() => ({ isEnabled: true })),
            disableDemoMode: () => set(() => ({ isEnabled: false })),
        }),
        { name: "core/demo-mode" },
    ),
);

export const useDemoMode = (): DemoModeState => {
    return useDemoModeStore();
};

export const getIsDemoModeEnabled = () => useDemoModeStore.getState().isEnabled;
export const { enableDemoMode, disableDemoMode } = useDemoModeStore.getState();
