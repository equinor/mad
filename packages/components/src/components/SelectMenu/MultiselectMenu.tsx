import React, { useCallback, useRef, useState } from "react";
import { SelectMenuItem } from "./types";
import { LayoutRectangle, Pressable, ScrollView, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Icon } from "../Icon";
import { Menu } from "../Menu";
import { Typography } from "../Typography";
import { selectMenuStyles } from "./selectMenuStyles";

type MultiSelectMenuProps<T> = {
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
     * An array of selected items.
     */
    selectedItems: T[];
    /**
     * Callback function called when items are selected or deselected.
     */
    onSelect: (value: T[]) => void;
};

export const MultiselectMenu = <T,>({
    items,
    selectedItems = [],
    placeholder = "Select an option",
    disabled,
    onSelect,
}: MultiSelectMenuProps<T>) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuLayout, setMenuLayout] = useState<LayoutRectangle | undefined>();

    const triggerRef = useRef<View | null>(null);
    const styles = useStyles(selectMenuStyles, {
        menuOpen,
        disabled: disabled ?? false,
    });

    const textColor = selectedItems.length > 0 ? "textPrimary" : "textTertiary";
    const selectedItemTitle =
        selectedItems
            .map(selectedItem => items.find(item => item.value === selectedItem)?.title ?? "")
            .join(", ") || placeholder;

    const handleSelect = useCallback(
        (value: T) => {
            const newSelection = selectedItems.includes(value)
                ? selectedItems.filter(item => item !== value)
                : [...selectedItems, value];
            onSelect(newSelection);
        },
        [onSelect, selectedItems],
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
                <Typography color={textColor}>{selectedItemTitle}</Typography>
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
                    {items.map(item => (
                        <Menu.Item
                            key={item.value as string}
                            onPress={() => handleSelect(item.value)}
                            title={item.title}
                            iconName={
                                selectedItems.includes(item.value)
                                    ? "checkbox-marked"
                                    : "checkbox-blank-outline"
                            }
                            active={selectedItems.includes(item.value)}
                            closeMenuOnClick={false}
                        />
                    ))}
                </ScrollView>
            </Menu>
        </View>
    );
};

MultiselectMenu.displayName = "SelectMenu.Multiselect";
