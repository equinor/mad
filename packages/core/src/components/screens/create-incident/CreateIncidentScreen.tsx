import React, { useState } from "react";
import {
    Button,
    Cell,
    EDSStyleSheet,
    Spacer,
    TextField,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { View, LayoutAnimation, ScrollView, KeyboardAvoidingView } from "react-native";
import { UserInfo } from "./UserInfo";
import { useAccountOrDemoAccount } from "../../../hooks";
import * as Device from "expo-device";
import * as Localization from "expo-localization";
import { useEnvironment, useServiceNow } from "../../../store/mad-config";
import { createIncident, CreateIncidentResponse } from "./createIncident";

export const CreateIncidentScreen = () => {
    const styles = useStyles(createIncidentStyles);
    const account = useAccountOrDemoAccount();
    const serviceNowConfigurationItem = useServiceNow();
    const environment = useEnvironment();
    const [error, setError] = useState<string | CreateIncidentResponse | null>(null);
    const [ticketNumber, setTicketNumber] = useState<string | undefined>(undefined);
    const [ticketTitle, setTicketTitle] = useState<string | undefined>(undefined);
    const [ticketDescription, setTicketDescription] = useState<string | undefined>(undefined);
    const [isSending, setIsSending] = useState(false);
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
        description += `Time Zone: ${Localization.timezone}\n`;
        description += `Locale: ${Localization.locale}\n`;

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
                    <UserInfo infoType={"Device Brand"} infoValue={Device.brand} />
                    <UserInfo infoType={"Device"} infoValue={Device.deviceName} />
                    <UserInfo infoType={"Operating System"} infoValue={Device.osVersion} />
                    <UserInfo infoType={"Time Zone"} infoValue={Localization.timezone} />
                    <UserInfo infoType={"Area"} infoValue={Localization.locale} />
                    {ticketNumber && (
                        <View style={[styles.popupBox, styles.popupSuccess]}>
                            <Typography>{`Ticket number: ${ticketNumber}`}</Typography>
                        </View>
                    )}
                    {error && (
                        <View style={[styles.popupBox, styles.popupDanger]}>
                            <Typography>
                                {/* eslint-disable-next-line @typescript-eslint/no-base-to-string,@typescript-eslint/restrict-template-expressions -- this rule sucks */}
                                {`An error occurred creating your ticket: ${error}`}
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
    },
    popupDanger: {
        borderColor: theme.colors.feedback.danger,
    },
    popupSuccess: {
        borderColor: theme.colors.feedback.success,
    },
}));
