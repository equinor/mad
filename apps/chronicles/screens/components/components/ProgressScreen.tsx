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
                <Typography>
                    The Progress component can be used for tracking and displaying the progress of
                    tasks or processes such as «create folder» or «upload images».
                </Typography>

                <Spacer />

                <Typography variant="h3">Progress and Progress.Item</Typography>

                <Spacer amount="small" />

                <Typography>
                    The root Progress component is a container for progress items. It automatically
                    separates the items with a separator. The progress items each describe a single
                    process, and are provided with a summarizing status prop to indicate its
                    progress:
                </Typography>
            </View>

            <Progress>
                <Progress.Item title="Waiting to be started" status="notStarted" />
                <Progress.Item title="Item in progress" status="inProgress" />
                <Progress.Item title="Errorneous item" status="error" />
                <Progress.Item title="Successful item" status="success" />
            </Progress>

            <Spacer />

            <View style={styles.textContainer}>
                <Typography variant="h3">Progress item tasks</Typography>
                <Spacer amount="small" />
                <Typography>
                    Each progress item can expand its progress into multiple tasks. This allows for
                    a flexible way to display a progress in multiple levels of granularity to users.
                    When tasks are provided to the progress item, it automatically calculates the
                    correct summarized status without having to explicitly provide this.
                </Typography>
            </View>

            <Progress>
                <Progress.Item
                    title="Performing tasks"
                    description={
                        "This is to the crazy ones, the misfits, the rebels and the troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules and they have no respect for the status quo."
                    }
                    tasks={[
                        {
                            title: "Task 1",
                            status: "success",
                        },
                        {
                            title: "Task 2",
                            status: "success",
                        },
                        {
                            title: "Task 3",
                            status: "error",
                        },
                        {
                            title: "Task with an icon",
                            status: "notStarted",
                            icon: "message-processing-outline",
                        },
                    ]}
                />
            </Progress>

            <Spacer />
            <View style={styles.simulatorContainer}>
                <View style={styles.textContainer}>
                    <UploadSimulator
                        onUploadSuccess={() => void handleUploadSuccess()}
                        onUploadFailed={() => void handleUploadFailed()}
                    />
                </View>

                <Spacer />

                <View style={styles.textContainer}>
                    <Typography>
                        If some of the tasks fail, you can either retry uploading the task or copy
                        the error message.
                    </Typography>
                    <Typography>
                        The retry button can be shown on the specific task item that failed or at
                        the bottom of the Progress.Item.
                    </Typography>
                    <Spacer amount="small" />
                    <Typography>Progress with multiple tasks: </Typography>
                </View>

                <Spacer amount="small" />

                <Progress>
                    <Progress.Item
                        title="Upload images of cats"
                        description={(completedTasks, totalTasks) =>
                            `Uploading cats with hats (${completedTasks}/${totalTasks})`
                        }
                        tasks={catTasks}
                        onRetryButtonPress={() => void handleRetryCatUpload()}
                    />
                    <Progress.Item
                        title="Upload images of dogs throwing logs"
                        description={(completedTasks, totalTasks) =>
                            `Uploading dogs throwing logs (${completedTasks}/${totalTasks})`
                        }
                        tasks={dogTasks}
                    />
                </Progress>
            </View>

            <Spacer />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    simulatorContainer: {
        borderColor: theme.colors.interactive.primary,
        borderWidth: theme.geometry.border.focusedBorderWidth,
        borderStyle: "dashed",
    },
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
