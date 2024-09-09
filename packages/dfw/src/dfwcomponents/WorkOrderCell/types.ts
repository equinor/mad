import { Color, IconName } from "@equinor/mad-components";
import { ViewProps } from "react-native";

export type WorkOrder = {
    title: string;
    workOrderId: string;
    maintenanceType?: string;
    tagId?: string;
    equipmentId?: string;
    activeStatusIds?: string;
    basicStartDate?: string;
    basicFinishDate?: string;
    requiredEnd?: string;
    workCenterId?: string;
    functionalLocation?: string;
};

export type WorkOrderCellProps = {
    showSymbols?: boolean | "column" | "row";
    valueColor?: Color;
    isHseCritical?: boolean;
    isProductionCritical?: boolean;
    style?: ViewProps["style"];
    overwriteLabel?: Partial<Record<keyof WorkOrder, string>>;
    showActions?: {
        startButton?: boolean;
        completeButton?: boolean;
        tecoButton?: boolean;
    };
    onStartButtonPress?: () => void;
    onCompleteButtonPress?: () => void;
    onTecoButtonPress?: () => void;
} & WorkOrder;

export type StatusConfig = {
    icon: IconName;
    label: string;
    textColor: Color;
    iconColor: Color;
};
