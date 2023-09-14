import { create } from "zustand";
import { devtools } from "zustand/middleware";

type DemoModeStore = {
    demoModeEnabled: boolean;
    enableDemoMode: () => void;
    disableDemoMode: () => void;
};
const useDemoModeStore = create<DemoModeStore>()(
    devtools(set => ({
        demoModeEnabled: false,
        enableDemoMode: () => set({ demoModeEnabled: true }),
        disableDemoMode: () => set({ demoModeEnabled: false }),
    })),
);

export const { enableDemoMode, disableDemoMode } = useDemoModeStore.getState();

export const useIsDemoModeEnabled = () => {
    return useDemoModeStore(state => state.demoModeEnabled);
};

export const getIsDemoModeEnabled = () => useDemoModeStore.getState().demoModeEnabled;
