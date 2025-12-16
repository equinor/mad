import {
    Cell,
    CellSwipeItemProps,
    EDSStyleSheet,
    Icon,
    Typography,
    useBreakpoint,
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
    isBookmarked?: boolean;
    wrapValues?: boolean;
};

export const WorkOrderCellNavigation = ({
    showSymbols = true,
    workOrder,
    leftSwipeGroup,
    rightSwipeGroup,
    additionalPropertyRows = [],
    wrapValues = false,
    isBookmarked,
    onPress,
    ...rest
}: WorkOrderCellNavigationProps) => {
    const styles = useStyles(themeStyles);
    const isMobile = useBreakpoint() === "xs";

    const iconsAndLabels = useMemo(
        () =>
            getStatusIconsAndLabels(
                workOrder.activeStatusIds,
                workOrder.requiredEndDate,
                workOrder.isHseCritical,
                workOrder.isProductionCritical,
                isBookmarked,
            ),
        [isBookmarked, workOrder],
    );

    const renderIcons = () => (
        <View style={isMobile ? styles.mobileIconList : styles.iconList}>
            {iconsAndLabels.map((item, index) => (
                <StatusIcon key={index} {...item} label={undefined} />
            ))}
        </View>
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
                    <Typography
                        numberOfLines={1}
                        variant="h5"
                        bold
                        style={isMobile ? undefined : styles.title}
                    >
                        {workOrder.title}
                    </Typography>
                    {showSymbols && isMobile && renderIcons()}
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
                {showSymbols && !isMobile && renderIcons()}
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
    iconList: {
        position: "absolute",
        top: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.spacer.small,
    },
    mobileIconList: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: theme.spacing.spacer.small,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
