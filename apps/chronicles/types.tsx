/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
};

export type DiscoverStackParamList = {
    Discover: undefined;
    Paper: undefined;
    Button: undefined;
    Switch: undefined;
    Popover: undefined;
    Input: undefined;
    TextField: undefined;
    Search: undefined;
    Cell: undefined;
    NavigationCell: undefined;
    ButtonCell: undefined;
    Accordion: undefined;
    Menu: undefined;
    ProgressIndicator: undefined;
    Portal: undefined;
    Dialog: undefined;
    Environment: undefined;
};

export type TemplateStackParamList = {
    Template: undefined;
    Settings: undefined;
};

export type DiscoverStackScreenProps<Screen extends keyof DiscoverStackParamList> =
    NativeStackScreenProps<DiscoverStackParamList, Screen>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;
export type TemplateStackScreenProps<Screen extends keyof TemplateStackParamList> =
    NativeStackScreenProps<TemplateStackParamList, Screen>;

export type RootTabParamList = {
    DiscoverTab: undefined;
    IconsTab: undefined;
    DrawTab: undefined;
    SignTab: undefined;
    TemplateTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    CompositeScreenProps<
        NativeStackScreenProps<RootStackParamList>,
        NativeStackScreenProps<DiscoverStackParamList>
    >
>;
