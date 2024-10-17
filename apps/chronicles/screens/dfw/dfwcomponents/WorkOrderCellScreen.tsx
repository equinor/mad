import React, { useState } from "react";
import { EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { WorkOrderCell } from "@equinor/mad-dfw";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SwipeableMethods } from "@equinor/mad-components/dist/components/_internal/SwipeableWithContext";

export const WorkOrderCellScreen = () => {
    const [bookmarked, setBookmarked] = useState(false);
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    The WorkOrderCell component displays work order information using a title,
                    customizable labels, and property data. It automatically formats the work order
                    properties according to the data you provide it with. It also comes with
                    actionable buttons that relate to the work order. All you need to think about is
                    passing it the right data.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                workOrder={{
                    title: "Work Order Cell",
                    workOrderId: "25282760",
                    workOrderType: "PM02",
                    maintenanceType: "Surface monitoring",
                    tagId: "TAG-123456",
                    equipmentId: "EQUIP-123456",
                    activeStatusIds: "RDOP TECO",
                    basicStartDate: "2023-04-07",
                    basicEndDate: "2023-09-12",
                    requiredEndDate: "2024-04-23",
                    workCenterId: "POMISP",
                    isHseCritical: true,
                    isProductionCritical: true,
                }}
                startJobButton={{
                    visible: true,
                    loading: true,
                    onPress: () => console.log("Start"),
                }}
                readyForOperationButton={{
                    visible: true,
                    disabled: true,
                    onPress: () => console.log("Complete"),
                }}
                tecoButton={{
                    visible: true,
                    onPress: () => console.log("TECO"),
                }}
                showSymbols
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    If you want, you can toggle to not display the icons that summarize the work
                    order statuses and the critical flags provided.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell
                workOrder={{
                    title: "Work Order Cell",
                    workOrderId: "25282760",
                    workOrderType: "PM02",
                    maintenanceType: "Surface monitoring",
                    tagId: "TAG-123456",
                    activeStatusIds: "STRT",
                    basicStartDate: "2023-04-07",
                    basicEndDate: "2023-09-12",
                    requiredEndDate: "2024-04-23",
                    workCenterId: "POMISP",
                    isHseCritical: true,
                    isProductionCritical: true,
                }}
                showSymbols={false}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    Check out how passing different props to the WorkOrderCell changes how the cell
                    is displayed.
                </Typography>
            </View>
            <Spacer />
            <View style={styles.workOrderCellList}>
                <WorkOrderCell
                    workOrder={{
                        title: "With tag id only",
                        workOrderType: "PM02",
                        workOrderId: "25282760",
                        tagId: "TAG-123456",
                    }}
                />
                <WorkOrderCell
                    workOrder={{
                        title: "With tag id + tag plant id",
                        workOrderType: "PM02",
                        workOrderId: "25282760",
                        tagId: "TAG-123456",
                        tagPlantId: "1900",
                    }}
                />
                <WorkOrderCell
                    workOrder={{
                        title: "With required end date in the past",
                        workOrderType: "PM02",
                        activeStatusIds: "STRT",
                        workOrderId: "25282760",
                        requiredEndDate: "2022-04-23",
                    }}
                />
                <WorkOrderCell
                    workOrder={{
                        title: "With only basic start date",
                        workOrderType: "PM02",
                        workOrderId: "25282760",
                        basicStartDate: "2023-04-07",
                    }}
                />
                <WorkOrderCell
                    workOrder={{
                        title: "With both basic start date and end date",
                        workOrderType: "PM02",
                        workOrderId: "25282760",
                        basicStartDate: "2023-04-07",
                        basicEndDate: "2023-09-12",
                    }}
                    additionalPropertyRows={[
                        {
                            label: "Additional Label 1",
                            value: "Additional Value 1",
                        },
                        {
                            label: "Additional Label 2",
                            value: "Additional Value 2",
                        },
                    ]}
                />
            </View>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    There is also a navigation version of the WorkOrderCell that allows you to pass
                    an onPress method to the Cell. This also slightly changes the layout of the
                    icons displayed.
                </Typography>
            </View>
            <Spacer />
            <WorkOrderCell.Navigation
                workOrder={{
                    title: "Work Order Cell",
                    workOrderId: "25282760",
                    workOrderType: "PM02",
                    tagId: "TAG-123456",
                    activeStatusIds: "STRT",
                    basicStartDate: "2023-02-07",
                    basicEndDate: "2023-04-07",
                    workCenterId: "POMISP",
                    isHseCritical: true,
                    isProductionCritical: true,
                }}
                onPress={() => console.log("Pressed")}
            />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>The WorkOrderCell.Navigation can also be swipeable.</Typography>
            </View>
            <Spacer />
            <WorkOrderCell.Navigation
                isBookmarked={bookmarked}
                workOrder={{
                    title: "Work Order Cell",
                    workOrderId: "25282760",
                    workOrderType: "PM02",
                    tagId: "TAG-123456",
                    activeStatusIds: "RDOP TECO",
                    basicStartDate: "2023-02-07",
                    basicEndDate: "2023-04-07",
                    workCenterId: "POMISP",
                    isHseCritical: true,
                    isProductionCritical: true,
                }}
                onPress={() => console.log("Pressed")}
                leftSwipeGroup={[
                    {
                        title: "Add bookmark",
                        iconName: "bookmark",
                        color: "primary",
                        onPress: methods => {
                            setBookmarked(true);
                            methods.close();
                        },
                    },
                ]}
                rightSwipeGroup={[
                    {
                        title: "Remove bookmark",
                        iconName: "bookmark-outline",
                        color: "warning",
                        onPress: methods => {
                            setBookmarked(false);
                            methods.close();
                        },
                    },
                ]}
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
    workOrderCellList: {
        gap: theme.spacing.spacer.small,
    },
}));
