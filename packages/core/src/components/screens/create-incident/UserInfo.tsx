import React from "react";
import {View} from "react-native";
import {EDSStyleSheet, Typography, useStyles} from "@equinor/mad-components";

type UserInfoProps = {
    infoType: string,
    infoValue: string | null | undefined
}
export function UserInfo({infoType, infoValue}: UserInfoProps) {
    const styles = useStyles(UserInfoStyles);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Typography>{infoType}</Typography>
            </View>
            <View style={styles.infoContainer}>
                <Typography>{infoValue}</Typography>
            </View>
        </View>
    )
}

const UserInfoStyles = EDSStyleSheet.create(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border.medium,
        marginVertical: theme.spacing.textField.paddingVertical,
    },
    infoContainer: {
        flexBasis: "50%",
    },
}));