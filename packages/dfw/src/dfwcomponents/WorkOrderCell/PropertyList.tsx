import { Color } from "@equinor/mad-components";
import React from "react";
import { PropertyRow } from "../PropertyRow";
import { WorkOrder } from "./types";
import { formatDate } from "./utils";

const workOrderLabelMap: Record<string, string | undefined> = {
    title: "Title",
    maintenanceType: "Maintenance type",
    functionalLocation: "Functional Location",
    equipment: "Equipment",
    activeStatus: "Active status",
    basicStartDate: "Basic start",
    basicFinishDate: "Basic finish",
    requiredEnd: "Required end",
    workCenter: "Work center",
} as const;

type PropertyListProps = {
    data: Partial<WorkOrder>;
    valueColor: Color;
};

export const PropertyList = ({ data: workOrder, valueColor }: PropertyListProps) => {
    const currentDate = new Date();
    const requiredEnd = workOrder.requiredEnd ? new Date(workOrder.requiredEnd) : null;

    const combinedDates =
        workOrder.basicStartDate && workOrder.basicFinishDate
            ? `${formatDate(workOrder.basicStartDate)} - ${formatDate(workOrder.basicFinishDate)}`
            : null;

    const getLabel = (key: string) => {
        if (key === "basicStartDate" && combinedDates) {
            return "Basic start / finish";
        }
        return workOrderLabelMap[key];
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
                        label && (
                            <PropertyRow
                                key={index}
                                label={label}
                                value={displayValue ?? ""}
                                textColor={textColor}
                            />
                        )
                    );
                }
                return null;
            })}
        </>
    );
};
