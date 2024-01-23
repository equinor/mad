import { PropertyRowScreen } from "../screens/dfw/dfwcomponents/PropertyRowScreen";

export const DFWComponentConfig = {
    propertyRow: PropertyRowScreen,
} as const;

export const DFWComponentName: Record<DFWComponentType, string> = {
    propertyRow: "Property row",
};

export type DFWComponentType = keyof typeof DFWComponentConfig;
