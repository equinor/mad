import React from "react";
import {
    Paper,
    Typography,
    Elevation,
    useStyles,
    EDSStyleSheet,
    Spacer,
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const PaperScreen = () => {
    const style = useStyles(themeStyles);

    const PaperSquare = ({ elevation }: { elevation: Elevation }) => (
        <Paper
            elevation={elevation}
            style={{
                width: 100,
                height: 75,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography group="ui" variant="tooltip">
                {elevation}
            </Typography>
        </Paper>
    );

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={style.contentContainer}
        >
            <View style={style.textContentContainer}>
                <Typography>
                    A paper is a fundamental container with an elevation and a default
                    backgroundColor.{"\n"}
                    It is mainly used as a building block for other components in our library, so
                    perhaps you might need it for the same reasons as well.
                </Typography>
            </View>
            <Spacer />
            <View
                style={{
                    gap: 25,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: 10,
                }}
            >
                <PaperSquare elevation="none" />
                <PaperSquare elevation="raised" />
                <PaperSquare elevation="overlay" />
                <PaperSquare elevation="sticky" />
                <PaperSquare elevation="temporaryNav" />
                <PaperSquare elevation="aboveScrim" />
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        flex: 1,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    textContentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
