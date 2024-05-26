import React from "react";
import { Button, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";
import { ToastTypes, addToast } from "@equinor/mad-toast";
import { useCoreStackNavigation } from "@equinor/mad-core";

export function ToastScreen() {
    const styles = useStyles(themeStyles);
    const navigation = useCoreStackNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.readableContent}>
                <Typography>
                    Try out our different toast types by pressing the buttons below!
                </Typography>
                <View style={{ flexDirection: "row", gap: 16, marginTop: 8 }}>
                    <Button
                        title={"Success"}
                        color="primary"
                        onPress={() => addToast({ type: ToastTypes.SUCCESS, text: "Success!" })}
                    />
                    <Button
                        title={"Info"}
                        color="secondary"
                        onPress={() =>
                            addToast({
                                type: ToastTypes.INFO,
                                text: "Display some information here!",
                            })
                        }
                    />
                    <Button
                        title={"Warning"}
                        variant="outlined"
                        color="danger"
                        onPress={() =>
                            addToast({ type: ToastTypes.WARNING, text: "Kinda dangerous" })
                        }
                    />
                    <Button
                        title={"Error"}
                        color="danger"
                        onPress={() =>
                            addToast({ type: ToastTypes.ERROR, text: "Very dangerous!" })
                        }
                    />
                </View>
                <Typography>
                    You can adjust the duration of your toast. Default duration is 4 seconds
                </Typography>
                <View style={{ flexDirection: "row", gap: 16, marginTop: 8 }}>
                    <Button
                        title={"1 second"}
                        color="primary"
                        onPress={() =>
                            addToast({ type: ToastTypes.INFO, text: "1 second!", duration: 1000 })
                        }
                    />
                    <Button
                        title={"2 seconds"}
                        color="secondary"
                        onPress={() =>
                            addToast({ type: ToastTypes.INFO, text: "2 seconds!", duration: 2000 })
                        }
                    />
                    <Button
                        title={"10 seconds!"}
                        color="danger"
                        onPress={() =>
                            addToast({
                                type: ToastTypes.ERROR,
                                text: "10 seconds!",
                                duration: 10000,
                            })
                        }
                    />
                </View>
                <Typography>You can also add onPress events to your toast</Typography>
                <View style={{ flexDirection: "row", gap: 16, marginTop: 8 }}>
                    <Button
                        title={"Press me!"}
                        color="primary"
                        onPress={() =>
                            addToast({
                                type: ToastTypes.INFO,
                                text: "Press me to navigate to Settings!",
                                duration: 6000,
                                onPress: hide => {
                                    navigation.navigate("Settings");
                                    hide();
                                },
                            })
                        }
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        flex: 1,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
