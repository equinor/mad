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
                    The WorkOrderCell component displays work order information using a title,
                    customizable labels, and property data. It generates multiple PropertyRow
                    elements to present the data, with the option to override default labels for
                    each property. Additionally, the component can show status icons, buttons and
                    highlight overdue work orders based on their status and time constraints.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                title="Work Order Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                equipmentId="EQUIP-123456"
                activeStatusIds="STRT"
                basicStartDate="2023-04-07"
                basicEndDate="2023-09-12"
                requiredEnd="2024-04-23"
                workCenterId="POMISP"
                isHseCritical
                isProductionCritical
                showActions={{
                    startButton: true,
                    completeButton: true,
                    tecoButton: true,
                }}
                onCompleteButtonPress={() => console.log("Complete")}
                onStartButtonPress={() => console.log("Start")}
                onTecoButtonPress={() => console.log("TECO")}
                showSymbols
            />
            <Spacer />

            <WorkOrderCell
                title="Work Order Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                equipmentId="EQUIP-123456"
                activeStatusIds="STRT"
                basicEndDate="2023-04-07"
                requiredEnd="2024-04-23"
                workCenterId="POMISP"
                isHseCritical
                isProductionCritical
                overwriteLabel={{
                    workOrderId: "WO ID",
                    requiredEnd: "Due Date",
                }}
                showActions={{
                    startButton: true,
                    completeButton: true,
                }}
                onCompleteButtonPress={() => console.log("Complete")}
                onStartButtonPress={() => console.log("Start")}
                showSymbols="row"
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    This is a WorkOrderCell.Navigation lets you call an onPress function, this can
                    be used for navigating when the cell is pressed.
                </Typography>
            </View>
            <Spacer />

            <WorkOrderCell.Navigation
                title="Work Order Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                equipmentId="EQUIP-123456"
                activeStatusIds="STRT"
                basicEndDate="2023-04-07"
                basicStartDate="2023-02-07"
                requiredEnd="2024-04-23"
                workCenterId="POMISP"
                isHseCritical
                isProductionCritical
                onPress={() => console.log("Pressed")}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    This workorder cell does not show the symbols for activeStatusIds or required
                    end overdue. This is an optional prop that can be switched on and off.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                title="Basic Work Order Cell"
                workOrderId="25282760"
                maintenanceType="Surface monitoring"
                tagId="TAG-123456"
                valueColor="danger"
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
