import {
    Button,
    Cell,
    EDSStyleSheet,
    Label,
    Typography,
    useBreakpoint,
    useStyles,
} from "@equinor/mad-components";
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
    overwriteLabel,
    style,
    startButton,
    readyForOperationButton,
    tecoButton,
    ...rest
}: WorkOrderCellProps) => {
    const breakpoint = useBreakpoint();
    const styles = useStyles(themeStyles, { symbolDirection });

    const anyButtonVisible =
        startButton?.visible ?? readyForOperationButton?.visible ?? tecoButton?.visible;
    const currentDate = moment();
    const iconsAndLabels = useMemo(
        () =>
            getStatusIconsAndLabels(
                rest.activeStatus,
                rest.requiredEnd ?? null,
                currentDate,
                isHseCritical,
                isProductionCritical,
            ),
        [rest.activeStatus, rest.requiredEnd, currentDate, isHseCritical, isProductionCritical],
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
            {anyButtonVisible && (
                <View
                    style={[
                        styles.actionContainer,
                        breakpoint === "xs" && { flexDirection: "column" },
                    ]}
                >
                    {startButton?.visible && (
                        <Button
                            title="Start job"
                            variant="outlined"
                            disabled={startButton.disabled}
                            onPress={startButton.onPress}
                        />
                    )}
                    {readyForOperationButton?.visible && (
                        <Button
                            title="Ready for operation"
                            variant="outlined"
                            disabled={readyForOperationButton.disabled}
                            onPress={readyForOperationButton?.onPress}
                        />
                    )}
                    {tecoButton?.visible && (
                        <Button
                            title="Technical complete"
                            variant="outlined"
                            disabled={tecoButton.disabled}
                            onPress={tecoButton.onPress}
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
            gap: theme.spacing.spacer.small,
            marginTop: theme.spacing.container.paddingVertical,
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
                    ? theme.spacing.spacer.small
                    : theme.spacing.cell.content.titleDescriptionGap,
        },
    }),
);
