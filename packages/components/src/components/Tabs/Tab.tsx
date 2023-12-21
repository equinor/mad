import React, { PropsWithChildren, useContext } from "react";
import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Typography } from "../Typography";
import { PressableHighlight } from "../PressableHighlight";
import { TabsContext } from "./Tabs";
import { Icon, IconName } from "../Icon";

export type TabProps = PropsWithChildren & {
    title: string;
    iconName?: IconName;
    disabled?: boolean;
};

export const Tab = ({ title, disabled = false, iconName }: TabProps) => {
    const { onPressTab, isSelected } = useContext(TabsContext);
    const styles = useStyles(themeStyles, { isSelected, disabled });

    return (
        <PressableHighlight onPress={onPressTab} style={styles.pressableContainer}>
            <View style={styles.container}>
                {iconName && <Icon name={iconName} style={styles.text} />}
                <Typography style={styles.text} group="navigation" variant="menuTab">
                    {title}
                </Typography>
            </View>
        </PressableHighlight>
    );
};

type TabItemStyleProps = {
    disabled: boolean;
    isSelected: boolean;
};

const themeStyles = EDSStyleSheet.create((theme, props: TabItemStyleProps) => {
    const { isSelected, disabled } = props;

    const verticalPadding = theme.spacing.tabs.paddingVerical;
    const paddingTop = verticalPadding;
    const paddingBottom = verticalPadding - theme.geometry.border.tabsBorderWidth;

    const disabledColor = disabled ? theme.colors.text.disabled : undefined;
    const borderColor = isSelected ? theme.colors.interactive.primary : theme.colors.border.medium;

    return {
        pressableContainer: {
            flex: 1,
            backgroundColor: theme.colors.container.default,
        },
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop,
            paddingBottom,
            minWidth: theme.geometry.dimension.tabs.minWidth,
            paddingHorizontal: theme.spacing.tabs.paddingHorizontal,
            borderBottomWidth: theme.geometry.border.tabsBorderWidth,
            borderBottomColor: disabledColor ?? borderColor,
        },
        text: {
            color:
                disabledColor ?? isSelected
                    ? theme.colors.interactive.primary
                    : theme.colors.text.primary,
        },
    };
});
