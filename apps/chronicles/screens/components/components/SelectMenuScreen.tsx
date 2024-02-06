import { ScrollView } from "react-native";
import { SelectMenu, EDSStyleSheet, useStyles, Spacer, Typography } from "@equinor/mad-components";
import React, { useState } from "react";

export const SelectMenuScreen = () => {
    const styles = useStyles(themeStyles);
    const [selectSingleItem, setSelectSingleItem] = useState([]);
    const [selectMultipleItems, setSelectMultipleItems] = useState([]);

    const singleSelectItems = [
        { title: "Research", value: "research" },
        { title: "Development", value: "development" },
        { title: "Design", value: "design" },
        { title: "Testing", value: "testing" },
    ];

    const multiSelectItems = [
        { title: "Research", value: "research" },
        { title: "Development", value: "development" },
        { title: "Design", value: "design" },
        { title: "Testing", value: "testing" },
    ];

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <Typography variant="h1">Select Menu</Typography>
            <Typography>Select menu</Typography>

            <SelectMenu
                items={singleSelectItems}
                value={selectSingleItem}
                onSelect={(value: []) => setSelectSingleItem(value)}
                placeHolder="Select project types"
            />

            <Spacer />

            <Typography>Multi select menu</Typography>
            <SelectMenu
                items={multiSelectItems}
                value={selectMultipleItems}
                onSelect={(value: []) => setSelectMultipleItems(value)}
                placeHolder="Select project types"
                multiSelect={true}
            />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
