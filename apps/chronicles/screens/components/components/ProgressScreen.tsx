import React from "react";
import {
    Button,
    EDSStyleSheet,
    Progress,
    Spacer,
    useStyles,
    Typography,
    CircularProgress,
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";
import { useProgressUpload } from "../../../hooks/useProgressUpload";

type UploadSimulatorProps = {
    onUploadSuccess: () => void;
    onUploadFailed: () => void;
};

const UploadSimulator = ({ onUploadSuccess, onUploadFailed }: UploadSimulatorProps) => {
    const styles = useStyles(themeStyles);

    return (
        <View style={styles.uploadSimulatorContainer}>
            <Typography group="basic" variant="h5">
                Upload Simulator
            </Typography>
            <Typography>Press the buttons below to simulate the progress component</Typography>
            <View style={styles.simulateButtonContainer}>
                <Button title="Run successfull progress" onPress={onUploadSuccess} />
                <Button title="Run failed progress" onPress={onUploadFailed} />
            </View>
        </View>
    );
};

export const ProgressScreen = () => {
    const {
        tasks: catTasks,
        startUploadSimulation: startCatUpload,
        handleRetry: handleRetryCatUpload,
    } = useProgressUpload("cat");

    const { tasks: dogTasks, startUploadSimulation: startDogUpload } = useProgressUpload("dog");

    const styles = useStyles(themeStyles);

    const handleUploadSuccess = () => {
        void startCatUpload("success");
        void startDogUpload("success");
    };

    const handleUploadFailed = () => {
        void startCatUpload("fail");
        void startDogUpload("fail");
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.textContainer}>
                <Typography group="basic" variant="h2">
                    Progress
                </Typography>

                <Typography>
                    The Progress component can be used for tracking and displaying the progress of
                    tasks or processes, such as «create folder» or «upload images».
                </Typography>
                <Typography>
                    Progress can be used with one or multiple Progress Items, and one Progress Item
                    can contain one single task or multiple tasks.
                </Typography>
            </View>

            <Spacer amount="small" />

            <View style={styles.textContainer}>
                <Typography>
                    Tasks have different statuses that is based on the overall progress.
                </Typography>
                <Typography> Status can either be:</Typography>
                <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                    <Typography color="primary">inProgress</Typography>
                    <CircularProgress size={18} value={0.7} />
                    <Typography color="textTertiary">, notStarted, </Typography>
                    <Typography color="success">sucess</Typography>
                    <Typography>or</Typography>
                    <Typography color="danger">error</Typography>
                </View>
            </View>

            <Spacer amount="small" />

            <View style={styles.textContainer}>
                <UploadSimulator
                    onUploadSuccess={() => void handleUploadSuccess()}
                    onUploadFailed={() => void handleUploadFailed()}
                />
            </View>

            <Spacer />

            <View style={styles.textContainer}>
                <Typography>Progress with one single task: </Typography>
            </View>

            <Spacer amount="small" />
            <Progress title="Create folder">
                <Progress.Item
                    title="Creating cat images folder"
                    description="This folder contains cat images"
                    status="success"
                />
            </Progress>

            <Spacer />

            <View style={styles.textContainer}>
                <Typography>
                    If some of the tasks fail, you can either retry uploading the task or copy the
                    error message.
                </Typography>
                <Typography>
                    The retry button can be shown on the specific task item that failed or at the
                    bottom of the Progress.Item.
                </Typography>
                <Spacer amount="small" />
                <Typography>Progress with multiple tasks: </Typography>
            </View>

            <Spacer amount="small" />

            <Progress title="Upload animal images">
                <Progress.Item
                    title="Upload images of cats"
                    description="uploading cats with hats"
                    tasks={catTasks}
                    onRetryButtonPress={() => void handleRetryCatUpload()}
                />
                <Progress.Item
                    title="Upload images of dogs throwing logs"
                    description="uploading dogs throwing logs"
                    tasks={dogTasks}
                />
            </Progress>

            <Spacer />

            <View style={styles.textContainer}>
                <Typography>Progress with multiple progress items:</Typography>
            </View>

            <Spacer amount="small" />

            <Progress title="Multiple progress items">
                <Progress.Item title="Preparing cat hats" status="notStarted" />
                <Progress.Item title="Training cats to wear hats" status="inProgress" />
                <Progress.Item title="Cats refusing to wear hats" status="error" />
                <Progress.Item
                    title="Terminate all cats that refuse to wear hats"
                    status="removed"
                />
                <Progress.Item
                    title="Uploading images of cats with hats"
                    description="uploading cats with hats"
                    status="success"
                />
            </Progress>
            <Spacer />
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
    uploadSimulatorContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    simulateButtonContainer: {
        flexDirection: "row",
        gap: theme.spacing.spacer.small,
    },
}));
