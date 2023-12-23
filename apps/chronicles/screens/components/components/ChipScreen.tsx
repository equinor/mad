import React from "react";
import { Chip, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ChipScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.textContainer}>
                <Typography>
                    Chips, also known as tags or badges, are advanced badges that represent discrete
                    information.
                </Typography>
            </View>
            <View style={styles.chipRow}>
                <Chip title="Normal" />
                <Chip title="Active" variant="active" />
                <Chip title="Error" variant="error" />
                <Chip title="Disabled" disabled />
            </View>
            <Spacer />
            <View style={styles.textContainer}>
                <Typography>The chips can be configured to respond to touch: </Typography>
            </View>
            <View style={styles.chipRow}>
                <Chip title="Tapable" onPress={() => null} />
                <Chip title="Tapable" onPress={() => null} variant="active" />
                <Chip title="Tapable" onPress={() => null} variant="error" />
                <Chip title="Tapable" onPress={() => null} disabled />
            </View>
            <Spacer />
            <View style={styles.textContainer}>
                <Typography>They can also be configured to be deletable:</Typography>
            </View>
            <View style={styles.chipRow}>
                <Chip title="Deletable" onDelete={() => null} />
                <Chip title="Deletable" onDelete={() => null} variant="active" />
                <Chip title="Deletable" onDelete={() => null} variant="error" />
                <Chip title="Deletable" onDelete={() => null} disabled />
            </View>
            <Spacer />
            <View style={styles.textContainer}>
                <Typography>Or both</Typography>
            </View>
            <View style={styles.chipRow}>
                <Chip title="Tapable + deletable" onDelete={() => null} onPress={() => null} />
                <Chip
                    title="Tapable + deletable"
                    onDelete={() => null}
                    onPress={() => null}
                    variant="active"
                />
                <Chip
                    title="Tapable + deletable"
                    onDelete={() => null}
                    onPress={() => null}
                    variant="error"
                />
                <Chip
                    title="Tapable + deletable"
                    onDelete={() => null}
                    onPress={() => null}
                    disabled
                />
            </View>
            <Spacer />
            <View style={styles.textContainer}>
                <Typography>They also support icons!</Typography>
            </View>
            <View style={styles.chipRow}>
                <Chip
                    title="With icon"
                    onDelete={() => null}
                    onPress={() => null}
                    iconName="hoop-house"
                />
                <Chip
                    title="With icon"
                    onDelete={() => null}
                    onPress={() => null}
                    iconName="home"
                    variant="active"
                />
                <Chip
                    title="With icon"
                    onDelete={() => null}
                    onPress={() => null}
                    iconName="sun-snowflake"
                    variant="error"
                />
                <Chip
                    title="With icon"
                    onDelete={() => null}
                    onPress={() => null}
                    iconName="cash"
                    disabled
                />
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    textContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    chipRow: {
        backgroundColor: theme.colors.container.default,
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 16,
    },
}));
