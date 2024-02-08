// selectMenuStyles.ts
import { EDSStyleSheet } from "../../styling";

export const selectMenuStyles = EDSStyleSheet.create((theme, props: { menuOpen: boolean }) => {
    const { menuOpen } = props;

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
            borderBottomColor: menuOpen
                ? theme.colors.interactive.primary
                : theme.colors.text.tertiary,
        },

        disabledContainer: {
            // Standard opacity for disabled elements
            opacity: 0.38,
            backgroundColor: theme.colors.interactive.disabled,
            pointerEvents: "none",
        },
    };
});
