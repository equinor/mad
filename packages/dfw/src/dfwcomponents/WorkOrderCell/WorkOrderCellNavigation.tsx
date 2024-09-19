import { Cell, EDSStyleSheet, Icon, Typography, useStyles } from "@equinor/mad-components";
import React, { useMemo } from "react";
import { View } from "react-native";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";
import { WorkOrderPropertyList } from "./WorkOrderPropertyList";

type WorkOrderCellNavigationProps = WorkOrderCellProps & {
    onPress: () => void;
};

export const WorkOrderCellNavigation = ({
    showSymbols = true,
    onPress,
    workOrder,
    ...rest
}: WorkOrderCellNavigationProps) => {
    const styles = useStyles(themeStyles);

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
        <Cell {...rest} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Typography numberOfLines={1} variant="h5" bold style={styles.title}>
                        {workOrder.title}
                    </Typography>
                    <View style={styles.dataContainer}>
                        {workOrder.maintenanceType && (
                            <Typography group="paragraph" variant="body_short" color="textTertiary">
                                {workOrder.maintenanceType}
                            </Typography>
                        )}
                        <WorkOrderPropertyList workOrder={workOrder} />
                    </View>
                </View>
                {showSymbols && (
                    <View style={styles.iconListContainer}>
                        {iconsAndLabels.map((item, index) => (
                            <StatusIcon key={index} {...item} label={undefined} />
                        ))}
                    </View>
                )}
                <Icon name="chevron-right" />
            </View>
        </Cell>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        flexDirection: "column",
    },
    title: {
        marginBottom: theme.spacing.container.paddingVertical,
    },
    dataContainer: {
        gap: theme.spacing.cell.group.titleBottomPadding,
    },
    iconListContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.spacer.small,
    },
}));
