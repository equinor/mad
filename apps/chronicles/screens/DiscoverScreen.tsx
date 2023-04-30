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
                    title="Popover"
                    description="Contaner floating over some reference element"
                    iconName="party-popper"
                    onPress={() => navigation.navigate("Popover")}
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
                    title="TextField"
                    description="Enter and edit text"
                    iconName="card-text-outline"
                    onPress={() => navigation.navigate("TextField")}
                />
                <Cell.Navigation
                    title="Input"
                    description="Fancier text input"
                    iconName="form-textbox"
                    onPress={() => navigation.navigate("Input")}
                />

                <Cell.Navigation
                    title="Search"
                    description="Search for content"
                    iconName="magnify"
                    onPress={() => navigation.navigate("Search")}
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
            </Cell.Group>
        </ScrollView>
    );
}
