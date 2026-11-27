import type {
    ParamListBase,
    StackNavigationState,
    StackRouterOptions,
    DefaultNavigatorOptions,
    StackActionHelpers,
    NavigatorTypeBagBase,
    NavigationListBase,
} from "@react-navigation/native";
import type {
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
} from "@react-navigation/native-stack";
import { MadCustomFactoryProps, MadNavigationOptions } from "../_internal/types";

export type NativeStackNavigatorProps = DefaultNavigatorOptions<
    ParamListBase,
    string | undefined,
    StackNavigationState<ParamListBase>,
    MadNativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    StackActionHelpers<ParamListBase>
> &
    StackRouterOptions &
    NativeStackNavigationConfig &
    MadCustomFactoryProps;

export type MadNativeStackNavigatorProps<ParamList extends ParamListBase = ParamListBase> =
    DefaultNavigatorOptions<
        ParamList,
        string | undefined,
        StackNavigationState<ParamList>,
        MadNativeStackNavigationOptions,
        NativeStackNavigationEventMap,
        unknown
    > & {
        customSubHeader?: () => React.ReactNode;
    };

export type MadNativeStackNavigatorTypeBag<ParamList extends ParamListBase> = NavigatorTypeBagBase & {
    ParamList: ParamList;
    NavigatorID: string | undefined;
    State: StackNavigationState<ParamList>;
    ScreenOptions: MadNativeStackNavigationOptions;
    EventMap: NativeStackNavigationEventMap;
    ActionHelpers: unknown;
    NavigationList: NavigationListBase<ParamList>;
    Navigator: (props: MadNativeStackNavigatorProps<ParamList>) => React.ReactElement | null;
};


// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- this type is not imported. To be replaced with Native type if the library devs ever choose to export
export type NativeStackNavigationConfig = {};

export type MadNativeStackNavigationOptions = NativeStackNavigationOptions & MadNavigationOptions;
