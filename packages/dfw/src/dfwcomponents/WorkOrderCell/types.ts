import { Color, IconName } from "@equinor/mad-components";
import { ViewProps } from "react-native";

export type WorkOrder = {
    title: string;
    workOrder: string;
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
    visible: boolean;
    onPress: () => void;
};

export type WorkOrderCellProps = {
    showSymbols?: boolean;
    symbolDirection?: "column" | "row";
    valueColor?: Color;
    isHseCritical?: boolean;
    isProductionCritical?: boolean;
    style?: ViewProps["style"];
    overwriteLabel?: Partial<Record<keyof WorkOrder, string>>;
    startButton?: ButtonOptions;
    readyForOperationButton?: ButtonOptions;
    tecoButton?: ButtonOptions;
} & WorkOrder;

export type StatusConfig = {
    icon: IconName;
    label?: string;
    textColor: Color;
    iconColor: Color;
};
