import React from "react";
import { PropertyRow } from "../PropertyRow";
import { WorkOrder } from "./types";
import moment from "moment";
import { Color, useToken } from "@equinor/mad-components";

const defaultWorkOrderLabelMap: Record<keyof WorkOrder, string> = {
    title: "Title",
    workOrderId: "Work order ID",
    maintenanceType: "Maintenance type",
    tagId: "Tag ID",
    equipmentId: "Equipment ID",
    activeStatusIds: "Active status IDs",
    basicStartDate: "Basic start",
    basicEndDate: "Basic end",
    requiredEnd: "Required end",
    workCenterId: "Work center ID",
    functionalLocation: "Functional Location",
} as const;

type PropertyListProps = {
    workOrder: Partial<WorkOrder>;
    valueColor: Color;
    currentDate: Date;
    overwriteLabel?: Partial<Record<keyof WorkOrder, string>>;
};

export const PropertyList = ({
    workOrder,
    valueColor,
    currentDate,
    overwriteLabel = {},
}: PropertyListProps) => {
    const requiredEnd = workOrder.requiredEnd ? new Date(workOrder.requiredEnd) : null;

    const formatDate = (dateString: string) => moment(dateString).format("DD.MM.YYYY");
    const token = useToken();

    const getLabel = (key: keyof WorkOrder, combinedDates: string | null) => {
        if (key === "basicStartDate" && combinedDates) {
            return "Basic start / end";
        }
        return overwriteLabel?.[key] ?? defaultWorkOrderLabelMap[key];
    };

    const getDisplayValue = (
        key: keyof WorkOrder,
        value: string | undefined,
        combinedDates: string | null,
    ) => {
        if (key === "basicStartDate" && combinedDates) {
            return combinedDates;
        }
        if (["basicStartDate", "basicEndDate", "requiredEnd"].includes(key)) {
            return value ? formatDate(value) : "";
        }
        return value;
    };

    const combinedDates =
        workOrder.basicStartDate && workOrder.basicEndDate
            ? `${formatDate(workOrder.basicStartDate)} - ${formatDate(workOrder.basicEndDate)}`
            : null;

    return (
        <>
            {Object.entries(workOrder).map(([key, value], index) => {
                const typedKey = key as keyof WorkOrder;

                if (combinedDates && typedKey === "basicEndDate") return null;

                if (value || (typedKey === "basicStartDate" && combinedDates)) {
                    const label = getLabel(typedKey, combinedDates);
                    const displayValue = getDisplayValue(typedKey, value, combinedDates);

                    const textColor =
                        typedKey === "requiredEnd" && requiredEnd && currentDate > requiredEnd
                            ? "danger"
                            : valueColor;

                    return (
                        <PropertyRow
                            key={index}
                            label={label}
                            value={displayValue ?? ""}
                            style={{ marginBottom: token.spacing.cell.group.titleBottomPadding }}
                            textColor={textColor}
                        />
                    );
                }
                return null;
            })}
        </>
    );
};
