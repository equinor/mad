import React, { useMemo, useRef, useState } from "react";
import { LayoutRectangle, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { IconButton } from "../Button/IconButton";
import { Menu } from "../Menu";
import { TextField, TextFieldProps } from "../TextField";
import { GenericAutocompleteProps } from "./types";

type AutocompleteProps<T> = {
    /**
     * A callback method invoked when the user selects an option from the autocomplete.
     */
    onSelect: (value: T | undefined) => void;
    /**
     * The currently selected option.
     */
    selectedOption: T | undefined;
} & TextFieldProps &
    GenericAutocompleteProps<T>;

export const Autocomplete = <T,>({
    options,
    selectedOption,
    onSelect,
    transformItem,
    ...restProps
}: AutocompleteProps<T>) => {
    const [inputValue, setInputValue] = useState(selectedOption ?? "");
    const filteredOptions = useMemo(
        () =>
            options.filter(option => {
                const transformedItem = transformItem ? transformItem(option) : (option as string);
                return transformedItem.toLowerCase().includes(inputValue.toLowerCase());
            }),
        [inputValue, options, transformItem],
    );

    const handleMenuOpen = () => {
        setIsOptionsVisible(true);
        inputRef.current && inputRef.current.focus();
    };
    const handleMenuClose = () => {
        setIsOptionsVisible(false);
        if (selectedOption) {
            setInputValue(selectedOption);
        } else {
            setInputValue("");
        }
        inputRef.current && inputRef.current.blur();
    };

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const [inputLayout, setInputLayout] = useState<LayoutRectangle | undefined>();
    const styles = useStyles(themedStyles, { inputLayout });

    const handleClearText = () => {
        handleMenuClose();
        setInputValue("");
        onSelect(undefined);
    };

    const renderItem = (option: string) => {
        return (
            <Menu.Item
                key={option}
                title={option}
                onPress={() => {
                    setInputValue(option);
                    onSelect(option);
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
                value={inputValue}
                onChange={text => {
                    setInputValue(text);
                    setIsOptionsVisible(true);
                    if (text === "") {
                        onSelect(undefined);
                    }
                }}
                onFocus={handleMenuOpen}
                onBlur={() => {
                    setIsOptionsVisible(false);
                }}
                rightAdornments={
                    <View style={styles.adornmentContainer}>
                        {selectedOption && (
                            <IconButton
                                name="close"
                                variant="ghost"
                                iconSize={18}
                                onPress={handleClearText}
                                style={styles.closeIcon}
                            />
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
