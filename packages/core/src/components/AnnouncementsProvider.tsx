import React, { PropsWithChildren } from "react";
import { LayoutAnimation, SafeAreaView, View } from "react-native";
import { HeaderHeightProvider, useHeaderHeight } from "@equinor/mad-navigation";

export const AnnouncementsProvider = ({ children }: PropsWithChildren) => {
    return (
        <HeaderHeightProvider>
            {children}
            <Announcements />
        </HeaderHeightProvider>
    );
};

const Announcements = () => {
    const headerHeight = useHeaderHeight();
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.linear, duration: 200 });
    return (
        <View style={{ position: "absolute", top: headerHeight, left: 0, right: 0 }}>
            <SafeAreaView>
                {/**
                 * Floating items can be put here
                 */}
            </SafeAreaView>
        </View>
    );
};
