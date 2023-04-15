import { StyleSheet } from 'react-native';
import { Theme } from './EDSTheme';

export type ThemeDependentStyles<T> = (context: Theme) => T | StyleSheet.NamedStyles<T>;

export const EDSStyleSheet = {
    create<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<unknown>>(creator: ThemeDependentStyles<T>) {
        return creator
    },
};