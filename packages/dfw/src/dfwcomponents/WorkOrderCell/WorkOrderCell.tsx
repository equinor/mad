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
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";
import { WorkOrderPropertyList } from "./WorkOrderPropertyList";

export const WorkOrderCell = ({
    showSymbols = true,
    startJobButton,
    readyForOperationButton,
    tecoButton,
    workOrder,
    ...rest
}: WorkOrderCellProps) => {
    const breakpoint = useBreakpoint();
    const token = useToken();
    const styles = useStyles(themeStyles);

    const anyButtonVisible =
        startJobButton?.visible ?? readyForOperationButton?.visible ?? tecoButton?.visible;

    const iconsAndLabels = useMemo(
        () =>
            getStatusIconsAndLabels(
                workOrder.activeStatusIds,
                workOrder.requiredEndDate,
                workOrder.isHseCritical,
                workOrder.isProductionCritical,
            ),
        [workOrder],
    );

    return (
        <Cell {...rest}>
            <Typography
                numberOfLines={1}
                variant="h5"
                bold
                style={!showSymbols && { paddingBottom: token.spacing.container.paddingVertical }}
            >
                {workOrder.title}
            </Typography>
            {showSymbols && iconsAndLabels.length > 0 && (
                <View style={styles.iconListContainer}>
                    {iconsAndLabels.map((item, index) => (
                        <StatusIcon key={index} {...item} />
                    ))}
                </View>
            )}
            <View style={styles.dataContainer}>
                {workOrder.maintenanceType && (
                    <Typography group="paragraph" variant="body_short" color="textTertiary">
                        {workOrder.maintenanceType}
                    </Typography>
                )}
                <WorkOrderPropertyList workOrder={workOrder} />
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
