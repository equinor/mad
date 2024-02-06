import React, { useRef, useState } from "react";
import { LayoutRectangle, Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { Menu } from "../Menu";
import { Typography } from "../Typography";

export type SelectMenuItem<T> = {
    title: string;
    value: T;
    icon?: IconName;
};

export type SelectMenuProps<T> = {
    items: SelectMenuItem<T>[];
    value?: T | T[];
    placeHolder?: string;
    multiSelect?: boolean;
    onSelect: (value: T | T[]) => void;
};

export const SelectMenu = <T,>({
    items,
    value,
    placeHolder = "Select an option",
    multiSelect = false,
    onSelect,
}: SelectMenuProps<T>) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuLayout, setMenuLayout] = useState<LayoutRectangle | undefined>();

    const triggerRef = useRef<View | null>(null);
    const styles = useStyles(themedStyles, { menuOpen });

    const selectedValues = Array.isArray(value) ? value : value === undefined ? [] : [value];
    const selectedTitles = items
        .filter(item => selectedValues.includes(item.value))
        .map(item => item.title);

    const displayText = selectedTitles.length > 0 ? selectedTitles.join(", ") : placeHolder;
    const textColor = selectedTitles.length > 0 ? "textPrimary" : "textTertiary";

    const handleSelect = (selectedValue: T) => {
        if (multiSelect) {
            const newSelection = selectedValues.includes(selectedValue)
                ? selectedValues.filter(item => item !== selectedValue)
                : [...selectedValues, selectedValue];
            onSelect(newSelection);
        } else {
            onSelect(selectedValue);
        }
    };

    const expandMenuPress = () => {
        setMenuOpen(!menuOpen);
    };

    const renderMenuItem = () => {
        return items.map(item => {
            const isSelected = multiSelect
                ? selectedValues.includes(item.value)
                : item.value === value;

            const iconName = multiSelect
                ? isSelected
                    ? "checkbox-marked"
                    : "checkbox-blank-outline"
                : item.icon;

            const handlePress = () => {
                handleSelect(item.value);
            };

            return (
                <Menu.Item
                    key={item.title}
                    onPress={handlePress}
                    title={item.title}
                    iconName={iconName}
                    active={isSelected}
                    closeMenuOnClick={!multiSelect}
                />
            );
        });
    };

    return (
        <View>
            <Pressable
                style={styles.contentContainer}
                ref={triggerRef}
                onPress={expandMenuPress}
                onLayout={event => {
                    const layout = event.nativeEvent.layout;
                    setMenuLayout(layout);
                }}
            >
                <Typography color={textColor}>{displayText}</Typography>
                <Icon name={menuOpen ? "chevron-up" : "chevron-down"} />
            </Pressable>
            <Menu
                anchorEl={triggerRef}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                placement="bottom-start"
                style={{ width: menuLayout?.width, marginTop: -8 }}
            >
                {renderMenuItem()}
            </Menu>
        </View>
    );
};

const themedStyles = EDSStyleSheet.create((theme, props: { menuOpen: boolean }) => {
    const { menuOpen } = props;

    return {
        contentContainer: {
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",

            backgroundColor: menuOpen
                ? theme.colors.interactive.selectedHighlight
                : theme.colors.container.background,
            paddingVertical: theme.spacing.textField.paddingVertical,
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,

            borderColor: menuOpen ? theme.colors.interactive.primary : "transparent",
            borderWidth: theme.geometry.border.focusedBorderWidth,
            borderBottomColor: menuOpen
                ? theme.colors.interactive.primary
                : theme.colors.text.tertiary,
        },
    };
});
