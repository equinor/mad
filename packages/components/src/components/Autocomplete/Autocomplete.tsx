import React, { useMemo, useRef, useState } from "react";
import { LayoutRectangle, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { IconButton } from "../Button/IconButton";
import { Menu } from "../Menu";
import { TextField, TextFieldProps } from "../TextField";

type SingleSelect = {
    multiple?: false;
    /**
     * A callback method invoked when the user selects an option from the autocomplete.
     */
    onSelect: (value: string) => void;
};

type AutocompleteProps = {
    /**
     * Options list that will be displayed in the autocomplete.
     */
    options: string[];
    /**
     * An array of options that will be selected when the autocomplete is rendered.
     */
    initialSelectedOptions?: string[];
    selectedOptions?: string[];
    onOptionsChange: (options: string[]) => void;
} & TextFieldProps &
    SingleSelect;

export const Autocomplete = ({
    options,
    initialSelectedOptions = [],
    selectedOptions,
    onOptionsChange,
    onSelect,
    onChange,
    ...restProps
}: AutocompleteProps) => {
    const isControlled = selectedOptions !== undefined;
    const [internalSelectedOptions, setInternalSelectedOptions] = useState(
        isControlled ? [] : initialSelectedOptions,
    );
    const finalSelectedOptions = isControlled ? selectedOptions : internalSelectedOptions;
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
    const styles = useStyles(themedStyles, { inputLayout });

    const handleClearText = () => {
        handleMenuClose();
        if (isControlled) {
            onOptionsChange([]);
        } else {
            setInternalSelectedOptions([]);
        }
    };

    const renderItem = (option: string) => {
        const onSingleSelect = onSelect as (value: string) => void;
        return (
            <Menu.Item
                key={option}
                title={option}
                onPress={() => {
                    if (isControlled) {
                        onOptionsChange([option]);
                    } else {
                        setInternalSelectedOptions([option]);
                    }
                    onSingleSelect(option);
                    setIsOptionsVisible(false);
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
            style={{ flexGrow: 1 }}
        >
            <TextField
                ref={inputRef}
                {...restProps}
                value={`${
                    finalSelectedOptions.length ? finalSelectedOptions.join(", ") + " " : ""
                }${inputValue}`}
                onChange={text => {
                    const newText = text.replace(
                        new RegExp(`^${finalSelectedOptions.join(", ")},?\\s?`),
                        "",
                    );
                    setInputValue(newText);
                    if (onChange) onChange(newText);
                    setIsOptionsVisible(true);
                }}
                onFocus={handleMenuOpen}
                onBlur={() =>
                    setTimeout(() => {
                        setIsOptionsVisible(false), setInputValue("");
                    }, 150)
                }
                rightAdornments={
                    <View style={styles.adornmentContainer}>
                        {finalSelectedOptions.length > 0 && (
                                <IconButton
                                    name="close"
                                    variant="ghost"
                                    iconSize={18}
                                    onPress={handleClearText}
                                    style={styles.closeIcon}
                                />,
                            )}
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
                    placement="bottom-start"
                    anchorEl={inputRef}
                    open={isOptionsVisible}
                    onClose={handleMenuClose}
                    style={styles.menuContainer}
                >
                    <ScrollView keyboardShouldPersistTaps="always">
                        {filteredOptions.map(option => renderItem(option))}
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
