import React from "react";
import { ScrollView } from "react-native";

import { Cell, Spacer } from "@equinor/mad-components";
import { ComponentNavigationCell } from "../../components/ComponentNavigationCell";

export default function DiscoverScreen() {
    return (
        <ScrollView testID="scroll-view-components" contentInsetAdjustmentBehavior="automatic">
            <Spacer />

            <Cell.Group title="data display">
                <ComponentNavigationCell
                    title="Chip"
                    description="Small labels often used in filters!"
                    iconName="chip"
                    componentName="chip"
                />
                <ComponentNavigationCell
                    title="Popover"
                    description="Container floating over some reference element"
                    iconName="party-popper"
                    componentName="popover"
                />
                <ComponentNavigationCell
                    title="Menu"
                    description="Select from a list of options in a popover"
                    iconName="menu"
                    componentName="menu"
                />
                <ComponentNavigationCell
                    title="Select"
                    description="A dropdown menu with selectable options"
                    iconName="menu-open"
                    componentName="select"
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="inputs">
                <ComponentNavigationCell
                    title="Button"
                    description="Buttons, buttons, and more buttons!"
                    iconName="gesture-tap-button"
                    componentName="button"
                />
                <ComponentNavigationCell
                    title="Text Field"
                    description="Fancier input field"
                    iconName="card-text-outline"
                    componentName="textField"
                />
                <ComponentNavigationCell
                    title="Input"
                    description="Enter and edit text"
                    iconName="form-textbox"
                    componentName="input"
                />
                <ComponentNavigationCell
                    title="Autocomplete"
                    description="Suggest options as the user types"
                    iconName="format-list-bulleted-square"
                    componentName="autocomplete"
                />
                <ComponentNavigationCell
                    title="Search"
                    description="Search for content"
                    iconName="magnify"
                    componentName="search"
                />
                <ComponentNavigationCell
                    title="Selection Controls"
                    description="Turn me on and off"
                    iconName="toggle-switch-off-outline"
                    componentName="selectionControls"
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="surfaces">
                <ComponentNavigationCell
                    title="Paper"
                    description="Multiple elevations and shadows"
                    iconName="paper-roll-outline"
                    componentName="paper"
                />
                <ComponentNavigationCell
                    title="Accordion"
                    description="Collapsable and expandable containers"
                    iconName="arrow-collapse-vertical"
                    componentName="accordion"
                />
                <ComponentNavigationCell
                    title="Tabs"
                    description="Because spaces didn't make the cut"
                    iconName="tab"
                    componentName="tabs"
                    screenOptions={{ headerLargeTitle: false }}
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="feedback">
                <ComponentNavigationCell
                    title="Progress Indicators"
                    description="Multiple ways to tell the user that stuff is happening"
                    iconName="loading"
                    componentName="progressIndicator"
                />
                <ComponentNavigationCell
                    title="Progress"
                    description="Track and display progress with customizable indicators."
                    iconName="progress-download"
                    componentName="progress"
                />
                <ComponentNavigationCell
                    title="Dialog"
                    description="When the user has to take action"
                    iconName="menu"
                    componentName="dialog"
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="cells">
                <ComponentNavigationCell
                    title="Cell"
                    description="This screen is filled with them!"
                    iconName="table-row"
                    componentName="cell"
                />
                <ComponentNavigationCell
                    title="Navigation Cell"
                    description="Navigate to it by pressing one"
                    iconName="sign-direction"
                    componentName="navigationCell"
                />
                <ComponentNavigationCell
                    title="Button Cell"
                    description="Click me!"
                    iconName="gesture-tap-button"
                    componentName="buttonCell"
                />
                <ComponentNavigationCell
                    title="Switch Cell"
                    description="Toggle me!"
                    iconName="toggle-switch"
                    componentName="switchCell"
                />
            </Cell.Group>

            <Spacer />

            <Cell.Group title="utility">
                <ComponentNavigationCell
                    title="Portal"
                    description="Send react nodes up the render tree!"
                    iconName="cake"
                    componentName="portal"
                />
                <ComponentNavigationCell
                    title="Environment"
                    description="Visualizes your app environment"
                    iconName="island"
                    componentName="environment"
                />
                <ComponentNavigationCell
                    title="Error boundary"
                    description="Display an error screen when the app panics"
                    iconName="alert-decagram-outline"
                    componentName="errorBoundary"
                />
            </Cell.Group>
        </ScrollView>
    );
}
