import {
    Cell,
    CellSwipeItemProps,
    EDSStyleSheet,
    Icon,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import React, { useMemo } from "react";
import { View } from "react-native";
import { StatusIcon } from "./StatusIcon";
import { WorkOrderCellProps } from "./types";
import { getStatusIconsAndLabels } from "./utils";
import { WorkOrderPropertyList } from "./WorkOrderPropertyList";

type SwipeGroup = CellSwipeItemProps[];

type WorkOrderCellNavigationProps = WorkOrderCellProps & {
    onPress: () => void;
    leftSwipeGroup?: SwipeGroup;
    rightSwipeGroup?: SwipeGroup;
    bookmarked?: boolean;
};

export const WorkOrderCellNavigation = ({
    showSymbols = true,
    workOrder,
    leftSwipeGroup,
    rightSwipeGroup,
    additionalPropertyRows = [],
    wrapValues = false,
    bookmarked,
    onPress,
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
                bookmarked,
            ),
        [bookmarked, workOrder],
    );

    return (
        <Cell
            {...rest}
            onPress={onPress}
            leftSwipeGroup={leftSwipeGroup}
            rightSwipeGroup={rightSwipeGroup}
        >
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
                        <WorkOrderPropertyList
                            workOrder={workOrder}
                            additionalPropertyRows={additionalPropertyRows}
                            wrapValues={wrapValues}
                        />
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
