import { PropertyRowScreen } from "../screens/dfw/dfwcomponents/PropertyRowScreen";
import { WorkOrderCellScreen } from "../screens/dfw/dfwcomponents/WorkOrderCellScreen";

export const DFWComponentConfig = {
    propertyRow: PropertyRowScreen,
    workOrderCell: WorkOrderCellScreen,
} as const;

export const DFWComponentName: Record<DFWComponentType, string> = {
    propertyRow: "Property row",
    workOrderCell: "Work order cell",
};

export type DFWComponentType = keyof typeof DFWComponentConfig;
