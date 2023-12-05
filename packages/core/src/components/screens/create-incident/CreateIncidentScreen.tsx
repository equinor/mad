import React from "react";
import { Cell, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { View } from "react-native";
import {UserInfo} from "./UserInfo";

export const CreateIncidentScreen = () => {
    const styles = useStyles(createIncidentStyles);

    return (
        <View style={styles.container}>
            <Cell>
                <Typography variant={"h1"}>Create ticket in ServiceNow</Typography>
                <Typography group={"paragraph"} variant={"body_short"}>
                    We collect information about your device as part of our feedback process. By
                    submitting, you agree to share the following information:
                </Typography>
                <UserInfo infoType={"User"} infoValue={"TBD"}/>
            </Cell>
        </View>
    );
};

const createIncidentStyles = EDSStyleSheet.create(theme => ({
    container: {
        display: "flex",
        paddingTop: theme.geometry.dimension.cell.minHeight,
    },
}));
