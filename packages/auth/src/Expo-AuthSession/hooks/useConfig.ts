import { useState } from "react";
import { AuthRequestConfig } from "expo-auth-session";

export function useConfig() {
    const [config, setConfig] = useState<AuthRequestConfig | null>(null);
    return { config, setConfig };
}
