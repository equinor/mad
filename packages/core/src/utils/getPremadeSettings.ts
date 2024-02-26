import { SettingsScreenCellConfigurationItem, SettingsScreenSectionProps } from "../components";
import { CoreRoutes } from "../components/navigation/coreRoutes";
import { CoreDictionary } from "../language/types";
import { EnvironmentContextualConfig } from "../types";

const getReleaseNotesConfig = (
    dictionary: CoreDictionary,
): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "format-list-bulleted",
    title: dictionary.releaseNotes.releaseNotes,
    onPress: navigation => navigation.navigate(CoreRoutes.RELEASE_NOTES),
});

const getAboutConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "information-outline",
    title: dictionary.settings.aboutApp,
    onPress: navigation => navigation.navigate(CoreRoutes.ABOUT),
});

const getServiceNowConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "chat-alert-outline",
    title: dictionary.settings.feedback,
    onPress: navigation => navigation.navigate(CoreRoutes.FEEDBACK),
});

const getLanguageConfig = (dictionary: CoreDictionary): SettingsScreenCellConfigurationItem => ({
    name: "navigation",
    iconName: "chat-processing-outline",
    title: dictionary.settings.language,
    onPress: navigation => navigation.navigate(CoreRoutes.SELECT_LANGUAGE),
});

export type PremadeSettings = ReturnType<typeof getPremadeSettings>;
export const getPremadeSettings = (
    config: EnvironmentContextualConfig,
    dictionary: CoreDictionary,
) => {
    const premadeCommonNavigationItems = [getReleaseNotesConfig(dictionary)];
    if (config.about) premadeCommonNavigationItems.push(getAboutConfig(dictionary));
    if (config.serviceNow) premadeCommonNavigationItems.push(getServiceNowConfig(dictionary));

    const premadeLanguageSection: SettingsScreenSectionProps | undefined =
        config.language.supportedLanguages.length >= 2
            ? { items: [getLanguageConfig(dictionary)] }
            : undefined;
    const premadeCommonNavigationSection: SettingsScreenSectionProps = {
        items: premadeCommonNavigationItems,
    };

    return { language: premadeLanguageSection, common: premadeCommonNavigationSection };
};
