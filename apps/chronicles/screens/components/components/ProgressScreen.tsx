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
                <Button title="Run successfull progress" onPress={onUploadSuccess} />
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
    const { tasks, startUploadSimulation, handleCopyErrorDetails, handleRetry } =
        useProgressUpload();
    const styles = useStyles(themeStyles);

    const handleUploadSuccess = async () => {
        console.log("handleUploadSuccess");
        await startUploadSimulation("success");
    };

    const handleUploadFailed = async () => {
        console.log("handleUploadFailed");
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
            <UploadSimulator
                onUploadSuccess={handleUploadSuccess}
                onUploadFailed={handleUploadFailed}
            />
            <Spacer amount="medium" />
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
            <Typography>Tasks have different statuses based on their progress.</Typography>
            <Typography> The status can be:</Typography>
            <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                <Typography color="primary">inProgress</Typography>
                <CircularProgress size={18} value={0.7} />
                <Typography color="textTertiary">, notStarted, </Typography>
                <Typography color="success">sucess</Typography>
                <Typography>or</Typography>
                <Typography color="danger">error</Typography>
            </View>
            <Spacer amount="small" />
            <Typography>Progress with multiple tasks: </Typography>
            <Spacer amount="small" />
            <Progress title="Upload cat images">
                <Progress.Item
                    title="Upload images of cats with hats"
                    description="uploading cats with hats"
                    tasks={tasks}
                    onCopyTextButtonPress={handleCopyErrorDetails}
                    onRetryButtonPress={handleRetry}
                />
            </Progress>
            <Spacer />
            <Typography>You can also add multiple different tasks to one progress.</Typography>
            <Typography>Progress with multiple tasks: </Typography>
            <Spacer amount="small" />
            <Progress title="Multiple upload tasks">
                <Progress.Item title="Preparing cat hats" status="success" />
                <Progress.Item title="Training cats to wear hats" status="inProgress" />
                <Progress.Item title="Cats refusing to wear hats" status="error" />
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
