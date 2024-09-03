/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import {
    NativeStackNavigationOptions,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ComponentType } from "./components";
import { DFWComponentType } from "./dfwcomponents";

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Login: undefined;
    Modal: undefined;
    NotFound: undefined;
};

export type ComponentsStackParamList = {
    Discover: undefined;
    Component: {
        name: ComponentType;
        screenOptions?: Partial<NativeStackNavigationOptions>;
    };
};

export type DiscoverStackScreenProps<Screen extends keyof ComponentsStackParamList> =
    NativeStackScreenProps<ComponentsStackParamList, Screen>;

export type DFWStackParamList = {
    DFWDiscover: undefined;
    DFWComponent: {
        name: DFWComponentType;
        screenOptions?: Partial<NativeStackNavigationOptions>;
    };
};

export type DFWStackScreenProps<Screen extends keyof DFWStackParamList> = NativeStackScreenProps<
    DFWStackParamList,
    Screen
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

export type RootTabParamList = {
    Components: undefined;
    DFW: undefined;
    IconsTab: undefined;
    ToastTab: undefined;
    DrawTab: undefined;
    SignTab: undefined;
    Settings: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    CompositeScreenProps<
        NativeStackScreenProps<RootStackParamList>,
        NativeStackScreenProps<ComponentsStackParamList>
    >
>;
