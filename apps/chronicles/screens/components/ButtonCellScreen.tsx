import React from "react";
import { Cell, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ButtonCellScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    The button cell is a pressable cell with a predefined layout. {"\n"}
                    In its most basic form, it looks pretty boring...
                </Typography>
            </View>
            <Spacer />
            <Cell.Button title="I'll take you anywhere!" onPress={() => null} />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    ...but you may style it with a description, a color and an icon...
                </Typography>
            </View>
            <Spacer />
            <Cell.Button
                title="This is a destructive button!"
                description="And it is defined with a danger color"
                onPress={() => null}
                color="danger"
                iconName="close"
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    ...there are different colors depending on your situation...
                </Typography>
            </View>
            <Spacer />
            <Cell.Button
                title="You may not enter here, this is a warning!"
                iconName="hazard-lights"
                onPress={() => null}
                color="warning"
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>...and the cell button can also be disabled.</Typography>
            </View>
            <Spacer />
            <Cell.Button
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus purus, tristique quis magna sed, vehicula varius eros. Quisque volutpat in lacus in venenatis"
                iconName="stop-circle-outline"
                onPress={() => null}
                disabled
            />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
