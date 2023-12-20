import React, { PropsWithChildren, useState } from "react";
import { useValidChildren } from "../../hooks/useValidChildren";
import { TabItemProps } from "./Tab";
import { View } from "react-native";
import { Button } from "../Button";

type TabsChildrenType = React.ReactElement<TabItemProps>;

export type TabsProps = {
    initialActiveIndex: number;
    children?: TabsChildrenType[] | TabsChildrenType;
};

export const Tabs = ({ initialActiveIndex, children }: PropsWithChildren<TabsProps>) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(initialActiveIndex);
    const validChildren = useValidChildren(children) as TabsChildrenType[];

    return (
        <View style={{ flexDirection: "row" }}>
            {validChildren.map((child, index) => (
                <Button key={index.toString()} title={child.props.title} />
            ))}
        </View>
    );
};
