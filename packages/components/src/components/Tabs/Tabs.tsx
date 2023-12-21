import React, { createContext, useState } from "react";
import { useValidChildren } from "../../hooks/useValidChildren";
import { View } from "react-native";
import { TabsChildrenType, TabsContextType } from "./types";

export const TabsContext = createContext<TabsContextType>({
    onPressTab: () => null,
    isSelected: false,
});

export type TabsProps = {
    initialActiveIndex?: number;
    children?: TabsChildrenType[] | TabsChildrenType;
};

export const Tabs = ({ initialActiveIndex = 0, children }: TabsProps) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(initialActiveIndex);
    const validChildren = useValidChildren(children) as TabsChildrenType[];

    const renderCurrentTabChild = () => {
        const currentChildren = validChildren.at(activeTabIndex);
        if (typeof currentChildren === "object") {
            return currentChildren?.props.children;
        }
        return null;
    };

    return (
        <>
            <View style={{ flexDirection: "row" }}>
                {validChildren.map((child, index) => (
                    <TabsContext.Provider
                        key={index}
                        value={{
                            onPressTab: () => setActiveTabIndex(index),
                            isSelected: activeTabIndex === index,
                        }}
                    >
                        {child}
                    </TabsContext.Provider>
                ))}
            </View>
            {renderCurrentTabChild()}
        </>
    );
};
