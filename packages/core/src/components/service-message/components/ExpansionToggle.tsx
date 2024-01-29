import React from "react";
import { Icon, EDSStyleSheet, useStyles } from "@equinor/mad-components";

type ExpansionToggleProps = { isExpanded: boolean };
export const ExpansionToggle = ({ isExpanded }: ExpansionToggleProps) => {
    const styles = useStyles(theme);
    const icon = isExpanded ? "menu-up" : "menu-down";
    return <Icon name={icon} style={styles.icon} size={24} />;
};

const theme = EDSStyleSheet.create(themeStyles => ({
    icon: {
        color: themeStyles.colors.text.feedbackWarning,
        marginTop: 12,
    },
}));
