import {
    Button,
    Cell,
    EDSStyleSheet,
    Spacer,
    TextField,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import * as Device from "expo-device";
import * as Localization from "expo-localization";
import React, { useState } from "react";
import { KeyboardAvoidingView, LayoutAnimation, Platform, ScrollView, View } from "react-native";
import { useAccountOrDemoAccount } from "../../../hooks";
import { useEnvironment, useServiceNow } from "../../../store/mad-config";
import { createIncident, CreateIncidentResponse } from "./createIncident";
import { UserInfo } from "./UserInfo";

export const CreateIncidentScreen = () => {
    const [error, setError] = useState<string | CreateIncidentResponse | null>(null);
    const [ticketNumber, setTicketNumber] = useState<string | undefined>(undefined);
    const [ticketTitle, setTicketTitle] = useState<string | undefined>(undefined);
    const [ticketDescription, setTicketDescription] = useState<string | undefined>(undefined);
    const [isSending, setIsSending] = useState(false);

    const account = useAccountOrDemoAccount();
    const serviceNowConfigurationItem = useServiceNow();
    const environment = useEnvironment();
    const styles = useStyles(createIncidentStyles);

    const timeZone = Localization.getCalendars()[0]?.timeZone ?? "Unknown TimeZone";
    const locale = Localization.getLocales()[0]?.languageTag ?? "Unknown Locale";

    const onSubmit = () => {
        setIsSending(true);
        const data = {
            callerEmail: account?.username,
            title: ticketTitle,
            description: createDescription(),
        };
        createIncident(data, environment, serviceNowConfigurationItem)
            .then(response => {
                LayoutAnimation.configureNext({
                    duration: 500,
                    update: {
                        type: LayoutAnimation.Types.easeInEaseOut,
                    },
                    create: {
                        type: LayoutAnimation.Types.easeInEaseOut,
                        property: LayoutAnimation.Properties.opacity,
                    },
                });
                if (response.result.details.number) {
                    setTicketNumber(response.result.details.number);
                } else {
                    setError(response);
                }
                setTicketDescription(undefined);
                setTicketTitle(undefined);
                setIsSending(false);
            })
            .catch(setError)
            .finally(() => setIsSending(false));
    };

    const createDescription = () => {
        let description = "";

        description += `User: ${account?.username}\n`;
        description += `Device Brand: ${Device.brand}\n`;
        description += `Device: ${Device.deviceName}\n`;
        description += `Operating System: ${Device.osVersion}\n`;
        description += `Time Zone: ${timeZone}\n`;
        description += `Locale: ${locale}\n`;

        return `${description}\n${ticketDescription}`;
    };
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={115}
            style={styles.container}
        >
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Spacer />
                <Cell>
                    <View style={styles.topTextContainer}>
                        <Typography variant={"h1"}>Create ticket in ServiceNow</Typography>
                        <Typography group={"paragraph"} variant={"body_short"}>
                            We collect information about your device as part of our feedback
                            process. By submitting, you agree to share the following information:
                        </Typography>
                    </View>
                    <UserInfo infoType={"User"} infoValue={account?.username} />
                    {Platform.OS !== "web" && (
                        <UserInfo infoType={"Device Brand"} infoValue={Device.brand} />
                    )}
                    {Platform.OS !== "web" && (
                        <UserInfo infoType={"Device"} infoValue={Device.deviceName} />
                    )}
                    <UserInfo infoType={"Operating System"} infoValue={Device.osVersion} />
                    <UserInfo infoType={"Time Zone"} infoValue={timeZone} />
                    <UserInfo infoType={"Locale"} infoValue={locale} />
                    {ticketNumber && (
                        <View style={[styles.popupBox, styles.popupSuccess]}>
                            <Typography>Ticket number: </Typography>
                            <Typography selectable>{ticketNumber}</Typography>
                        </View>
                    )}
                    {error && (
                        <View style={[styles.popupBox, styles.popupDanger]}>
                            <Typography>An error occurred creating your ticket:</Typography>
                            <Typography selectable>
                                {error instanceof Error ? error.message : ""}
                            </Typography>
                        </View>
                    )}
                    <View style={styles.titleField}>
                        <TextField
                            onChange={setTicketTitle}
                            value={ticketTitle}
                            placeholder={"Write a title for the Service Now ticket"}
                            readOnly={isSending}
                        />
                    </View>
                    <View style={styles.titleField}>
                        <TextField
                            multiline
                            onChange={setTicketDescription}
                            placeholder={
                                "Write a complete description of your issue. You do not need to provide information about your device."
                            }
                            value={ticketDescription}
                            readOnly={isSending}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            disabled={!ticketTitle || !ticketDescription || isSending}
                            onPress={onSubmit}
                            style={{ width: 81 }}
                            title={"Send"}
                        ></Button>
                    </View>
                </Cell>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const createIncidentStyles = EDSStyleSheet.create(theme => ({
    container: {
        flex: 1,
    },
    topTextContainer: {
        paddingBottom: theme.geometry.dimension.cell.minHeight,
    },
    titleField: {
        marginVertical: theme.spacing.textField.paddingVertical * 3,
    },
    multiTextField: {
        height: theme.geometry.dimension.dialog.minHeight,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    popupBox: {
        padding: 24,
        marginTop: 16,
        borderWidth: 2,
        borderRadius: 4,
        flexDirection: "row",
        gap: 8,
        flexWrap: "wrap",
    },
    popupDanger: {
        borderColor: theme.colors.feedback.danger,
    },
    popupSuccess: {
        borderColor: theme.colors.feedback.success,
    },
}));
