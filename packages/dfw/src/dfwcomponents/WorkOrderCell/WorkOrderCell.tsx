import React from "react";
import { View } from "react-native";
import { Button, Cell, Icon, Label, Typography } from "@equinor/mad-components";
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
    const isStartDisabled = !rest.activeStatusIds?.includes("STRT");
    const isCompleteDisabled = !rest.activeStatusIds?.includes("RDOP");

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
                <Typography numberOfLines={1} variant="h5" bold>
                    {title}
                </Typography>
                <Label label={maintenanceType} />
                {Object.entries(rest).map(([key, value], index) => {
                    const label = WorkOrderLabelMap[key as keyof WorkOrder];
                    let displayValue = value;
                    if (key === "basicStartDate" || key === "basicEndDate") {
                        displayValue = value ? new Date(value).toLocaleDateString() : "";
                    }
                    return <PropertyRow key={index} label={label} value={displayValue} />;
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
