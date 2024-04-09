import { ScrollView } from "react-native";
import {
    Select,
    EDSStyleSheet,
    useStyles,
    Spacer,
    Typography,
    Label,
} from "@equinor/mad-components";
import React, { useState } from "react";

export const SelectScreen = () => {
    const [selectDisabledItem, setSelectDisabledItem] = useState<string | undefined>(undefined);
    const [selectSingleItem, setSelectSingleItem] = useState<string | undefined>(undefined);
    const [selectMultipleItems, setSelectMultipleItems] = useState<string[]>([]);

    const styles = useStyles(themeStyles);

    const potions = [
        { title: "Brew of Temporary Lactose Tolerance", value: "tempLactoseTolerance" },
        { title: "Fingers to Toes Transformation Elixir", value: "fingersToToes" },
        { title: "Potion of Predicting Past Weather", value: "pastWeather" },
        { title: "Mixture for Making Water Slightly Wet", value: "slightlyWetWater" },
        { title: "Mixture for Turning Wine into Water", value: "wineIntoWater" },
    ];

    const ingredients = [
        { title: "Frog's Tears", value: "frogsTear" },
        { title: "Lion's Whiskers", value: "lionsWhiskers" },
        { title: "Hair of Wolf", value: "wolfHair" },
        { title: "Phoenix Feather", value: "phoenixFeather" },
        { title: "Redcap Fungus", value: "redcapFungus" },
        { title: "Bat Drool", value: "batDrool" },
        { title: "Snail Shell", value: "snailShell" },
        { title: "Cow's Tail", value: "cowsTail" },
    ];

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <Typography variant="h3">Potion Brewery Lab</Typography>

            <Spacer amount="small" />

            <Typography>
                Welcome to the Potion Brewery Lab! Here, you can concoct powerful elixirs using
                ancient recipes and mystical ingredients. With use of the Select component, you can
                choose a single potion or multiple ingrediens from a list.
            </Typography>

            <Spacer />

            <Typography group="paragraph" variant="caption" color="textTertiary">
                This is a standard select component
            </Typography>
            <Label label="Select your potion:" />
            <Spacer amount="small" />

            <Select
                placeholder="Select here..."
                items={potions}
                selectedItem={selectSingleItem}
                onSelect={setSelectSingleItem}
            />

            <Spacer />

            <Typography group="paragraph" variant="caption" color="textTertiary">
                This a mulitselect component
            </Typography>
            <Label label="Select ingrediens:" />
            <Spacer amount="small" />

            <Select.Multi
                placeholder="Select here..."
                items={ingredients}
                selectedItems={selectMultipleItems}
                onSelect={setSelectMultipleItems}
            />

            <Spacer />

            <Typography group="paragraph" variant="caption" color="textTertiary">
                This is select menu with the «disabled» prop
            </Typography>
            <Spacer amount="small" />

            <Select
                placeholder="Select here..."
                items={potions}
                selectedItem={selectDisabledItem}
                onSelect={setSelectDisabledItem}
                disabled
            />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.container.default,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
