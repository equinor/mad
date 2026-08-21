import {
    DefaultNavigatorOptions,
    NavigationListBase,
    NavigatorTypeBagBase,
    ParamListBase,
    StackActionHelpers,
    StackNavigationState,
    StackRouterOptions,
} from "@react-navigation/native";
import { StackNavigationEventMap, StackNavigationOptions } from "@react-navigation/stack";
import { MadCustomFactoryProps, MadNavigationOptions } from "../_internal/types";

export type StackNavigatorProps = DefaultNavigatorOptions<
    ParamListBase,
    string | undefined,
    StackNavigationState<ParamListBase>,
    MadNavigationOptions,
    StackNavigationEventMap,
    StackActionHelpers<ParamListBase>
> &
    StackRouterOptions &
    StackNavigationConfig & MadCustomFactoryProps;

export type MadStackNavigatorProps<ParamList extends ParamListBase = ParamListBase> =
    DefaultNavigatorOptions<
        ParamList,
        string | undefined,
        StackNavigationState<ParamList>,
        MadStackNavigationOptions,
        StackNavigationEventMap,
        unknown
    > & {
        customSubHeader?: () => React.ReactNode;
    };

export type MadStackNavigatorTypeBag<ParamList extends ParamListBase> = NavigatorTypeBagBase & {
    ParamList: ParamList;
    NavigatorID: string | undefined;
    State: StackNavigationState<ParamList>;
    ScreenOptions: MadStackNavigationOptions;
    EventMap: StackNavigationEventMap;
    ActionHelpers: unknown;
    NavigationList: NavigationListBase<ParamList>;
    Navigator: (props: MadStackNavigatorProps<ParamList>) => React.ReactElement | null;
};

export type StackNavigationConfig = {
    /**
     * Whether inactive screens should be detached from the view hierarchy to save memory.
     * This will have no effect if you disable `react-native-screens`.
     *
     * Defaults to `true`.
     */
    detachInactiveScreens?: boolean;
};

export type StackHeaderMode = 'float' | 'screen'

export type MadStackNavigationOptions = StackNavigationOptions & MadNavigationOptions