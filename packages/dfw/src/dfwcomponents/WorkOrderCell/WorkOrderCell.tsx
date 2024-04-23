import React, { useMemo } from "react";
import { View } from "react-native";
import {
    Button,
    Cell,
    Icon,
    Label,
    Typography,
    useStyles,
    EDSStyleSheet,
    IconName,
    Color,
} from "@equinor/mad-components";
import { PropertyRow } from "../PropertyRow";

const WorkOrderLabelMap: Record<keyof WorkOrder, string> = {
    title: "Title",
    workOrderId: "Work Order ID",
    maintenanceType: "Maintenance Type",
    tagId: "Tag ID",
    equipmentId: "Equipment ID",
    activeStatusIds: "Active Status IDs",
    basicStartDate: "Basic Start Date",
    basicEndDate: "Basic End Date",
    requiredEnd: "Required End",
    workCenterId: "Work Center ID",
} as const;

export type WorkOrder = {
    title: string;
    workOrderId: string;
    maintenanceType?: string;
    tagId?: string;
    equipmentId?: string;
    activeStatusIds?: string;
    basicStartDate?: string;
    basicEndDate?: string;
    requiredEnd?: string;
    workCenterId?: string;
};

export type WorkOrderCellProps = {
    onStartButtonPress?: () => void;
    onCompleteButtonPress?: () => void;
    onPress?: () => void;
    showSymbols?: boolean;
    valueColor?: Color;
} & WorkOrder;

type StatusConfig = {
    icon: IconName;
    label: string;
    textColor: Color;
    iconColor: Color;
};

const getStatusIconConfig = (status: string): StatusConfig | undefined => {
    switch (status) {
        case "RDEX":
            return {
                icon: "circle-outline",
                label: "Ready for execution",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
        case "STRT":
            return {
                icon: "circle-half-full",
                label: "Started",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
        case "RDOP":
            return {
                icon: "circle",
                label: "Ready for operation",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
    }
    return undefined;
};

export const WorkOrderCell = ({
    title,
    maintenanceType,
    onStartButtonPress,
    onCompleteButtonPress,
    onPress,
    showSymbols,
    valueColor = "textTertiary",
    ...rest
}: WorkOrderCellProps) => {
    const styles = useStyles(themeStyles);
    const activeStatuses = rest.activeStatusIds?.split(" ");

    const currentDate = new Date();
    const requiredEnd = rest.requiredEnd ? new Date(rest.requiredEnd) : null;

    const iconsAndLabels = useMemo(() => {
        const result: StatusConfig[] = [];

        if (requiredEnd && currentDate > requiredEnd) {
            result.push({
                icon: "alarm",
                label: "Required end overdue",
                textColor: "textTertiary",
                iconColor: "danger",
            });
        }

        activeStatuses?.forEach(status => {
            const statusConfig = getStatusIconConfig(status);
            if (statusConfig) {
                result.push(statusConfig);
            }
        });
        return result;
    }, [activeStatuses, rest.requiredEnd]);

    const isStartDisabled =
        !!activeStatuses?.includes("STRT") || !!activeStatuses?.includes("RDOP");
    const isCompleteDisabled =
        !activeStatuses?.includes("STRT") || activeStatuses?.includes("RDOP");
    return (
        <Cell
            onPress={onPress ? onPress : undefined}
            rightAdornment={
                onPress ? (
                    <View style={{ justifyContent: "center" }}>
                        <Icon name="chevron-right" />
                    </View>
                ) : null
            }
        >
            <View style={{ flex: 1 }}>
                <Typography numberOfLines={1} variant="h5" bold style={{ marginBottom: 16 }}>
                    {title}
                </Typography>
                {showSymbols &&
                    iconsAndLabels?.map((item, index) => (
                        <View key={index} style={styles.iconContainer}>
                            <Icon name={item.icon} size={24} color={item.iconColor} />
                            <Typography
                                numberOfLines={1}
                                group="paragraph"
                                variant="caption"
                                color={item.textColor}
                            >
                                {item.label}
                            </Typography>
                        </View>
                    ))}
                <Label label={maintenanceType} style={{ marginBottom: 8 }} />
                {Object.entries(rest).map(([key, value], index) => {
                    if (value) {
                        const label = WorkOrderLabelMap[key as keyof WorkOrder];
                        let displayValue = value;
                        let requiredEndColor = valueColor;

                        if (
                            key === "basicStartDate" ||
                            key === "basicEndDate" ||
                            key === "requiredEnd"
                        ) {
                            displayValue = value ? new Date(value).toLocaleDateString() : "";
                        }
                        if (key === "requiredEnd" && requiredEnd && currentDate > requiredEnd) {
                            requiredEndColor = "danger";
                        }
                        return (
                            <PropertyRow
                                key={index}
                                label={label}
                                value={displayValue}
                                style={{ marginBottom: 8 }}
                                textColor={requiredEndColor}
                            />
                        );
                    }
                    return null;
                })}
                {(!!onStartButtonPress || !!onCompleteButtonPress) && (
                    <View
                        style={{
                            gap: 16,
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 22,
                        }}
                    >
                        {onStartButtonPress && (
                            <Button
                                title={"Start"}
                                onPress={onStartButtonPress}
                                variant="outlined"
                                disabled={isStartDisabled}
                            />
                        )}
                        {onCompleteButtonPress && (
                            <Button
                                title={"Complete"}
                                onPress={onCompleteButtonPress}
                                variant="outlined"
                                disabled={isCompleteDisabled}
                            />
                        )}
                    </View>
                )}
            </View>
        </Cell>
    );
};

const themeStyles = EDSStyleSheet.create(() => ({
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
    },
}));
