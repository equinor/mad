import React from "react";
import { LayoutAnimation, Linking, SafeAreaView, View } from "react-native";
import {
    EDSStyleSheet,
    PressableHighlight,
    Typography,
    useStyles,
    CellSwipeItem,
} from "@equinor/mad-components";
import { ExpansionToggle } from "./components/ExpansionToggle";
import { DisableableSwipeable } from "./components/DisableableSwipeable";
import { useServiceMessageState } from "./ServiceMessageProvider";
import { resolveMessageFromServiceMessage } from "./utils/resolveMessageFromServiceMessage";

export const ServiceMessageBanner = () => {
    const styles = useStyles(theme);
    const {
        serviceMessage,
        isDismissed,
        setIsDismissed,
        isExpanded,
        setIsExpanded,
        expansionEnabled,
        setExpansionEnabled,
        isError,
    } = useServiceMessageState();
    const dismissAndURLIsVisible = !expansionEnabled || (expansionEnabled && isExpanded);
    const onPressServiceMessage = () => {
        LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.easeInEaseOut, duration: 100 });
        setIsExpanded(isExpanded => !isExpanded);
    };
    if (isDismissed) return null;
    if (!serviceMessage) return null;
    const { message, url } = resolveMessageFromServiceMessage(serviceMessage, isError);
    return (
        <SafeAreaView>
            <DisableableSwipeable
                disabled={!dismissAndURLIsVisible}
                renderRightActions={() => (
                    <CellSwipeItem
                        title="Remove"
                        iconName="close"
                        color="danger"
                        onPress={() => setIsDismissed(true)}
                    />
                )}
            >
                <PressableHighlight
                    style={styles.container}
                    onPress={onPressServiceMessage}
                    disabled={!expansionEnabled}
                >
                    <View style={{ flex: 1 }}>
                        <Typography
                            color={styles.text.color}
                            numberOfLines={expansionEnabled && !isExpanded ? 2 : 0}
                            onTextLayout={e => {
                                if (e.nativeEvent.lines.length > 2) {
                                    setExpansionEnabled(true);
                                }
                            }}
                        >
                            {message}
                        </Typography>
                        {dismissAndURLIsVisible && (
                            <>
                                {url && (
                                    <Typography
                                        group="interactive"
                                        variant="link"
                                        style={styles.text}
                                        onPress={() => void Linking.openURL(url)}
                                    >
                                        {url}
                                    </Typography>
                                )}
                                <Typography
                                    variant="label"
                                    bold
                                    color={styles.text.color}
                                    style={{ marginTop: 8 }}
                                >
                                    Swipe left to remove
                                </Typography>
                            </>
                        )}
                    </View>
                    {expansionEnabled && <ExpansionToggle isExpanded={isExpanded} />}
                </PressableHighlight>
            </DisableableSwipeable>
        </SafeAreaView>
    );
};

const theme = EDSStyleSheet.create(themeStyles => ({
    container: {
        backgroundColor: themeStyles.colors.container.warning,
        padding: themeStyles.spacing.dialog.padding,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: themeStyles.colors.text.feedbackWarning,
    },
}));
