import React, { PropsWithChildren } from "react";
import { View, useWindowDimensions } from "react-native";
import { ToastEmitter } from "./ToastEmitter";
import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
/**
 * Name should probably be changed
 * This is a provider for service messages and toasts
 */
export const AnnouncementsProvider = ({ children }: PropsWithChildren) => {
    const { width, height } = useWindowDimensions();
    const safeAreaInsets = useSafeAreaInsets();
    const navigationHeaderHeight = getDefaultHeaderHeight({ width, height }, false, 0);
    return <>
        {children}
        <View style={{ position: 'absolute', top: navigationHeaderHeight + safeAreaInsets.top, width: '100%', paddingHorizontal: 16 }}>
            <ToastEmitter direction="down" maxAmountDisplayed={4} isFallback />
        </View>
    </>
}