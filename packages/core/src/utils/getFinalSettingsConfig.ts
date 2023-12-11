import { SettingsScreenConfiguration } from "../components";
import { PremadeSettings } from "./getPremadeSettings";

export const getFinalSettingsConfig = (
    config: SettingsScreenConfiguration,
    premade: PremadeSettings,
    clean: boolean,
): SettingsScreenConfiguration => {
    if (clean) return config;
    if (premade.language) return [premade.language, ...config, premade.common];
    return [...config, premade.common];
};
