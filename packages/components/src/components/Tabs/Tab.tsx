import React, { PropsWithChildren } from "react";

export type TabItemProps = PropsWithChildren & {
    title: string;
};

export const TabItem = ({ title, children }: TabItemProps) => null;
