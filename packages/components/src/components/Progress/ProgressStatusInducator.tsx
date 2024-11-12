import React from "react";
import { useToken } from "../../hooks/useToken";
import { Icon } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { useProgressItemContext } from "./ProgressItem/ProgressItemContext";
import { statusToColor, statusToIconName } from "./progressUtils";
import { View, ViewProps } from "react-native";

export type ProgressStatusIndicatorProps = {
    size: number;
} & ViewProps;

export const ProgressStatusIndicator = ({ size, ...viewProps }: ProgressStatusIndicatorProps) => {
    const { status } = useProgressItemContext();
    const token = useToken();

    return (
        <View {...viewProps}>
            {status === "inProgress" ? (
                <CircularProgress size={size} />
            ) : (
                <Icon
                    name={statusToIconName(status)}
                    color={statusToColor(status, token)}
                    size={size}
                />
            )}
        </View>
    );
};
