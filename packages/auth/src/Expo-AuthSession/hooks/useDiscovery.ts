import { useState } from "react";
import { DiscoveryDocument, useAutoDiscovery } from "expo-auth-session";

export function useDiscovery() {
    const [discovery] = useState<DiscoveryDocument | null>(
        useAutoDiscovery("https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/v2.0"),
    );
    return discovery;
}
