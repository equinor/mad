/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
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
    Popover: undefined;
    Input: undefined;
    TextField: undefined;
    Search: undefined;
};

export type DiscoverStackScreenProps<
    Screen extends keyof DiscoverStackParamList
> = NativeStackScreenProps<DiscoverStackParamList, Screen>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    Discover: undefined;
    Icons: undefined;
    Draw: undefined;
    Sign: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        CompositeScreenProps<
            NativeStackScreenProps<RootStackParamList>,
            NativeStackScreenProps<DiscoverStackParamList>
        >
    >;
