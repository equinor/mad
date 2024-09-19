import { Color, IconName } from "@equinor/mad-components";
import { ViewProps } from "react-native";

export type WorkOrderType =
    | "PM01"
    | "PM02"
    | "PM03"
    | "PM04"
    | "PM05"
    | "PM06"
    | "PM10"
    | "PM15"
    | "PM20"
    | "unknown";

export type WorkOrder = {
    workOrderId: string;
    workOrderType: WorkOrderType;
    title: string;
    maintenanceType?: string;
    tagId?: string;
    tagPlantId?: string;
    equipmentId?: string;
    activeStatusIds?: string;
    basicStartDate?: string;
    basicEndDate?: string;
    requiredEndDate?: string;
    workCenterId?: string;
    isHseCritical?: boolean;
    isProductionCritical?: boolean;
};

type ButtonOptions = {
    disabled?: boolean;
    loading?: boolean;
    visible: boolean;
    onPress: () => void;
};

export type WorkOrderCellProps = {
    /**
     * Boolean value indicating whether or not the work order cell should display statuses as icons.
     */
    showSymbols?: boolean;
    /**
     * Button configuration for the start job button.
     */
    startJobButton?: ButtonOptions;
    /**
     * Button configuration for the ready for operation button.
     */
    readyForOperationButton?: ButtonOptions;
    /**
     * Button configuration for the complete button.
     */
    tecoButton?: ButtonOptions;
    /**
     * Work order data to display in the cell.
     */
    workOrder: WorkOrder;
} & Omit<ViewProps, "children">;

export type StatusConfig = {
    icon: IconName;
    label?: string;
    textColor: Color;
    iconColor: Color;
};
