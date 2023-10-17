import React, { useMemo, useRef, useState } from "react";
import { LayoutRectangle, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { IconButton } from "../Button/IconButton";
import { Input, InputProps } from "../Input";
import { Menu } from "../Menu";

type SingleSelect = {
    multiple?: false;
    /**
     * A callback method invoked when the user selects an option from the autocomplete.
     */
    onSelect: (value: string) => void;
};

type MultiSelect = {
    multiple: true;
    /**
     * A callback method invoked when the user selects an option from the autocomplete.
     */
    onSelect: (value: string[]) => void;
};

type AutocompleteProps = {
    /**
     * Options list that will be displayed in the autocomplete.
     */
    options: string[];
    /**
     * A label above the input field.
     */
    label?: string;
    /**
     * A placeholder for the input field.
     */
    placeholder?: string;
} & InputProps &
    (SingleSelect | MultiSelect);

export const Autocomplete = ({
    options,
    onSelect,
    onChange,
    label,
    placeholder,
    multiple = false,
    ...restProps
}: AutocompleteProps) => {
    const [inputValue, setInputValue] = useState("");
    const filteredOptions = useMemo(() => {
        return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
    }, [inputValue, options]);

    const handleMenuOpen = () => {
        setIsOptionsVisible(true);
        inputRef.current && inputRef.current.focus();
    };
    const handleMenuClose = () => {
        setIsOptionsVisible(false);
        inputRef.current && inputRef.current.blur();
    };

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const [inputLayout, setInputLayout] = useState<LayoutRectangle | undefined>();
    const [selectedToggleOptions, setSelectedToggleOptions] = useState<string[]>([]);
    const styles = useStyles(themedStyles, { inputLayout });

    const handleClearSingleText = () => {
        handleMenuClose();
        setInputValue("");
    };

    const handleClearMultiText = () => {
        handleMenuClose();
        setSelectedToggleOptions([]);
    };
    const handleToggleOptionPress = (optionTitle: string) => {
        if (selectedToggleOptions.includes(optionTitle)) {
            setSelectedToggleOptions(prev => prev.filter(title => title !== optionTitle));
        } else {
            setSelectedToggleOptions(prev => [...prev, optionTitle]);
        }
    };

    const renderSingleSelectItem = (option: string) => {
        const onSingleSelect = onSelect as (value: string) => void;
        return (
            <Menu.Item
                key={option}
                title={option}
                onPress={() => {
                    setInputValue(option);
                    onSingleSelect(option);
                    setIsOptionsVisible(false);
                }}
            />
        );
    };

    const renderMultiSelectItem = (option: string, active: boolean) => {
        return (
            <Menu.Item
                key={option}
                title={option}
                active={active}
                closeMenuOnClick={false}
                iconName={active ? "checkbox-marked" : "checkbox-blank-outline"}
                onPress={() => {
                    setInputValue("");
                    handleToggleOptionPress(option);
                }}
            />
        );
    };

    return (
        <View
            onLayout={event => {
                const layout = event.nativeEvent.layout;
                setInputLayout(layout);
            }}
        >
            <Input
                ref={inputRef}
                {...restProps}
                value={`${
                    selectedToggleOptions.length ? selectedToggleOptions.join(", ") + ", " : ""
                }${inputValue}`}
                label={label}
                placeholder={placeholder}
                onChange={text => {
                    const newText = text.replace(
                        new RegExp(`^${selectedToggleOptions.join(", ")},?\\s?`),
                        "",
                    );
                    setInputValue(newText);
                    if (onChange) onChange(newText);
                    setIsOptionsVisible(true);
                }}
                onFocus={handleMenuOpen}
                onBlur={() => setTimeout(() => setIsOptionsVisible(false), 150)}
                rightAdornments={
                    <View style={styles.adornmentContainer}>
                        {inputValue || selectedToggleOptions.length > 0 ? (
                            <IconButton
                                name="close"
                                variant="ghost"
                                iconSize={18}
                                onPress={inputValue ? handleClearSingleText : handleClearMultiText}
                                style={styles.closeIcon}
                            />
                        ) : null}
                        <IconButton
                            name={isOptionsVisible ? "menu-up" : "menu-down"}
                            variant="ghost"
                            iconSize={18}
                            onPress={handleMenuOpen}
                            style={styles.menuIcon}
                        />
                    </View>
                }
            />
            {isOptionsVisible && (
                <Menu
                    anchorEl={inputRef}
                    open={isOptionsVisible}
                    onClose={handleMenuClose}
                    style={styles.menuContainer}
                >
                    <ScrollView keyboardShouldPersistTaps="always">
                        {filteredOptions.map(option =>
                            !multiple
                                ? renderSingleSelectItem(option)
                                : renderMultiSelectItem(
                                      option,
                                      selectedToggleOptions.includes(option),
                                  ),
                        )}
                    </ScrollView>
                </Menu>
            )}
        </View>
    );
};

Autocomplete.displayName = "Autocomplete";
const themedStyles = EDSStyleSheet.create(
    (theme, { inputLayout }: { inputLayout?: LayoutRectangle }) => ({
        menuContainer: {
            maxHeight: 300,
            width: inputLayout?.width || "100%",
        },
        adornmentContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        closeIcon: {
            marginLeft: 8,
        },
        menuIcon: {
            marginRight: 3,
        },
    }),
);
