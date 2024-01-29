import React from "react";
import { Cell, Typography, Radio } from "@equinor/mad-components";
import { useLanguage } from "../../../../store/language";

type SelectLanguageCellGroupProps = {
    selectedLanguageCodeDraft: string;
    setSelectedLanguageCodeDraft: (code: string) => void;
};

export const SelectLanguageCellGroup = ({
    selectedLanguageCodeDraft,
    setSelectedLanguageCodeDraft,
}: SelectLanguageCellGroupProps) => {
    const { supportedLanguages } = useLanguage();
    const onPress = (code: string) => () => setSelectedLanguageCodeDraft(code);
    return (
        <Cell.Group>
            {supportedLanguages.map(language => (
                <Cell
                    key={language.code}
                    rightAdornment={<Radio checked={language.code === selectedLanguageCodeDraft} />}
                    onPress={onPress(language.code)}
                >
                    <Typography>{language.name}</Typography>
                </Cell>
            ))}
        </Cell.Group>
    );
};
