import React, { useState } from "react";
import { Alert, LayoutAnimation, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Button } from "../Button";
import { Icon, IconName } from "../Icon";
import { Typography } from "../Typography";
import { ProgressStatusLine } from "./ProgressStatusLine";
import { CircularProgress } from "../ProgressIndicator";

export type SubTask = {
    title: string;
    status: ProgressStatus;
    details?: string;
};

export type taskProps = {
    title?: string;
    task?: SubTask;
    tasks?: SubTask[];
    description?: string;
};

type ProgressStatus = "success" | "error" | "notStarted" | "onGoing";

export const ProgressTask = ({ title, description, tasks = [] }: taskProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const token = useToken();
    const styles = useStyles(themeStyles);

    const computeTaskStatus = (): ProgressStatus => {
        const hasOngoing = tasks.some(task => task.status === "onGoing");
        const hasError = tasks.some(task => task.status === "error");
        const allSuccess = tasks.every(task => task.status === "success");

        if (hasError) {
            return "error";
        } else if (hasOngoing) {
            return "onGoing";
        } else if (allSuccess) {
            return "success";
        } else {
            return "notStarted";
        }
    };

    const taskStatus = computeTaskStatus();
    const errorStatus = taskStatus === "error";

    const subTaskCounter = tasks?.filter(task => task.status).length;
    const subTaskSuccessCounter = tasks?.filter(task => task.status === "success").length;

    const animationConfig = {
        duration: token.timing.animation.slow,
        create: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut,
        },
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        LayoutAnimation.configureNext(animationConfig);
    };

    const statusToIconName = (status: ProgressStatus): IconName => {
        switch (status) {
            case "success":
                return "check-circle-outline";
            case "error":
                return "alert-circle-outline";
            case "notStarted":
                return "clock-time-five-outline";
            default:
                return "blank";
        }
    };

    const statusToColor = (status: ProgressStatus) => {
        switch (status) {
            case "success":
                return token.colors.feedback.success;
            case "error":
                return token.colors.feedback.danger;
            case "notStarted":
                return token.colors.text.disabled;
            case "onGoing":
                return token.colors.interactive.primary;
        }
    };

    const copyToClipboard = () => {
        const firstErrorSubTask = tasks.find(task => task.status === "error");

        Clipboard.setString(firstErrorSubTask?.details ?? "");
        Alert.alert("Copied to clipboard");
    };

    const renderSubTask = (subTask: SubTask, index: number) => {
        return (
            <View key={index}>
                {subTask.status === "onGoing" ? (
                    <View style={styles.subTasksTitleContainer}>
                        <CircularProgress size={18} />
                        <Typography>{subTask.title}</Typography>
                    </View>
                ) : (
                    <View style={styles.subTaskContainer}>
                        <View style={styles.subTasksTitleContainer}>
                            <Icon
                                name={statusToIconName(subTask.status)}
                                color={statusToColor(subTask.status)}
                            />
                            <Typography>{subTask.title}</Typography>
                        </View>

                        {subTask.status === "error" && <Typography>{subTask.details}</Typography>}
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContentContainer}>
                <View style={styles.contentContainer}>
                    <View>
                        {taskStatus === "onGoing" ? (
                            <CircularProgress size={26} style={{ marginBottom: 8 }} />
                        ) : (
                            <Icon
                                style={{ marginBottom: 8 }}
                                name={statusToIconName(taskStatus)}
                                color={statusToColor(taskStatus)}
                            />
                        )}
                        {subTaskCounter > 0 && (
                            <ProgressStatusLine color={statusToColor(taskStatus)} />
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Typography
                            bold={taskStatus === "success" ? false : true}
                            color={taskStatus === "notStarted" ? "textDisabled" : "textPrimary"}
                            variant="body_short"
                            group="paragraph"
                        >
                            {title}
                        </Typography>
                        {taskStatus !== "notStarted" && (
                            <View style={styles.descriptionContainer}>
                                {taskStatus === "onGoing" ||
                                (taskStatus === "success" && subTaskCounter > 0) ? (
                                    <>
                                        <Typography>
                                            {subTaskSuccessCounter} /{subTaskCounter} {description}
                                        </Typography>
                                    </>
                                ) : (
                                    subTaskCounter > 0 && <Typography>{description}</Typography>
                                )}
                            </View>
                        )}
                        {isExpanded && tasks.map(renderSubTask)}
                    </View>
                </View>

                {taskStatus !== "notStarted" && subTaskCounter > 0 && (
                    <TouchableOpacity style={styles.dropDownContainer} onPress={toggleExpand}>
                        <Typography>{isExpanded ? "Show less" : "Show more"}</Typography>
                        <Icon name={isExpanded ? "chevron-up" : "chevron-down"} />
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.actionContainer}>
                {isExpanded && taskStatus === "error" && (
                    <Button
                        title="Copy to clipboard"
                        variant="outlined"
                        onPress={copyToClipboard}
                    />
                )}
                {errorStatus && <Button title="Retry" />}
            </View>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.container.default,
        paddingVertical: theme.spacing.menu.item.paddingVertical,
        paddingHorizontal: theme.spacing.menu.item.paddingHorizontal,

        justifyContent: "space-between",
        flexDirection: "column",
    },
    mainContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: theme.spacing.menu.item.paddingHorizontal,

        gap: theme.spacing.button.iconGap,
    },
    actionContainer: {
        marginVertical: theme.spacing.container.paddingVertical,
        gap: theme.spacing.spacer.small,
    },
    dropDownContainer: {
        flexDirection: "row",
        gap: theme.spacing.button.iconGap,
    },
    subTasksTitleContainer: {
        flexDirection: "row",
        gap: theme.spacing.button.iconGap,
    },
    subTaskContainer: {
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
