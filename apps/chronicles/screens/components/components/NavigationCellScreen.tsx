import React from "react";
import { Cell, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const NavigationCellScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    The navigation cell is a pressable cell with a predefined layout. {"\n"}
                    In its most basic form, it looks pretty boring...
                </Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                rightSwipeGroup={[
                    {
                        title: "test",
                    },
                ]}
                title="I'll take you anywhere!"
                onPress={() => null}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>...but you may style it with a description...</Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="Some title here"
                description="And this part makes it more clear, or adds something else."
                onPress={() => null}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>...and an icon</Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="Fly me to the moon"
                description="Let me play among the stars"
                iconName="moon-waning-crescent"
                onPress={() => null}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>...and even additional titles!</Typography>
                <Typography>These can either be shown next to the title</Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="This is a navigation cell with additional titles."
                description="And this is still its description!"
                additionalTitlesRight={[
                    "Additional Title One",
                    "Additional Title Two",
                    "Additional Title Three",
                ]}
                iconName="navigation-outline"
                onPress={() => null}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>or under the description</Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="This is a navigation cell with additional titles."
                description="And this is still its description!"
                additionalTitlesUnder={[
                    "Additional Title One",
                    "Additional Title Two",
                    "Additional Title Three",
                    "Additional Title Four",
                    "Additional Title Five",
                    "Additional Title Six",
                ]}
                iconName="navigation-outline"
                onPress={() => null}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    Should the text labels take up to much space, the cell will limit the title to
                    be no more than one line and the description to two lines.
                </Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus purus, tristique quis magna sed, vehicula varius eros. Quisque volutpat in lacus in venenatis"
                description="Etiam luctus ligula lacinia, interdum risus a, cursus dolor. Nulla facilisi. Donec et urna nec ante consequat pharetra in ac nulla. Quisque feugiat, tortor a egestas suscipit, lectus augue venenatis ligula, eget placerat purus urna quis tellus"
                iconName="baby-face-outline"
                onPress={() => null}
            />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
