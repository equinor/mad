import React from "react";
import { ScrollView, View } from "react-native";
import { EDSStyleSheet, useStyles, Typography, Input, Spacer, Icon } from "@equinor/mad-components";

export const InputScreen = () => {
    const styles = useStyles(themedStyles);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
                <Typography>You can use an Input to add left adornments</Typography>
                <Spacer />
                <Input
                    leftAdornments={
                        <View style={styles.adornment}>
                            <Icon name="face-agent" />
                        </View>
                    }
                    placeholder="Anything goes here"
                />

                <Spacer />
                <Typography>Right adornments</Typography>
                <Spacer />
                <Input
                    rightAdornments={
                        <View
                            style={[
                                styles.adornment,
                                {
                                    flexDirection: "row",
                                    width: 100,
                                    backgroundColor: "gray",
                                    gap: 8,
                                },
                            ]}
                        >
                            <Icon name="face-man" color="#FFFFFF" />
                            <Icon name="face-woman" color="#FFFFFF" />
                            <Icon name="face-mask" color="#FFFFFF" />
                        </View>
                    }
                    placeholder="Anything goes here"
                ></Input>
                <Spacer />
                <Typography>Or both</Typography>
                <Spacer />
                <Input
                    rightAdornments={
                        <View style={styles.adornment}>
                            <Icon name="calculator" />
                        </View>
                    }
                    leftAdornments={
                        <View style={styles.adornment}>
                            <Icon name="backspace" />
                        </View>
                    }
                    placeholder="Anything goes here"
                ></Input>

                <Spacer />
                <Typography>These come in different variants</Typography>
                <Spacer />
                <Input readOnly value={"This content is readonly"} />
                <Spacer />
                <Input
                    readOnly
                    multiline
                    value={
                        "This content is readonly and multiline so that you can select text from it!"
                    }
                />
                <Spacer />
                <Input placeholder="Placeholder danger" variant="danger" />
                <Spacer />
                <Input placeholder="Placeholder warning" variant="warning" />
                <Spacer />
                <Input placeholder="Placeholder success" variant="success" />
            </View>
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default,
    },
    adornment: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
}));
