import React, { useCallback, useState } from "react";
import { ProgressTask, TaskErrorDetails, TaskStatus } from "@equinor/mad-components";

export const useProgressUpload = (initialTasks: ProgressTask[]) => {
    const [tasks, setTasks] = useState<ProgressTask[]>(initialTasks);

    const resetTasks = () => {
        setTasks(initialTasks.map(task => ({ ...task, status: "notStarted" })));
    };

    const updateTask = (index: number, status: TaskStatus, errorDetails?: TaskErrorDetails) => {
        setTasks(currentTasks =>
            currentTasks.map((task, i) =>
                i === index
                    ? {
                          ...task,
                          status,
                          errorDetails: status === "error" ? errorDetails : undefined,
                      }
                    : task,
            ),
        );
    };

    const startUpload = async (shouldFail = false) => {
        console.log("shouldFail value:", shouldFail);
        resetTasks();

        for (let i = 0; i < initialTasks.length; i++) {
            updateTask(i, "inProgress");
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (shouldFail && i === 3) {
                updateTask(i, "error", {
                    message: "Failed to upload the image",
                    code: "UPLOAD_FAILED",
                    suggestion: "Please check the network connection and try again.",
                });
                break;
            }
            updateTask(i, "success");
        }
    };

    return { tasks, startUpload };
};
