import { ProgressStatus, ProgressTask, ProgressTaskError } from "@equinor/mad-components";
import { useState } from "react";
import { Alert } from "react-native";

type UploadScenario = "success" | "fail";

const simulateTask = (duration: number, shouldFail = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Upload failed"));
            } else {
                resolve("Upload successful");
            }
        }, duration);
    });
};

export const useProgressUpload = () => {
    const [tasks, setTasks] = useState<ProgressTask[]>([
        { title: "CatWithHat1.jpg", status: "notStarted" },
        { title: "CatWithHat2.jpg", status: "notStarted" },
        { title: "CatWithHat3.jpg", status: "notStarted" },
        { title: "CatWithHat4.jpg", status: "notStarted" },
        { title: "CatWithHat5.jpg", status: "notStarted" },
        { title: "CatWithHat6.jpg", status: "notStarted" },
    ]);

    const [isSimulating, setIsSimulating] = useState(false);

    const updateTaskStatus = (
        taskIndex: number,
        status: ProgressStatus,
        error?: ProgressTaskError,
        newTitle?: string,
    ) => {
        setTasks(tasks =>
            tasks.map((task, index) =>
                index === taskIndex
                    ? { ...task, status, error, title: newTitle ?? task.title }
                    : task,
            ),
        );
    };

    const resetTasks = () => {
        setTasks(
            tasks.map((task, index) => ({
                ...task,
                title: `CatWithHat${index + 1}.jpg`,
                status: "notStarted",
                error: undefined,
            })),
        );
    };
    const startUploadSimulation = async (scenario: UploadScenario) => {
        if (isSimulating) return;
        setIsSimulating(true);

        resetTasks();
        for (let i = 0; i < tasks.length; i++) {
            if (scenario === "success" || (scenario === "fail" && i !== 3)) {
                updateTaskStatus(i, "inProgress");
                await simulateTask(1000);
                updateTaskStatus(i, "success");
            } else if (scenario === "fail" && i === 3) {
                updateTaskStatus(
                    i,
                    "error",
                    {
                        message:
                            "Critical error: Expected CatWithHat4.jpg, but detected DogThrowingLog4.jpg",
                        code: "403",
                        suggestion:
                            "Immediate action required. Ensure system security protocols are enforced and consult security logs for potential intrusions.",
                    },
                    "DogThrowingLog4.jpg",
                );
                break;
            }
        }
        setIsSimulating(false);
    };

    const handleRetry = async () => {
        await startUploadSimulation("fail");
    };

    const handleCopyErrorMessage = (taskError: ProgressTaskError) => {
        if (taskError?.message) {
            Alert.alert("Message copied: \n", taskError.message);
        }
    };
    return {
        tasks,
        startUploadSimulation,
        handleRetry,
        handleCopyErrorMessage,
    };
};
