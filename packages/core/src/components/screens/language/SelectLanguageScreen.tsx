import React, { useState } from "react";
import { useScreenTitleFromDictionary } from "../../../hooks/useScreenTitleFromDictionary"
import { useLanguage } from "../../../store/language";
import { View } from "react-native";
import { SelectLanguageCellGroup } from "./components/SelectLanguageCellGroup";
import { Button, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { useDictionary } from "../../../language/useDictionary";
import { useCoreStackNavigation, useCoreStackRoute } from "../../../hooks";
import { getNavigationRouteForLanguageSelectScreen } from "../../../utils/getNavigationRouteForSelectLanguageScreen";


export const SelectLanguageScreen = () => {
    useScreenTitleFromDictionary(dic => dic.language.language);
    const styles = useStyles(themeStyles);
    const dictionary = useDictionary();
    const language = useLanguage();
    const navigation = useCoreStackNavigation();
    const route = useCoreStackRoute();
    const [selectedLanguageCodeDraft, setSelectedLanguageCodeDraft] = useState(language.language.code);
    
    const isOnboarding = route.name === 'SelectLanguageOnboarding';
    const onPressSubmit = () => {
        language.setSelectedLanguage(selectedLanguageCodeDraft)
        const route = getNavigationRouteForLanguageSelectScreen(isOnboarding);
        navigation.navigate(route);
    }

    return <View>
        <SelectLanguageCellGroup selectedLanguageCodeDraft={selectedLanguageCodeDraft} setSelectedLanguageCodeDraft={setSelectedLanguageCodeDraft}/>
        <View style={styles.submitButtonContainer}>
            <Button title={dictionary.common.submit} onPress={onPressSubmit} />
        </View>
    </View>
}

const themeStyles = EDSStyleSheet.create((theme) => ({submitButtonContainer: {flexDirection: 'column', alignItems: 'flex-end', paddingVertical: theme.spacing.container.paddingVertical, paddingHorizontal: theme.spacing.container.paddingHorizontal}}))