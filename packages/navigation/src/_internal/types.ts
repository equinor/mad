import { ReactNode } from "react";
import { RouteProp, ParamListBase } from "@react-navigation/native";

export type MadDescriptorsBase = Record<string, MadDescriptorBase>;

export type MadBaseOptions = { headerShown?: boolean; customSubHeaderShown?: boolean };

export type MadCustomFactoryProps = { customSubHeader?: () => React.ReactNode };

export type MadDescriptorBase = {
    navigation: unknown;
    route: NavigationRouteProp;
    options: MadBaseOptions | undefined;
    render: () => ReactNode;
};

export type MadNavigationOptions = { customSubHeaderShown?: boolean };

export type UnresolvedScreenOptions<Options extends MadNavigationOptions> =
    | Options
    | ((props: { route: NavigationRouteProp; navigation: unknown }) => Options)
    | undefined;

export type NavigationRouteProp = RouteProp<ParamListBase, string>;
