import React from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../../hooks/useStyles";
import { EDSStyleSheet } from "../../../styling";
import { ProgressStatusIndicator } from "../ProgressStatusInducator";
import { ProgressItemTask } from "../ProgressItemTask/ProgressItemTask";
import { ProgressStatus, ProgressTask } from "../types";
import { ButtonRow } from "./ButtonRow";
import { ExpandableSection } from "./ExpandableSection";
import { ProgressItemProvider, useProgressItemContext } from "./ProgressItemContext";
import { ProgressLine } from "./ProgressLine";
import { TitleAndDescription } from "./TitleAndDescription";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { ExpandButton } from "./ExpandButton";
import { Spacer } from "../../Spacer";

type ProgressItemPropsOptions =
    | {
          /**
           * An array of tasks to be tracked by the progress item. Each task represents a unit of work whose progress or status can be monitored.
           * Specifying `tasks` will automatically determine the overall status of the progress item based on the individual statuses of these tasks.
           */
          tasks: ProgressTask[];
          /**
           * The `status` prop should not be used when `tasks` is provided. The overall status is computed based on the progress of the individual tasks.
           */
          status?: never;
          /**
           * Optional description to show under the progress task title. Can either be a string or a function that receives the number of completed tasks and the total number of tasks and returns a string.
           */
          description?: string | ((completedTasks: number, totalTasks: number) => string);
      }
    | {
          /**
           * When `tasks` is not provided, the `status` prop can be used to manually set the overall status of the progress item.
           * This is useful for simpler use cases where there is a single task or the progress does not need to be broken down into individual tasks.
           */
          tasks?: never;
          /**
           * Manually set the overall status of the progress item. Valid statuses; 'notStarted', 'inProgress', 'success', 'removed' or 'error'.
           */
          status: ProgressStatus;
          /**
           * Optional description to show under the progress task title.
           */
          description?: string;
      };

export type ProgressItemProps = {
    /**
     * Optional title for the progress item
     */
    title: string;
    /**
     * Callback function that is invoked when the retry button is pressed, allowing the specific failed task to be retried.
     * @param task The task object that failed and needs to be retried.
     */
    onRetryButtonPress?: (task: ProgressTask) => void;
} & ProgressItemPropsOptions &
    ViewProps;

const ICON_SIZE = 42;

export const ProgressItem = (props: ProgressItemProps) => {
    return (
        <ProgressItemProvider status={props.status} tasks={props.tasks}>
            <WrappedProgressItem {...props} />
        </ProgressItemProvider>
    );
};

const WrappedProgressItem = ({
    title,
    description,
    tasks = [],
    onRetryButtonPress,
    status: _,
    ...viewProps
}: ProgressItemProps) => {
    const styles = useStyles(themeStyles);
    const breakpoint = useBreakpoint();
    const { failedTask, isExpanded, status } = useProgressItemContext();

    const handleRetryButtonPress = () => {
        if (failedTask) {
            onRetryButtonPress && onRetryButtonPress(failedTask);
        }
    };
    return (
        <View {...viewProps} style={[styles.container, viewProps.style]}>
            <View style={[styles.row, styles.centered]}>
                <ProgressStatusIndicator
                    size={ICON_SIZE}
                    status={status}
                    style={[styles.leftCol, styles.centered]}
                />
                <TitleAndDescription title={title} description={description} />
                {breakpoint !== "xs" && <ExpandButton variant="ghost" />}
            </View>

            <View style={styles.row}>
                <ProgressLine style={styles.leftCol} />
                {tasks.length ? (
                    <ExpandableSection isExpanded={isExpanded}>
                        <View style={styles.progressTaskItemContainer}>
                            {tasks.map((task, index) => (
                                <ProgressItemTask key={index} task={task} />
                            ))}
                        </View>
                    </ExpandableSection>
                ) : null}
            </View>
            <View style={styles.row}>
                <View style={styles.leftCol} />
                <ButtonRow
                    style={styles.buttonRow}
                    onRetryButtonPress={onRetryButtonPress}
                    handleRetryButtonPress={handleRetryButtonPress}
                />
            </View>
        </View>
    );
};

ProgressItem.displayName = "Progress.Item";

const themeStyles = EDSStyleSheet.create(token => ({
    container: {
        paddingHorizontal: token.spacing.container.paddingHorizontal,
        paddingVertical: token.spacing.spacer.small,
        flexDirection: "column",
    },
    progressTaskItemContainer: {
        paddingVertical: token.spacing.element.paddingVertical,
        gap: token.spacing.cell.gapHorizontal,
    },
    row: {
        flexDirection: "row",
    },
    leftCol: {
        width: ICON_SIZE,
        marginRight: token.spacing.element.paddingHorizontal,
    },
    centered: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonRow: {
        paddingTop: token.spacing.element.paddingVertical,
    },
}));
