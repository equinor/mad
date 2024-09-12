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
    | "Unknown";

export type WorkOrder = {
    workOrderId: string;
    workOrderType: WorkOrderType;
    title: string;
    maintenanceType?: string;
    equipment?: string;
    activeStatus?: string;
    basicStartDate?: string;
    basicFinishDate?: string;
    requiredEnd?: string;
    workCenter?: string;
    functionalLocation?: string;
};

type ButtonOptions = {
    disabled?: boolean;
    loading?: boolean;
    visible: boolean;
    onPress: () => void;
};

export type WorkOrderCellProps = {
    workOrderId: string;
    workOrderType: WorkOrderType;
    showSymbols?: boolean;
    valueColor?: Color;
    isHseCritical?: boolean;
    isProductionCritical?: boolean;
    style?: ViewProps["style"];
    overwriteLabel?: Partial<Record<keyof WorkOrder, string>>;
    startJobButton?: ButtonOptions;
    readyForOperationButton?: ButtonOptions;
    tecoButton?: ButtonOptions;
} & WorkOrder;

export type StatusConfig = {
    icon: IconName;
    label?: string;
    textColor: Color;
    iconColor: Color;
};
