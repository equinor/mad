import React from "react";
import { PropertyRow } from "../PropertyRow";
import { WorkOrder } from "./types";
import moment from "moment";
import { Color, useToken } from "@equinor/mad-components";

const defaultWorkOrderLabelMap: Record<keyof WorkOrder, string> = {
    title: "Title",
    workOrderId: "Work order ID",
    maintenanceType: "Maintenance type",
    functionalLocation: "Functional Location",
    equipmentId: "Equipment",
    activeStatusIds: "Active status",
    basicStartDate: "Basic start",
    basicFinishDate: "Basic finish",
    requiredEnd: "Required end",
    workCenterId: "Work center",
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
    const token = useToken();

    const formatDate = (dateString: string) => moment(dateString).format("DD.MM.YYYY");

    const requiredEnd = workOrder.requiredEnd ? new Date(workOrder.requiredEnd) : null;

    const combinedDates =
        workOrder.basicStartDate && workOrder.basicFinishDate
            ? `${formatDate(workOrder.basicStartDate)} - ${formatDate(workOrder.basicFinishDate)}`
            : null;

    const getLabel = (key: keyof WorkOrder) => {
        if (key === "basicStartDate" && combinedDates) {
            return "Basic start / finish";
        }
        return overwriteLabel?.[key] ?? defaultWorkOrderLabelMap[key];
    };

    const getDisplayValue = (key: keyof WorkOrder, value: string | undefined) => {
        if (key === "basicStartDate" && combinedDates) {
            return combinedDates;
        }
        if (["basicStartDate", "basicFinishDate", "requiredEnd"].includes(key)) {
            return value ? formatDate(value) : "";
        }
        return value;
    };

    return (
        <>
            {Object.entries(workOrder).map(([key, value], index) => {
                const typedKey = key as keyof WorkOrder;

                if (combinedDates && typedKey === "basicFinishDate") return null;

                if (value || (typedKey === "basicStartDate" && combinedDates)) {
                    const label = getLabel(typedKey);
                    const displayValue = getDisplayValue(typedKey, value);

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
