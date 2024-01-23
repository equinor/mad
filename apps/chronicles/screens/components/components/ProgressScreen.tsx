import React from "react";
import {
    Button,
    EDSStyleSheet,
    Progress,
    Spacer,
    useStyles,
    Typography,
    ProgressTask,
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";
import { useProgressUpload } from "../../../hooks/useProgressUpload";

type UploadSimulatorProps = {
    onUploadSuccess: () => void;
    onUploadFailed: () => void;
    onMultipleUploads: () => void;
};

const UploadSimulator = ({
    onUploadSuccess,
    onUploadFailed,
    onMultipleUploads,
}: UploadSimulatorProps) => {
    const styles = useStyles(themeStyles);

    return (
        <View style={styles.uploadSimulatorContainer}>
            <Typography group="basic" variant="h5">
                Upload Simulator
            </Typography>
            <Typography>Press the button below to simulate the uploading process</Typography>
            <View style={styles.simulateButtonContainer}>
                <Button title="Simulate a successfull task" onPress={onUploadSuccess} />
                <Button title="Simulate a failed task" onPress={onUploadFailed} />
                <Button title="Simulate multiple tasks" onPress={onMultipleUploads} />
            </View>
        </View>
    );
};

export const ProgressScreen = () => {
    const styles = useStyles(themeStyles);

    const taskSet1: ProgressTask[] = [
        { title: "Uploading cat with hat.jpg", status: "notStarted" },
        { title: "Uploading cat with hat 2.jpg", status: "notStarted" },
        { title: "Uploading cat with hat 3.jpg", status: "notStarted" },
        { title: "Uploading cat with hat 4.jpg", status: "notStarted" },
        { title: "Uploading cat with hat 5.jpg", status: "notStarted" },
    ];

    const taskSet2: ProgressTask[] = [
        { title: "Uploading dog carrying logs 1.jpg", status: "notStarted" },
        { title: "Uploading dog carrying logs 2.jpg", status: "notStarted" },
        { title: "Uploading dog carrying logs 3.jpg", status: "notStarted" },
        { title: "Uploading dog carrying logs 4.jpg", status: "notStarted" },
        { title: "Uploading dog carrying logs 5.jpg", status: "notStarted" },
    ];

    const { tasks: catTasks, startUpload: startCatUpload } = useProgressUpload(taskSet1);
    const { tasks: dogTasks, startUpload: startDogUpload } = useProgressUpload(taskSet2);
    const { tasks: multiCatTasks, startUpload: startMultiCatUpload } = useProgressUpload(taskSet1);
    const { tasks: multiDogTasks, startUpload: startMultiDogUpload } = useProgressUpload(taskSet2);

    const startMultipleUploads = async () => {
        await startMultiCatUpload();
        await startMultiDogUpload(true);
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <UploadSimulator
                onUploadSuccess={startCatUpload}
                onUploadFailed={() => startDogUpload(true)}
                onMultipleUploads={startMultipleUploads}
            />

            <Spacer amount="medium" />

            <Progress title="Detect images of cats and dogs">
                <Progress.Item
                    title="Detect images of cats and dogs"
                    description="Uploading cats with hats"
                    status="success"
                />
            </Progress>
            <Spacer />

            <Progress title="Cat image upload tasks">
                <Progress.Item
                    title="Upload cat images"
                    /* TODO: add description */
                    description="Uploading cats with hats"
                    tasks={catTasks}
                />
            </Progress>
            <Spacer />
            <Progress title="Dog image upload tasks">
                <Progress.Item
                    title="Upload Dog Images"
                    description="Uploading dogs carrying logs images"
                    tasks={dogTasks}
                    onRetryButtonPress={() => startDogUpload(true)}
                />
            </Progress>
            <Spacer />
            <Progress title="Multiple upload tasks">
                <Progress.Item
                    title="Upload cat images"
                    description="Uploading cats with hats images"
                    tasks={multiCatTasks}
                />
                <Progress.Item
                    title="Upload dog images"
                    description="Uploading dogs carrying logs images"
                    tasks={multiDogTasks}
                    onRetryButtonPress={() => startMultiDogUpload(true)}
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

// import React from "react";
// import { EDSStyleSheet, Progress, SubTaskProps, useStyles } from "@equinor/mad-components";
// import { ScrollView } from "react-native";

// export const ProgressScreen = () => {
//     const styles = useStyles(themeStyles);

//     const details =
//         " #5. Code: 0x000FF01AB. The process cannot access the file because it is being used by another process. Thread execution halted. System resources compromised. Immediate action required. Refer to documentation (Ref: E-1045). Possible configuration mismatch or external interference detected. Operation incomplete.";

//     const tasks: SubTaskProps[] = [
//         { title: "Uploading image 1", status: "success" },
//         { title: "Uploading image 2", status: "success" },
//         { title: "Uploading image 3", status: "error", details: details },
//         { title: "Uploading image 4", status: "inProgress" },
//     ];

//     const moreTasks: SubTaskProps[] = [
//         { title: "Uploading image 1", status: "success" },
//         { title: "Uploading image 2", status: "success" },
//         { title: "Uploading image 3", status: "success" },
//     ];
//     const evenMoreTasks: SubTaskProps[] = [{ title: "Uploading image 1", status: "notStarted" }];

//     return (
//         <ScrollView
//             contentInsetAdjustmentBehavior="automatic"
//             contentContainerStyle={styles.contentContainer}
//         >
//             <Progress title="Tasks">
//                 <Progress.Task title="Task 1" description="description 1" subTasks={tasks} />
//                 <Progress.Task title="Task 2" description="description 2" subTasks={moreTasks} />
//                 <Progress.Task
//                     title="Task 2"
//                     description="description 2"
//                     subTasks={evenMoreTasks}
//                 />
//             </Progress>
//         </ScrollView>
//     );
// };
