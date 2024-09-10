import { Button, Cell, EDSStyleSheet, Label, Typography, useStyles } from "@equinor/mad-components";
import moment from "moment";
import React, { useMemo } from "react";
import { View } from "react-native";
import { PropertyList } from "./PropertyList";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";

export const WorkOrderCell = ({
    title,
    maintenanceType,
    showSymbols,
    symbolDirection = "column",
    valueColor = "textTertiary",
    isHseCritical,
    isProductionCritical,
    showActions,
    overwriteLabel,
    style,
    onStartButtonPress,
    onCompleteButtonPress,
    onTecoButtonPress,
    ...rest
}: WorkOrderCellProps) => {
    const styles = useStyles(themeStyles, { symbolDirection });

    const currentDate = moment();
    const activeStatuses = rest.activeStatusIds?.split(" ");
    const isStartDisabled = activeStatuses?.includes("STRT") ?? activeStatuses?.includes("RDOP");
    const isCompleteDisabled =
        !activeStatuses?.includes("STRT") ?? activeStatuses?.includes("RDOP");

    const iconsAndLabels = useMemo(
        () =>
            getStatusIconsAndLabels(
                rest.activeStatusIds,
                rest.requiredEnd ?? null,
                currentDate,
                isHseCritical,
                isProductionCritical,
            ),
        [rest.activeStatusIds, rest.requiredEnd, currentDate, isHseCritical, isProductionCritical],
    );

    return (
        <Cell style={style}>
            <Typography numberOfLines={1} variant="h5" bold style={styles.title}>
                {title}
            </Typography>
            {showSymbols && (
                <View style={[styles.iconListContainer, { flexDirection: symbolDirection }]}>
                    {iconsAndLabels.map((item, index) => (
                        <StatusIcon key={index} {...item} />
                    ))}
                </View>
            )}
            {maintenanceType && <Label label={maintenanceType} style={styles.label} />}
            <PropertyList
                workOrder={rest}
                overwriteLabel={overwriteLabel}
                valueColor={valueColor}
                currentDate={currentDate.toDate()}
            />
            {showActions && (
                <View style={styles.actionContainer}>
                    {showActions.startButton && (
                        <Button
                            title="Start job"
                            variant="outlined"
                            disabled={isStartDisabled}
                            onPress={onStartButtonPress}
                        />
                    )}
                    {showActions.completeButton && (
                        <Button
                            title="Ready for operation"
                            variant="outlined"
                            disabled={isCompleteDisabled}
                            onPress={onCompleteButtonPress}
                        />
                    )}
                    {showActions.tecoButton && (
                        <Button
                            title="Technical complete"
                            variant="outlined"
                            onPress={onTecoButtonPress}
                        />
                    )}
                </View>
            )}
        </Cell>
    );
};

const themeStyles = EDSStyleSheet.create(
    (theme, { symbolDirection }: { symbolDirection: "row" | "column" }) => ({
        iconContainer: {
            flexDirection: "row",
            alignItems: "center",

            gap: theme.spacing.cell.content.titleDescriptionGap,
            marginBottom: theme.spacing.cell.group.titleBottomPadding,
        },
        actionContainer: {
            gap: theme.spacing.container.paddingVertical,
            marginTop: theme.spacing.spacer.medium,
            flexDirection: "row",
            justifyContent: "center",
        },
        title: {
            marginBottom: theme.spacing.container.paddingVertical,
        },
        label: {
            marginBottom: theme.spacing.cell.group.titleBottomPadding,
        },
        iconListContainer: {
            flexWrap: "wrap",
            flexDirection: symbolDirection,
            paddingBottom: theme.spacing.cell.group.titleBottomPadding,
            gap:
                symbolDirection === "row"
                    ? theme.spacing.spacer.medium
                    : theme.spacing.cell.content.titleDescriptionGap,
        },
    }),
);
