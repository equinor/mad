import { CoreStackParamListBase, MadConfig } from "../types";
import { createNativeStackNavigator } from "@equinor/mad-navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setDefaultLanguage, setSupportedLanguages } from "../store/language";

export const createCoreStackNavigator = (config: MadConfig) => {
    setSupportedLanguages(config.language.supportedLanguages || []);
    const defaultLanguage = config.language.defaultLanguageCode;
    if (defaultLanguage) setDefaultLanguage(defaultLanguage);
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack, config);

    return { ...Stack, Navigator };
};
