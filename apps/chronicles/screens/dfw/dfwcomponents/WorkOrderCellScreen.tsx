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
                workOrder="25282760"
                maintenanceType="Surface monitoring"
                functionalLocation="TAG-123456"
                equipment="EQUIP-123456"
                activeStatus="STRT"
                basicStartDate="2023-04-07"
                basicFinishDate="2023-09-12"
                requiredEnd="2024-04-23"
                workCenter="POMISP"
                isHseCritical
                isProductionCritical
                actions={{
                    startButton: {
                        visible: true,
                    },
                    readyForOperationButton: {
                        visible: true,
                    },
                    tecoButton: {
                        visible: true,
                    },
                }}
                onReadyForOperationPress={() => console.log("Complete")}
                onStartButtonPress={() => console.log("Start")}
                onTecoButtonPress={() => console.log("TECO")}
                showSymbols
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    WorkOrderCell with status icons aligned in a row and a customized label for the
                    Work Order ID.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                title="Work Order Cell"
                workOrder="25282760"
                maintenanceType="Surface monitoring"
                functionalLocation="TAG-123456"
                equipment="EQUIP-123456"
                activeStatus="STRT"
                basicFinishDate="2023-04-07"
                requiredEnd="2024-04-23"
                workCenter="POMISP"
                isHseCritical
                isProductionCritical
                overwriteLabel={{
                    functionalLocation: "Adjusted label",
                }}
                actions={{
                    startButton: {
                        visible: true,
                    },
                    readyForOperationButton: {
                        visible: true,
                    },
                }}
                onReadyForOperationPress={() => console.log("Complete")}
                onStartButtonPress={() => console.log("Start")}
                showSymbols
                symbolDirection="row"
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
                workOrder="25282760"
                maintenanceType="Surface monitoring"
                functionalLocation="TAG-123456"
                equipment="EQUIP-123456"
                activeStatus="STRT"
                basicFinishDate="2023-04-07"
                basicStartDate="2023-02-07"
                requiredEnd="2024-04-23"
                workCenter="POMISP"
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
                workOrder="25282760"
                maintenanceType="Surface monitoring"
                functionalLocation="TAG-123456"
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
