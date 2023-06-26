import { useStyles } from "../../hooks/useStyles";
import { EDSColor, EDSStyleSheet } from "../../styling";
import { CellSwipeItemProps } from "./types";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { PressableHighlight } from "../PressableHighlight";

export const CellSwipeItem = ({
    title,
    iconName,
    color,
    onPress,
}: CellSwipeItemProps) => {
    const styles = useStyles(themeStyles, { color });

    return (
        <PressableHighlight
            style={styles.container}
            onPress={onPress}>
            {iconName && <Icon name={iconName} style={styles.textStyle} size={title ? undefined : 22} />}
            {title && <Typography group="interactive" variant="button">{title}</Typography>}
        </PressableHighlight>
    );
}

const themeStyles = EDSStyleSheet.create((theme, props: { color?: EDSColor }) => ({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing.button.iconGap,
        backgroundColor: props.color ? theme.colors.interactive[props.color] : theme.colors.interactive.primary,
    },
    textStyle: {
        color: theme.colors.text.primaryInverted,
    }
}));