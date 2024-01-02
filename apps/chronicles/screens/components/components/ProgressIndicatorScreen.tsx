import {
    EDSStyleSheet,
    CircularProgress,
    useStyles,
    Button,
    Spacer,
    Typography,
    LinearProgress,
    DotProgress,
} from "@equinor/mad-components";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

const CircularProgressSection = () => {
    const styles = useStyles(themeStyles);
    const [progress, setProgress] = useState<number>(0);
    return (
        <>
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
        </>
    );
};

const LinearProgressSection = () => {
    const styles = useStyles(themeStyles);
    const [progress, setProgress] = useState<number>(0);
    return (
        <>
            <Typography variant="h2">LinearProgress</Typography>
            <Typography>
                As with the circular progress, the linear progress bar also comes in both a
                determinate and an indeterminate form.
            </Typography>
            <Spacer />
            <Typography variant="h3">Determinate</Typography>
            <Spacer />
            <LinearProgress value={progress} />
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
            <LinearProgress value={undefined} />
        </>
    );
};

const DotProgressSection = () => {
    const styles = useStyles(themeStyles);
    return (
        <>
            <Typography variant="h2">DotProgress</Typography>
            <Typography>
                The dot progress indicator does not come in a determinate and indeterminate form,
                but it fits nicely into components like the button.
            </Typography>
            <Spacer />
            <View style={styles.dotsContainer}>
                <DotProgress size={50} />
            </View>
            <Spacer />
            <Typography>Different sizes</Typography>
            <Spacer />
            <View style={styles.dotsContainer}>
                <DotProgress size={40} />
                <DotProgress size={30} />
                <DotProgress size={20} />
            </View>
            <Spacer />
        </>
    );
};

export const ProgressIndicatorScreen = () => {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <CircularProgressSection />
            <Spacer amount="large" />
            <Spacer amount="large" />
            <LinearProgressSection />
            <Spacer amount="large" />
            <Spacer amount="large" />
            <DotProgressSection />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
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
    },
    dotsContainer: {
        rowGap: 10,
        alignItems: "center",
    },
}));
