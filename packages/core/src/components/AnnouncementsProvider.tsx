import React, { PropsWithChildren, useState } from "react";
import { LayoutAnimation, Pressable, SafeAreaView, Text, View } from "react-native";
import { Paper } from "@equinor/mad-components";
import { HeaderHeightProvider, useHeaderHeight } from "@equinor/mad-navigation";

export const AnnouncementsProvider = ({ children }: PropsWithChildren) => {
    return (
        <HeaderHeightProvider>
            {children}
            <Announcements />
        </HeaderHeightProvider>
    );
};

const ServiceMessageDemo = () => {
    const [displayServiceMessage, setDisplayServiceMessage] = useState(true);
    if (!displayServiceMessage) return null;
    return (
        <Pressable onPress={() => setDisplayServiceMessage(false)}>
            <Paper
                elevation="sticky"
                style={{
                    width: "100%",
                    height: 100,
                    backgroundColor: "lightgreen",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>This is a service message</Text>
            </Paper>
        </Pressable>
    );
};

const Announcements = () => {
    const headerHeight = useHeaderHeight();
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.linear, duration: 200 });
    return (
        <View style={{ position: "absolute", top: headerHeight, left: 0, right: 0 }}>
            <SafeAreaView>
                <View style={{ paddingVertical: 8, gap: 8 }}>
                    <ServiceMessageDemo />
                    <Paper
                        style={{
                            borderRadius: 4,
                            padding: 8,
                            marginHorizontal: 8,
                            backgroundColor: "lightblue",
                        }}
                        elevation="sticky"
                    >
                        <Text>This is a toast</Text>
                    </Paper>
                </View>
            </SafeAreaView>
        </View>
    );
};
