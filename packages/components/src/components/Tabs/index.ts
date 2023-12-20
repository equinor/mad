import { TabsProps, Tabs as _Tabs } from "./Tabs";
import { TabItem, TabItemProps } from "./Tab";

type TabsFamily = typeof _Tabs & {
    /**
     * A container for grouping buttons. The child buttons of this container visually clump together.
     */
    Tab: typeof TabItem;
};

const Tabs = _Tabs as TabsFamily;
Tabs.Tab = TabItem;

export { Tabs, TabsProps, TabItemProps };
