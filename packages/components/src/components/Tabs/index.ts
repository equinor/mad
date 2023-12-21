import { TabsProps, Tabs as _Tabs } from "./Tabs";
import { Tab, TabProps } from "./Tab";

type TabsFamily = typeof _Tabs & {
    /**
     * A container for grouping buttons. The child buttons of this container visually clump together.
     */
    Tab: typeof Tab;
};

const Tabs = _Tabs as TabsFamily;
Tabs.Tab = Tab;

export { Tabs, TabsProps, TabProps as TabItemProps };
