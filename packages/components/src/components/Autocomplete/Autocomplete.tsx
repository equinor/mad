import React, { useEffect, useRef, useState } from "react";
import { LayoutRectangle, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { IconButton } from "../Button/IconButton";
import { Input, InputProps } from "../Input";
import { Menu } from "../Menu";

type ToggleOptionProps = {
    title: string;
    active: boolean;
    iconName: "radiobox-marked" | "radiobox-blank";
    onPress: () => void;
};

type AutocompleteProps = {
    /**
     * Options list that will be displayed in the autocomplete.
     */
    options: string[];
    /**
     * A callback method invoked when the user selects an option from the autocomplete.
     */
    onSelect: (option: string) => void;
    /**
     * A label above the input field.
     */
    label?: string;
    /**
     * A placeholder for the input field.
     */
    placeholder?: string;
    toggleOptions?: ToggleOptionProps[];
} & InputProps;

export const Autocomplete: React.FC<AutocompleteProps> = ({
    options,
    onSelect,
    onChange,
    label,
    placeholder,
    toggleOptions,
    ...restProps
}) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
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

    const handleClearText = () => {
        setInputValue("");
        handleMenuClose();
    };
    const handleToggleOptionPress = (optionTitle: string) => {
        if (selectedToggleOptions.includes(optionTitle)) {
            setSelectedToggleOptions(prev => prev.filter(title => title !== optionTitle));
        } else {
            setSelectedToggleOptions(prev => [...prev, optionTitle]);
        }
    };
    const handleClearSelectedOptions = () => {
        setSelectedToggleOptions([]);
    };

    useEffect(() => {
        setFilteredOptions(
            options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase())),
        );
    }, [inputValue]);

    return (
        <View style={styles.container}>
            <Input
                ref={inputRef}
                {...restProps}
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    setInputLayout(layout);
                }}
                value={`${inputValue}${
                    inputValue && selectedToggleOptions.length ? ", " : ""
                }${selectedToggleOptions.join(", ")}`}
                label={label}
                placeholder={placeholder}
                onChange={text => {
                    setInputValue(text);
                    if (onChange) onChange(text);
                    setIsOptionsVisible(true);
                }}
                onFocus={handleMenuOpen}
                onBlur={() => setTimeout(() => setIsOptionsVisible(false), 150)}
                rightAdornments={
                    <View style={styles.adornmentContainer}>
                        {/* {selectedToggleOptions.length > 0 && (
                            <IconButton
                                name="close"
                                variant="ghost"
                                iconSize={18}
                                onPress={handleClearSelectedOptions}
                            />
                        )} */}

                        {inputValue ? (
                            <IconButton
                                name="close"
                                variant="ghost"
                                iconSize={18}
                                onPress={handleClearText}
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
                        {toggleOptions
                            ? toggleOptions.map(option => (
                                  <Menu.Item
                                      key={option.title}
                                      title={option.title}
                                      active={option.active}
                                      closeMenuOnClick={false}
                                      iconName={option.iconName}
                                      onPress={() => {
                                          handleToggleOptionPress(option.title);
                                          option.onPress();
                                      }}
                                  />
                              ))
                            : filteredOptions.map((option, index) => (
                                  <Menu.Item
                                      key={index}
                                      title={option}
                                      onPress={() => {
                                          setInputValue(option);
                                          onSelect(option);
                                          setIsOptionsVisible(false);
                                      }}
                                  />
                              ))}
                    </ScrollView>

                    {/* <FlatList
                        data={filteredOptions}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => {
                                    setInputValue(item);
                                    onSelect(item);
                                    setIsOptionsVisible(false);
                                }}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    /> */}
                </Menu>
            )}
        </View>
    );
};

const themedStyles = EDSStyleSheet.create(
    (theme, { inputLayout }: { inputLayout?: LayoutRectangle }) => ({
        container: {
            // styles for the container of the component
        },
        option: {
            padding: 15,
            borderColor: theme.colors.text.tertiary,
        },
        optionText: {
            color: theme.colors.text.primary,
            ...theme.typography.basic.input,
            fontSize: 18,
        },
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
