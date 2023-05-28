import { EDSStyleSheet, CircularProgress, useStyles, Button, Spacer, Typography } from "@equinor/mad-components";
import { useState } from "react";
import { ScrollView, View } from "react-native";


export const ProgressIndicatorScreen = () => {
    const styles = useStyles(themeStyles);
    const [progress, setProgress] = useState<number>(0);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>
            <Typography>
                Indicators come in different shapes and sizes. There are 3 variants of progress indicators:
                <Typography bold italic> CirularProgress</Typography>,
                <Typography bold italic> LinearProgress</Typography> and
                <Typography bold italic> DotProgress</Typography>,
                each serving different needs.
            </Typography>
            <Spacer />
            <Typography variant="h2">CircularProgress</Typography>
            <Typography>
                The circular progress bar is categorized into determinate and indeterminate types,
                relating to whether or not it should progress from a value or not.
            </Typography>
            <Spacer />
            <Typography variant="h3">Determinate</Typography>
            <Spacer />
            <View style={styles.progressRow}>
                <CircularProgress size={100} value={progress} />
                <CircularProgress size={75} value={progress} />
                <CircularProgress size={50} value={progress} />
                <CircularProgress size={25} value={progress} />
            </View>
            <Spacer />
            <View style={styles.incrementButtonRow}>
                <Button
                    title="Increment"
                    iconName="plus-box"
                    onPress={() => setProgress(state => state + 0.1)}
                />
                <Button
                    title="Reset"
                    iconName="restore"
                    variant="outlined"
                    color="secondary"
                    onPress={() => setProgress(0)}
                />
            </View>
            <Spacer />
            <Typography variant="h3">Indeterminate</Typography>
            <Spacer />
            <View style={styles.progressRow}>
                <CircularProgress size={100} />
                <CircularProgress size={75} />
                <CircularProgress size={50} />
                <CircularProgress size={25} />
            </View>
            <Spacer />
        </ScrollView >
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    progressRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
    },
    incrementButtonRow: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        columnGap: 10,
    }
}));
