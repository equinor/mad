import { Cell, EDSStyleSheet, Icon, Label, Typography, useStyles } from "@equinor/mad-components";
import moment from "moment";
import React, { useMemo } from "react";
import { View } from "react-native";
import { PropertyList } from "./PropertyList";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";

type WorkOrderCellNavigationProps = WorkOrderCellProps & {
    onPress: () => void;
};

export const WorkOrderCellNavigation = ({
    title,
    maintenanceType,
    valueColor = "textTertiary",
    isHseCritical,
    isProductionCritical,
    showSymbols = true,
    overwriteLabel,
    onPress,
    style,
    ...rest
}: WorkOrderCellNavigationProps) => {
    const styles = useStyles(themeStyles);

    const currentDate = moment();
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
        <Cell onPress={onPress} style={style}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Typography numberOfLines={1} variant="h5" bold style={styles.title}>
                        {title}
                    </Typography>
                    {maintenanceType && <Label label={maintenanceType} style={styles.label} />}
                    <PropertyList
                        workOrder={rest}
                        overwriteLabel={overwriteLabel}
                        valueColor={valueColor}
                        currentDate={currentDate.toDate()}
                    />
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
    label: {
        marginBottom: theme.spacing.cell.group.titleBottomPadding,
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
