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

const UploadSimulator = ({ onUploadSuccess, onUploadFailed }: UploadSimulatorProps) => {
    const styles = useStyles(themeStyles);

    return (
        <View style={styles.uploadSimulatorContainer}>
            <Typography group="basic" variant="h5">
                Upload Simulator
            </Typography>
            <Typography>Press the buttons below to simulate the progress component</Typography>
            <View style={styles.simulateButtonContainer}>
                <Button
                    title="Run successfull progress"
                    onPress={() => {
                        onUploadSuccess();
                    }}
                />
                <Button title="Run failed progress" onPress={onUploadFailed} />
            </View>
        </View>
    );
};

type UploadSimulatorProps = {
    onUploadSuccess: () => void;
    onUploadFailed: () => void;
};

export const ProgressScreen = () => {
    const { tasks, startUploadSimulation, handleCopyErrorMessage, handleRetry } =
        useProgressUpload();
    const styles = useStyles(themeStyles);

    const handleUploadSuccess = async () => {
        await startUploadSimulation("success");
    };

    const handleUploadFailed = async () => {
        await startUploadSimulation("fail");
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography group="basic" variant="h2">
                Progress
            </Typography>
            <Typography>
                The Progress component can be used for tracking and displaying the progress of tasks
                or processes, such as «create folder or «upload images».
            </Typography>
            <Spacer amount="small" />
            <Typography>Tasks have different statuses based on their overall progress.</Typography>
            <Typography> Status can either be:</Typography>
            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                <Typography color="primary">inProgress</Typography>
                <CircularProgress size={18} value={0.7} />
                <Typography color="textTertiary">, notStarted, </Typography>
                <Typography color="success">sucess</Typography>
                <Typography>or</Typography>
                <Typography color="danger">error</Typography>
            </View>
            <Spacer amount="small" />
            <UploadSimulator
                onUploadSuccess={handleUploadSuccess}
                onUploadFailed={handleUploadFailed}
            />

            <Spacer />

            <Typography>Progress with one single task: </Typography>
            <Spacer amount="small" />
            <Progress title="Create folder">
                <Progress.Item
                    title="Creating a folder"
                    description="This folder contains cat images"
                    status="success"
                />
            </Progress>

            <Spacer />

            <Typography>Progress with multiple tasks: </Typography>
            <Spacer amount="small" />
            <Progress title="Upload cat images">
                <Progress.Item
                    title="Upload images of cats with hats"
                    description="uploading cats with hats"
                    tasks={tasks}
                    onCopyTextButtonPress={handleCopyErrorMessage}
                    onRetryButtonPress={handleRetry}
                />
            </Progress>

            <Spacer />

            <Typography>You can also add multiple different tasks to a progress.</Typography>
            <Typography>Progress with multiple tasks: </Typography>
            <Spacer amount="small" />
            <Progress title="Multiple upload tasks">
                <Progress.Item title="Preparing cat hats" status="success" />
                <Progress.Item title="Training cats to wear hats" status="inProgress" />
                <Progress.Item
                    title="Cats refusing to wear hats"
                    status="error"
                    showRetryButton={false}
                />
                <Progress.Item
                    title="Uploading images of cats with hats"
                    description="uploading cats with hats"
                    status="notStarted"
                />
            </Progress>
            <Spacer />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
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
