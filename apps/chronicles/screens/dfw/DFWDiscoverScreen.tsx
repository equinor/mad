import React from "react";
import { ScrollView } from "react-native";

import { Cell, Spacer } from "@equinor/mad-components";
import { DFWComponentNavigationCell } from "../../components/DFWComponentNavigationCell";

export function DFWDiscoverScreen() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />
            <Cell.Group title="Inspection">
                <DFWComponentNavigationCell
                    title="Property Row"
                    description="Displays a label and a value in rows"
                    iconName="table-row"
                    componentName="propertyRow"
                />
            </Cell.Group>
        </ScrollView>
    );
}
