import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { Cell, CellProps } from "./Cell";
import { Typography } from "../Typography";

export type NavigationCellProps = {
    /**
     * Title of the navigation cell.
     */
    title: string;
    /**
     * The description field of the navigation cell. This will be shown under the title.
     */
    description?: string;
    /**
     * Callback method invoked when a user presses the cell.
     * Leaving this `undefined` causes the cell to not respond to touch or hover events.
     */
    onPress?: () => void;
    /**
     * A boolean value indicating whether or not the cell should be disabled or not.
     * This value affects the visual appearance of the cell and also makes it not respond to presses.
     */
    disabled?: boolean;
    /**
     * Name of the icon to use as a left adornment.
     */
    iconName?: IconName;
    additionalTitles?: {
        title: string;
    }[];
} & Omit<CellProps, "leftAdornment" | "rightAdornment" | "onPress">;

export const NavigationCell = ({
    title,
    onPress,
    disabled = false,
    description,
    iconName,
    additionalTitles,
    ...cellProps
}: NavigationCellProps) => {
    const styles = useStyles(themeStyles);

    const IconAdornment = () => (
        <View style={styles.adornmentContainer}>
            <Icon name={iconName ?? "dots-square"} color={disabled ? "textDisabled" : undefined} />
        </View>
    );

    const DisclosureAdornment = () => (
        <View style={styles.adornmentContainer}>
            <Icon name="chevron-right" color={disabled ? "textDisabled" : undefined} />
        </View>
    );

    return (
        <Cell
            leftAdornment={iconName ? IconAdornment() : undefined}
            rightAdornment={DisclosureAdornment()}
            onPress={disabled ? undefined : onPress}
            {...cellProps}
        >
            <View style={styles.contentContainer}>
                <View style={styles.singleCellContainer}>
                    <Typography
                        group="cell"
                        variant="title"
                        numberOfLines={1}
                        color={disabled ? "textDisabled" : undefined}
                    >
                        {title}
                    </Typography>
                    {description && (
                        <Typography
                            group="cell"
                            variant="description"
                            numberOfLines={2}
                            color={disabled ? "textDisabled" : "textTertiary"}
                        >
                            {description}
                        </Typography>
                    )}
                </View>
                {title &&
                    additionalTitles?.map((text, index) => (
                        <Typography
                            style={{ justifyContent: "flex-start" }}
                            key={index}
                            group="cell"
                            variant="title"
                            numberOfLines={1}
                            color="textTertiary"
                        >
                            {text.title}
                        </Typography>
                    ))}
            </View>
        </Cell>
    );
};

NavigationCell.displayName = "Cell.Navigation";

const themeStyles = EDSStyleSheet.create(theme => ({
    singleCellContainer: {
        justifyContent: "center",
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    adornmentContainer: {
        justifyContent: "center",
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
}));
