import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { Cell } from "./Cell";
import { Typography } from "../Typography";

export type NavigationCellProps = {
    title: string,
    onPress: () => void;
    description?: string,
    iconName?: IconName
};

export const NavigationCell = ({
    title,
    onPress,
    description,
    iconName,
}: NavigationCellProps) => {
    const styles = useStyles(themeStyles);

    const IconAdornment = () => (
        <View style={styles.iconContainer}>
            <Icon name={iconName!} />
        </View>
    );

    const DisclosureAdornment = () => (
        <View style={styles.disclosureContainer}>
            <Icon name="chevron-right" color="textTertiary" />
        </View>
    );

    return (
        <Cell
            leftAdornment={iconName ? IconAdornment() : undefined}
            rightAdornment={DisclosureAdornment()}
            onPress={onPress}>
            <View style={styles.contentContainer}>
                <Typography
                    group="cell"
                    variant="title"
                    numberOfLines={1}>
                    {title}
                </Typography>
                {description && <Typography
                    group="cell"
                    variant="description"
                    color="textTertiary"
                    numberOfLines={2}>
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
        height: theme.geometry.dimension.cell.navigation.height

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