import { Color } from "@equinor/mad-components";
import React from "react";
import { PropertyRow } from "../PropertyRow";
import { WorkOrder } from "./types";
import { formatDate } from "./utils";

type PropertyRowEntry = {
    label: ((workOrder: WorkOrder) => string) | string;
    value: ((workOrder: WorkOrder) => string) | string;
    color?: ((workOrder: WorkOrder) => Color) | Color;
    condition: (workOrder: WorkOrder) => boolean;
};

type PropertyRowConfig = readonly PropertyRowEntry[];

const propertyRowConfig: PropertyRowConfig = [
    {
        label: wo => wo.workOrderType,
        value: wo => wo.workOrderId,
        condition: () => true,
    },
    {
        label: "Functional Location",
        value: wo => `${wo.tagPlantId}-${wo.tagId}`,
        condition: wo => !!wo.tagId && !!wo.tagPlantId,
    },
    {
        label: "Tag",
        value: wo => wo.tagId!,
        condition: wo => !!wo.tagId && !wo.tagPlantId,
    },
    {
        label: "Equipment",
        value: wo => wo.equipmentId!,
        condition: wo => !!wo.equipmentId,
    },

    {
        label: "Active statuses",
        value: wo => wo.activeStatusIds!,
        condition: wo => !!wo.activeStatusIds,
    },
    {
        label: "Basic start / finish",
        value: wo => `${formatDate(wo.basicStartDate!)} - ${formatDate(wo.basicEndDate!)}`,
        condition: wo => !!wo.basicStartDate && !!wo.basicEndDate,
    },
    {
        label: "Basic start",
        value: wo => formatDate(wo.basicStartDate!),
        condition: wo => !!wo.basicStartDate && !wo.basicEndDate,
    },

    {
        label: "Basic finish",
        value: wo => formatDate(wo.basicEndDate!),
        condition: wo => !!wo.basicEndDate && !wo.basicStartDate,
    },

    {
        label: "Required end",
        value: wo => formatDate(wo.requiredEndDate!),
        color: wo => (new Date() > new Date(wo.requiredEndDate!) ? "danger" : "textTertiary"),
        condition: wo => !!wo.requiredEndDate,
    },

    {
        label: "Work center",
        value: wo => wo.workCenterId ?? "",
        condition: wo => !!wo.workCenterId,
    },
] as const;

type WorkOrderPropertyListProps = {
    workOrder: WorkOrder;
};

export const WorkOrderPropertyList = ({ workOrder }: WorkOrderPropertyListProps) => {
    return (
        <>
            {propertyRowConfig.map(item => {
                const label = typeof item.label === "function" ? item.label(workOrder) : item.label;
                const value = typeof item.value === "function" ? item.value(workOrder) : item.value;
                const textColor =
                    typeof item.color === "function" ? item.color(workOrder) : item.color;
                if (!item.condition(workOrder)) return null;
                return (
                    <PropertyRow
                        key={`${label}-${value}`}
                        label={label}
                        value={value}
                        textColor={textColor}
                    />
                );
            })}
        </>
    );
};
