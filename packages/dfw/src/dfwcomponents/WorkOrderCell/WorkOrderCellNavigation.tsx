import { Cell, EDSStyleSheet, Icon, Typography, useStyles } from "@equinor/mad-components";
import React, { useMemo } from "react";
import { View } from "react-native";
import { PropertyRow } from "../PropertyRow";
import { PropertyList } from "./PropertyList";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";

type WorkOrderCellNavigationProps = WorkOrderCellProps & {
    onPress: () => void;
};

export const WorkOrderCellNavigation = ({
    title,
    workOrderId,
    workOrderType,
    maintenanceType,
    valueColor = "textTertiary",
    isHseCritical,
    isProductionCritical,
    showSymbols = true,
    onPress,
    style,
    ...rest
}: WorkOrderCellNavigationProps) => {
    const styles = useStyles(themeStyles);

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
        <Cell onPress={onPress} style={style}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Typography numberOfLines={1} variant="h5" bold style={styles.title}>
                        {title}
                    </Typography>
                    <View style={styles.dataContainer}>
                        {maintenanceType && (
                            <Typography group="paragraph" variant="body_short" color="textTertiary">
                                {maintenanceType}
                            </Typography>
                        )}
                        <PropertyRow label={workOrderType} value={workOrderId} />
                        <PropertyList data={rest} valueColor={valueColor} />
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
