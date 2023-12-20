import React from "react";
import { ScrollView } from "react-native";
import { DiscoverStackParamList } from "../types";

import { Cell, Spacer } from "@equinor/mad-components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function DiscoverScreen({
    navigation,
}: NativeStackScreenProps<DiscoverStackParamList>) {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Spacer />

            <Cell.Group title="data display">
                <Cell.Navigation
                    title="Chip"
                    description="Small labels often used in filters!"
                    iconName="chip"
                    onPress={() => navigation.navigate("Chip")}
                />
                <Cell.Navigation
                    title="Popover"
                    description="Container floating over some reference element"
                    iconName="party-popper"
                    onPress={() => navigation.navigate("Popover")}
                />
                <Cell.Navigation
                    title="Menu"
                    description="Select from a list of options in a popover"
                    iconName="menu"
                    onPress={() => navigation.navigate("Menu")}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="inputs">
                <Cell.Navigation
                    title="Button"
                    description="Buttons, buttons, and more buttons!"
                    iconName="gesture-tap-button"
                    onPress={() => navigation.navigate("Button")}
                />
                <Cell.Navigation
                    title="Text Field"
                    description="Fancier input field"
                    iconName="card-text-outline"
                    onPress={() => navigation.navigate("TextField")}
                />
                <Cell.Navigation
                    title="Input"
                    description="Enter and edit text"
                    iconName="form-textbox"
                    onPress={() => navigation.navigate("Input")}
                />
                <Cell.Navigation
                    title="Autocomplete"
                    description="Suggest options as the user types"
                    iconName="format-list-bulleted-square"
                    onPress={() => navigation.navigate("Autocomplete")}
                />
                <Cell.Navigation
                    title="Search"
                    description="Search for content"
                    iconName="magnify"
                    onPress={() => navigation.navigate("Search")}
                />
                <Cell.Navigation
                    title="Selection Controls"
                    description="Turn me on and off"
                    iconName="toggle-switch-off-outline"
                    onPress={() => navigation.navigate("SelectionControls")}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="surfaces">
                <Cell.Navigation
                    title="Paper"
                    description="Multiple elevations and shadows"
                    iconName="paper-roll-outline"
                    onPress={() => navigation.navigate("Paper")}
                />
                <Cell.Navigation
                    title="Accordion"
                    description="Collapsable and expandable containers"
                    iconName="arrow-collapse-vertical"
                    onPress={() => navigation.navigate("Accordion")}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="feedback">
                <Cell.Navigation
                    title="Progress Indicators"
                    description="Multiple ways to tell the user that stuff is happening"
                    iconName="loading"
                    onPress={() => navigation.navigate("ProgressIndicator")}
                />
                <Cell.Navigation
                    title="Dialog"
                    description="When the user has to take action"
                    iconName="menu"
                    onPress={() => navigation.navigate("Dialog")}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="cells">
                <Cell.Navigation
                    title="Cell"
                    description="This screen is filled with them!"
                    iconName="table-row"
                    onPress={() => navigation.navigate("Cell")}
                />
                <Cell.Navigation
                    title="Navigation Cell"
                    description="Navigate to it by pressing one"
                    iconName="sign-direction"
                    onPress={() => navigation.navigate("NavigationCell")}
                />
                <Cell.Navigation
                    title="Button Cell"
                    description="Click me!"
                    iconName="gesture-tap-button"
                    onPress={() => navigation.navigate("ButtonCell")}
                />
                <Cell.Navigation
                    title="Switch Cell"
                    description="Toggle me!"
                    iconName="toggle-switch"
                    onPress={() => navigation.navigate("SwitchCell")}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="utility">
                <Cell.Navigation
                    title="Portal"
                    description="Send react nodes up the render tree!"
                    iconName="cake"
                    onPress={() => navigation.navigate("Portal")}
                />
                <Cell.Navigation
                    title="Environment"
                    description="Visualizes your app environment"
                    iconName="island"
                    onPress={() => navigation.navigate("Environment")}
                />
                <Cell.Navigation
                    title="Error boundary"
                    description="Display an error screen when the app panics"
                    iconName="alert-decagram-outline"
                    onPress={() => navigation.navigate("ErrorBoundary")}
                />
            </Cell.Group>
        </ScrollView>
    );
}
