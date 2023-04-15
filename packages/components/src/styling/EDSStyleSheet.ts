import { StyleSheet } from 'react-native';
import type { Theme } from './types';

export type ThemeDependentStyles<TName, TProps> = (context: Theme, props?: TProps) => TName | StyleSheet.NamedStyles<TName>;

export const EDSStyleSheet = {
    create<TProps, TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>>(creator: ThemeDependentStyles<TName, TProps>) {
        return creator
    },
};