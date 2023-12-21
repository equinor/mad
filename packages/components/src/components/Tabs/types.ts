import { TabProps } from "./Tab";

export type TabsContextType = {
    onPressTab: () => void;
    isSelected: boolean;
};

export type TabsChildrenType = React.ReactElement<TabProps> | boolean | null | undefined;
