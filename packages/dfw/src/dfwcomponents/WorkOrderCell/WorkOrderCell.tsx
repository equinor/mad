import {
    Button,
    Cell,
    EDSStyleSheet,
    Typography,
    useBreakpoint,
    useStyles,
    useToken,
} from "@equinor/mad-components";
import React, { useMemo } from "react";
import { View } from "react-native";
import { PropertyRow } from "../PropertyRow";
import { PropertyList } from "./PropertyList";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";

export const WorkOrderCell = ({
    title,
    workOrderId,
    workOrderType,
    maintenanceType,
    showSymbols = true,
    valueColor = "textTertiary",
    isHseCritical,
    isProductionCritical,
    style,
    startJobButton,
    readyForOperationButton,
    tecoButton,
    ...rest
}: WorkOrderCellProps) => {
    const breakpoint = useBreakpoint();
    const token = useToken();
    const styles = useStyles(themeStyles);

    const anyButtonVisible =
        startJobButton?.visible ?? readyForOperationButton?.visible ?? tecoButton?.visible;

    const currentDate = useMemo(() => new Date(), []);

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
            <Typography
                numberOfLines={1}
                variant="h5"
                bold
                style={!showSymbols && { paddingBottom: token.spacing.container.paddingVertical }}
            >
                {title}
            </Typography>
            {showSymbols && iconsAndLabels.length > 0 && (
                <View style={styles.iconListContainer}>
                    {iconsAndLabels.map((item, index) => (
                        <StatusIcon key={index} {...item} />
                    ))}
                </View>
            )}
            <View style={styles.dataContainer}>
                <Typography group="paragraph" variant="body_short" color="textTertiary">
                    {maintenanceType}
                </Typography>
                <PropertyRow label={workOrderType} value={workOrderId} />
                <PropertyList data={rest} valueColor={valueColor} />
            </View>
            {anyButtonVisible && (
                <View
                    style={[
                        styles.actionContainer,
                        breakpoint === "xs" && { flexDirection: "column" },
                    ]}
                >
                    {startJobButton?.visible && (
                        <Button
                            title="Start job"
                            variant="outlined"
                            disabled={startJobButton.disabled}
                            loading={startJobButton.loading}
                            onPress={startJobButton.onPress}
                        />
                    )}
                    {readyForOperationButton?.visible && (
                        <Button
                            title="Ready for operation"
                            variant="outlined"
                            disabled={readyForOperationButton.disabled}
                            loading={readyForOperationButton.loading}
                            onPress={readyForOperationButton.onPress}
                        />
                    )}
                    {tecoButton?.visible && (
                        <Button
                            title="Technical complete"
                            variant="outlined"
                            disabled={tecoButton.disabled}
                            loading={tecoButton.loading}
                            onPress={tecoButton.onPress}
                        />
                    )}
                </View>
            )}
        </Cell>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    actionContainer: {
        gap: theme.spacing.spacer.small,
        marginTop: theme.spacing.container.paddingVertical,
        flexDirection: "row",
        justifyContent: "center",
    },
    dataContainer: {
        gap: theme.spacing.cell.group.titleBottomPadding,
    },
    iconListContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
