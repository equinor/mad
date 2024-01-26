import React from "react";
import { Pressable, View } from "react-native";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { ProgressStatus } from "./types";

type ProgressExpandButtonProps = {
    taskStatus: ProgressStatus;
    taskCounter: number;
    isExpanded: boolean;
    toggleExpand: () => void;
};

export const ProgressExpandButton = ({
    taskStatus,
    taskCounter,
    isExpanded,
    toggleExpand,
}: ProgressExpandButtonProps) => {
    const styles = useStyles(themeStyles);

    return (
        <View>
            {taskStatus !== "notStarted" && taskCounter > 0 && (
                <Pressable style={[styles.dropDownContainer]} onPress={toggleExpand}>
                    <Typography style={{ minWidth: 85 }}>
                        {isExpanded ? "Show less" : "Show more"}
                    </Typography>
                    <Icon name={isExpanded ? "chevron-up" : "chevron-down"} />
                </Pressable>
            )}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    dropDownContainer: {
        flexDirection: "row",
        gap: theme.spacing.button.iconGap,
    },
}));
