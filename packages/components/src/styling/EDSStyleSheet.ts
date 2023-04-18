import { StyleSheet } from 'react-native';
import type { Theme } from './types';

export type ThemeDependentStyles<TProps, TStyleSheet> = (context: Theme, props: TProps) => TStyleSheet;

export const EDSStyleSheet = {
    create<
        TProps,
        TStyleSheet extends StyleSheet.NamedStyles<any>
    >(
        creator: ThemeDependentStyles<TProps, TStyleSheet>
    ) {
        return creator
    },
};