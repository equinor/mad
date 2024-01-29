import React, { useState } from "react";
import { useScreenTitleFromDictionary } from "../../../hooks/useScreenTitleFromDictionary";
import { useLanguage } from "../../../store/language";
import { ScrollView, View } from "react-native";
import { SelectLanguageCellGroup } from "./components/SelectLanguageCellGroup";
import { Button, EDSStyleSheet, Spacer, useStyles } from "@equinor/mad-components";
import { useDictionary } from "../../../language/useDictionary";
import { useNavigateFromLanguageSelectScreen } from "../../../hooks/useNavigateFromLanguageSelectScreen";

export const SelectLanguageScreen = () => {
    useScreenTitleFromDictionary(dic => dic.language.language);
    const styles = useStyles(themeStyles);
    const dictionary = useDictionary();
    const { language, setSelectedLanguage } = useLanguage();
    const navigate = useNavigateFromLanguageSelectScreen();
    const [selectedLanguageCodeDraft, setSelectedLanguageCodeDraft] = useState(language.code);

    const onPressSubmit = () => {
        setSelectedLanguage(selectedLanguageCodeDraft);
        navigate();
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            <SelectLanguageCellGroup
                selectedLanguageCodeDraft={selectedLanguageCodeDraft}
                setSelectedLanguageCodeDraft={setSelectedLanguageCodeDraft}
            />
            <View style={styles.submitButtonContainer}>
                <Button title={dictionary.common.save} onPress={onPressSubmit} />
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    submitButtonContainer: {
        flexDirection: "column",
        alignItems: "flex-end",
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
