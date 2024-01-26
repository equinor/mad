import React from "react";
import { EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { WorkOrderCell } from "@equinor/mad-dfw";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const WorkOrderCellScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    This is the WorkOrderCell component! It takes a title, label and property data
                    in order to display multiple PropertyRows.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                title="Work Order Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                equipmentId="EQUIP-123456"
                activeStatusIds="RDOP"
                basicStartDate="2023-04-07"
                basicEndDate="2023-09-12"
                workCenterId="POMISP"
                onCompleteButtonPress={() => console.log("Complete")}
                onStartButtonPress={() => console.log("Start")}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    This workorder cell lets you call an onPress function, this can be used for
                    navigating when the cell is pressed.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                title="Work Order Navigation Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                onPress={() => console.log("Pressed")}
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
