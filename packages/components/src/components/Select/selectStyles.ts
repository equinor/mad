import { EDSStyleSheet } from "../../styling";

export const selectStyles = EDSStyleSheet.create(
    (theme, props: { menuOpen: boolean; disabled: boolean }) => {
        const { menuOpen, disabled } = props;

        const getBorderBottomColor = () => {
            if (menuOpen) {
                return theme.colors.interactive.primary;
            } else if (disabled) {
                return theme.colors.interactive.disabled;
            } else {
                return theme.colors.text.tertiary;
            }
        };

        return {
            contentContainer: {
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",

                backgroundColor: theme.colors.container.background,
                paddingVertical: theme.spacing.textField.paddingVertical,
                paddingHorizontal: theme.spacing.textField.paddingHorizontal,

                borderColor: menuOpen ? theme.colors.interactive.primary : "transparent",
                borderWidth: theme.geometry.border.focusedBorderWidth,
                borderBottomColor: getBorderBottomColor(),
            },

            disabledContainer: {
                backgroundColor: theme.colors.interactive.disabled,
                pointerEvents: "none",
            },
        };
    },
);
