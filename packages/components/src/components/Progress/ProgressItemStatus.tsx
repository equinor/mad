import React from "react";
import { useToken } from "../../hooks/useToken";
import { Icon } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { ProgressStatus } from "./types";
import { ProgressStatusLine } from "./ProgressStatusLine";
import { statusToColor, statusToIconName } from "./progressUtils";
import { View, ViewStyle } from "react-native";

export type ProgressItemStatusProps = {
    taskCounter: number;
    status: ProgressStatus;
    style?: ViewStyle;
    completedTaskCounter: number;
};

export const ProgressItemStatus = ({
    taskCounter,
    status,
    style,
    completedTaskCounter,
}: ProgressItemStatusProps) => {
    const token = useToken();
    const progress = taskCounter > 0 ? completedTaskCounter / taskCounter : 0;

    return (
        <View style={[{ gap: 8, height: "100%" }, style]}>
            {status === "inProgress" ? (
                <CircularProgress size={26} />
            ) : (
                <Icon
                    name={statusToIconName(status)}
                    color={statusToColor(status, token)}
                    size={26}
                />
            )}
            {taskCounter > 0 && (
                <ProgressStatusLine color={statusToColor(status, token)} progress={progress} />
            )}
        </View>
    );
};
