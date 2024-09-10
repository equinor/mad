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

export type WorkOrderCellActions = {
    startButton?: {
        visible: boolean;
        disabled?: boolean;
    };
    readyForOperationButton?: {
        visible: boolean;
        disabled?: boolean;
    };
    tecoButton?: {
        visible: boolean;
        disabled?: boolean;
    };
};

export type WorkOrderCellProps = {
    showSymbols?: boolean;
    symbolDirection?: "column" | "row";
    valueColor?: Color;
    isHseCritical?: boolean;
    isProductionCritical?: boolean;
    style?: ViewProps["style"];
    overwriteLabel?: Partial<Record<keyof WorkOrder, string>>;
    actions?: WorkOrderCellActions;
    onStartButtonPress?: () => void;
    onReadyForOperationPress?: () => void;
    onTecoButtonPress?: () => void;
} & WorkOrder;

export type StatusConfig = {
    icon: IconName;
    label?: string;
    textColor: Color;
    iconColor: Color;
};
