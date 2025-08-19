import { ExpoAuthSession } from "@equinor/mad-auth";

export const initiateAuthenticationClient = () => {
    const discovery = ExpoAuthSession.getDiscovery();
    const config = ExpoAuthSession.getConfig();
    if (!(!discovery || !config)) {
        void ExpoAuthSession.initiateAuthenticationClient(config, discovery);
    }
};
