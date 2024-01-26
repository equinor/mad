import React from "react";
import { View } from "react-native";
import {
    Button,
    Cell,
    Icon,
    Label,
    Typography,
    useStyles,
    EDSStyleSheet,
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
    workCenterId?: string;
};

export type WorkOrderCellProps = {
    onStartButtonPress?: () => void;
    onCompleteButtonPress?: () => void;
    onPress?: () => void;
} & WorkOrder;

export const WorkOrderCell = ({
    title,
    maintenanceType,
    onStartButtonPress,
    onCompleteButtonPress,
    onPress,
    ...rest
}: WorkOrderCellProps) => {
    const styles = useStyles(themeStyles);
    const activeStatuses = rest.activeStatusIds?.split(" ");
    const renderStatusIcons = () => {
        const currentDate = new Date();
        const endDate = rest.basicEndDate ? new Date(rest.basicEndDate) : null;
        const iconsAndLabels = [];

        if (endDate && currentDate > endDate) {
            iconsAndLabels.push({
                icon: "alarm", // Replace with your icon
                label: "Required end overdue",
                color: "textTertiary", // Replace with your color
            });
        }

        activeStatuses?.forEach(status => {
            let icon, label, color;
            switch (status) {
                case "RDEX":
                    icon = "circle-outline";
                    label = "Ready for execution";
                    color = "textSecondary";
                    break;
                case "STRT":
                    icon = "circle-half-full";
                    label = "Started";
                    color = "textSecondary";
                    break;
                case "RDOP":
                    icon = "circle";
                    label = "Ready for operation";
                    color = "textSecondary";
                    break;
            }
            if (icon && label) {
                iconsAndLabels.push({ icon, label, color });
            }
        });

        return iconsAndLabels.map((item, index) => (
            <View key={index} style={styles.iconContainer}>
                <Icon name={item.icon} size={24} color={item.color} />
                <Typography
                    numberOfLines={1}
                    group="paragraph"
                    variant="caption"
                    color={item.color}
                >
                    {item.label}
                </Typography>
            </View>
        ));
    };
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
                {/* {activeStatuses && (
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                            marginBottom: 8,
                        }}
                    >
                        <Icon name="circle" size={24} color="textTertiary" />
                        <Typography
                            numberOfLines={1}
                            group="paragraph"
                            variant="caption"
                            color="textTertiary"
                        >
                            {"This is a test"}
                        </Typography>
                    </View>
                )} */}
                {renderStatusIcons()}
                <Label label={maintenanceType} style={{ marginBottom: 8 }} />
                {Object.entries(rest).map(([key, value], index) => {
                    const label = WorkOrderLabelMap[key as keyof WorkOrder];
                    let displayValue = value;
                    if (key === "basicStartDate" || key === "basicEndDate") {
                        displayValue = value ? new Date(value).toLocaleDateString() : "";
                    }
                    return (
                        <PropertyRow
                            key={index}
                            label={label}
                            value={displayValue}
                            style={{ marginBottom: 8 }}
                        />
                    );
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
    },
}));
