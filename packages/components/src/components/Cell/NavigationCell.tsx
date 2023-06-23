import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { Cell } from "./Cell";
import { Typography } from "../Typography";

export type NavigationCellProps = {
    title: string,
    onPress?: () => void;
    disabled?: boolean;
    description?: string,
    iconName?: IconName,
};

export const NavigationCell = ({
    title,
    onPress,
    disabled = false,
    description,
    iconName,
}: NavigationCellProps) => {
    const styles = useStyles(themeStyles);

    const IconAdornment = () => (
        <View style={styles.iconContainer}>
            <Icon name={iconName!} color={disabled ? "textDisabled" : undefined} />
        </View>
    );

    const DisclosureAdornment = () => (
        <View style={styles.disclosureContainer}>
            <Icon name="chevron-right" color={disabled ? "textDisabled" : undefined} />
        </View>
    );

    return (
        <Cell
            leftAdornment={iconName ? IconAdornment() : undefined}
            rightAdornment={DisclosureAdornment()}
            onPress={disabled ? undefined : onPress}>
            <View style={styles.contentContainer}>
                <Typography
                    group="cell"
                    variant="title"
                    numberOfLines={1}
                    color={disabled ? "textDisabled" : undefined}
                >
                    {title}
                </Typography>
                {description && <Typography
                    group="cell"
                    variant="description"
                    numberOfLines={2}
                    color={disabled ? "textDisabled" : "textTertiary"}
                >
                    {description}
                </Typography>}
            </View>
        </Cell>
    );
};

NavigationCell.displayName = "Cell.Navigation";

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    disclosureContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
}));