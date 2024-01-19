import React from "react";
import { Cell } from "../Cell";
import { ProgressTask } from "./ProgressTask";

type ProgressProps = {
    title?: string;
};

export const Progress = ({ title }: ProgressProps) => {
    const tasks = [
        { title: "Uploading image 1", status: "success" },
        { title: "Uploading image 2", status: "success" },
        { title: "Uploading image 3", status: "success" },
        { title: "Uploading image 3", status: "onGoing" },
    ];

    const details =
        " #5. Code: 0x000FF01AB. The process cannot access the file because it is being used by another process. Thread execution halted. System resources compromised. Immediate action required. Refer to documentation (Ref: E-1045). Possible configuration mismatch or external interference detected. Operation incomplete.";
    const moreTasks = [
        { title: "Uploading image 1", status: "success" },
        { title: "Uploading image 2", status: "error", details: details },
        { title: "Uploading image 3", status: "error" },
    ];

    const evenMoreTasks = [{ title: "Uploading image 1", status: "notStarted" }];

    return (
        <Cell.Group title={title}>
            <ProgressTask title="Create report" description="uploaded images" />
            <ProgressTask
                title="Upload images"
                description="uploaded images"
                details={details}
                tasks={tasks}
            />
            <ProgressTask
                title="Upload images"
                description="Successfully uploaded"
                details={details}
                tasks={moreTasks}
            />
            <ProgressTask
                title="Upload images"
                description="uploaded images"
                tasks={evenMoreTasks}
            />
            <ProgressTask title="Upload images" description="uploaded images" />
        </Cell.Group>
    );
};
