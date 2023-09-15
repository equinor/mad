import { create } from "zustand";
import { devtools } from "zustand/middleware";

const actionParentName = "mad-auth";

type DemoModeStore = {
    demoModeEnabled: boolean;
    enableDemoMode: () => void;
    disableDemoMode: () => void;
};
const useDemoModeStore = create<DemoModeStore>()(
    devtools(
        set => ({
            demoModeEnabled: false,
            enableDemoMode: () =>
                set({ demoModeEnabled: true }, false, `${actionParentName}/enableDemoMode`),
            disableDemoMode: () =>
                set({ demoModeEnabled: false }, false, `${actionParentName}/disableDemoMode`),
        }),
        { anonymousActionType: actionParentName, name: `mad-auth/demo-mode` },
    ),
);

export const { enableDemoMode, disableDemoMode } = useDemoModeStore.getState();

export const useIsDemoModeEnabled = () => {
    return useDemoModeStore(state => state.demoModeEnabled);
};

export const getIsDemoModeEnabled = () => useDemoModeStore.getState().demoModeEnabled;
