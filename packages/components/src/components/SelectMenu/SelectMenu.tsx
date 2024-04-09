import React, { useCallback, useRef, useState } from "react";
import { LayoutRectangle, Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Icon } from "../Icon";
import { Menu } from "../Menu";
import { Typography } from "../Typography";
import { SelectMenuItem } from "./types";
import { selectMenuStyles } from "./selectMenuStyles";
import { ScrollView } from "react-native-gesture-handler";

export type SelectMenuProps<T> = {
    /**
     * Array of menu item options from which the user can select.
     */
    items: SelectMenuItem<T>[];
    /**
     * Placeholder text displayed when no item is selected.
     */
    placeholder?: string;
    /**
     * Placeholder text displayed when no item is selected.
     */
    disabled?: boolean;
    /**
     * The currently selected item, or undefined if nothing is selected.
     */
    selectedItem: T | undefined;

    /**
     * Callback function called when an item is selected or deselected.
     */
    onSelect: (value: T | undefined) => void;
};

export const SelectMenu = <T,>({
    items,
    selectedItem,
    placeholder = "Select an option",
    disabled,
    onSelect,
}: SelectMenuProps<T>) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuLayout, setMenuLayout] = useState<LayoutRectangle | undefined>();

    const triggerRef = useRef<View | null>(null);
    const styles = useStyles(selectMenuStyles, {
        menuOpen,
        disabled: disabled ?? false,
    });

    const textColor = selectedItem ? "textPrimary" : "textTertiary";
    const selectedItemTitle = selectedItem
        ? items.find(item => item.value === selectedItem)?.title ?? placeholder
        : placeholder;

    const handleSelect = useCallback(
        (value: T) => {
            const newValue = selectedItem === value ? undefined : value;
            onSelect(newValue);
        },
        [onSelect, selectedItem],
    );

    const toggleMenuOpen = () => {
        if (!disabled) {
            setMenuOpen(!menuOpen);
        }
    };

    return (
        <View>
            <Pressable
                style={[styles.contentContainer, disabled && styles.disabledContainer]}
                ref={triggerRef}
                onPress={toggleMenuOpen}
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    setMenuLayout(layout);
                }}
            >
                <Typography color={disabled ? "textDisabled" : textColor}>
                    {selectedItemTitle}
                </Typography>
                <Icon
                    color={disabled ? "textDisabled" : "textPrimary"}
                    name={menuOpen ? "menu-up" : "menu-down"}
                />
            </Pressable>
            <Menu
                key={`menu-${menuLayout?.height}`}
                anchorEl={triggerRef}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                placement="bottom-start"
                style={{
                    width: menuLayout?.width,
                    marginTop: -8,
                    marginBottom: -8,
                    maxHeight: 300,
                }}
            >
                <ScrollView>
                    {items.map(item => {
                        return (
                            <Menu.Item
                                key={item.value as string}
                                onPress={() => handleSelect(item.value)}
                                title={item.title}
                                iconName={item.icon}
                                active={selectedItem === item.value}
                            />
                        );
                    })}
                </ScrollView>
            </Menu>
        </View>
    );
};
