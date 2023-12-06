import React from "react";
import { Cell, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { View } from "react-native";
import { UserInfo } from "./UserInfo";
import { useAccountOrDemoAccount } from "../../../hooks";
import * as Device from "expo-device";
import * as Localization from "expo-localization";

export const CreateIncidentScreen = () => {
    const styles = useStyles(createIncidentStyles);
    const account = useAccountOrDemoAccount();

    return (
        <View style={styles.container}>
            <Cell>
                <View style={styles.topTextContainer}>
                    <Typography variant={"h1"}>Create ticket in ServiceNow</Typography>
                    <Typography group={"paragraph"} variant={"body_short"}>
                        We collect information about your device as part of our feedback process. By
                        submitting, you agree to share the following information:
                    </Typography>
                </View>
                <UserInfo infoType={"User"} infoValue={account?.username} />
                <UserInfo infoType={"Device Brand"} infoValue={Device.brand} />
                <UserInfo infoType={"Device"} infoValue={Device.deviceName} />
                <UserInfo infoType={"Operating System"} infoValue={Device.osVersion} />
                <UserInfo infoType={"Time Zone"} infoValue={Localization.timezone} />
                <UserInfo infoType={"Area"} infoValue={Localization.locale} />
            </Cell>
        </View>
    );
};

const createIncidentStyles = EDSStyleSheet.create(theme => ({
    container: {
        display: "flex",
        paddingVertical: theme.geometry.dimension.cell.minHeight,
    },
    topTextContainer: {
        paddingBottom: theme.geometry.dimension.cell.minHeight,
    },
}));
