import { ChildrenType } from "../../types";
import { TabProps } from "./Tab";

export type TabsContextType = {
    onPressTab: () => void;
    isSelected: boolean;
};

export type TabsChildrenType = ChildrenType<TabProps>;
