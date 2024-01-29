import React from "react";
import { useToken } from "../../hooks/useToken";
import { Icon } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { ProgressStatus } from "./types";
import { ProgressStatusLine } from "./ProgressStatusLine";
import { statusToColor, statusToIconName } from "./progressUtils";
import { View, ViewStyle } from "react-native";

type ProgressItemStatusProps = {
    taskCounter: number;
    status: ProgressStatus;
    style?: ViewStyle;
};

export const ProgressItemStatus = ({ taskCounter, status, style }: ProgressItemStatusProps) => {
    const token = useToken();

    return (
        <View style={[{ flexDirection: "column", gap: 8, height: "100%" }, style]}>
            {status === "inProgress" ? (
                <CircularProgress size={26} />
            ) : (
                <Icon
                    name={statusToIconName(status)}
                    color={statusToColor(status, token)}
                    size={26}
                />
            )}
            {taskCounter > 0 && <ProgressStatusLine color={statusToColor(status, token)} />}
        </View>
    );
};
