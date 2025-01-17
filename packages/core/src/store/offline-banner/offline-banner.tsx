import { create } from "zustand";
import { devtools } from "zustand/middleware";

type OfflineBannerState = {
    isEnabled: boolean;
    setOfflineBanner: (isEnabled : boolean) => void;
};

const useOfflineBannerStore = create<OfflineBannerState>()(
    devtools(
        set => ({
            isEnabled: false,
            setOfflineBanner: (isEnabled) => set(() => ({ isEnabled: isEnabled })),
        }),
        { name: "core/offline-banner" },
    ),
);

export const useOfflineBanner = (): OfflineBannerState => {
    return useOfflineBannerStore();
};

export const getIsOfflineBannerEnabled = () => useOfflineBannerStore.getState().isEnabled;
export const { setOfflineBanner } = useOfflineBannerStore.getState();
