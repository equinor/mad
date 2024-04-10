import { ScrollView } from "react-native";
import {
    Select,
    EDSStyleSheet,
    useStyles,
    Spacer,
    Typography,
    Label,
    SelectItem,
} from "@equinor/mad-components";
import React, { useState } from "react";

const potions: SelectItem<string>[] = [
    { title: "Brew of Temporary Lactose Tolerance", value: "tempLactoseTolerance" },
    { title: "Fingers to Toes Transformation Elixir", value: "fingersToToes" },
    { title: "Potion of Predicting Past Weather", value: "pastWeather" },
    { title: "Mixture for Making Water Slightly Wet", value: "slightlyWetWater" },
    { title: "Mixture for Turning Wine into Water", value: "wineIntoWater" },
] as const;

const ingredients: SelectItem<string>[] = [
    { title: "Frog's Tears", value: "frogsTear" },
    { title: "Lion's Whiskers", value: "lionsWhiskers" },
    { title: "Hair of Wolf", value: "wolfHair" },
    { title: "Phoenix Feather", value: "phoenixFeather" },
    { title: "Redcap Fungus", value: "redcapFungus" },
    { title: "Bat Drool", value: "batDrool" },
    { title: "Snail Shell", value: "snailShell" },
    { title: "Cow's Tail", value: "cowsTail" },
] as const;

type ValidationVariant = "success" | "warning" | "danger" | "none";
const validationOptions: SelectItem<ValidationVariant>[] = [
    { title: "This option yields no validation style", value: "none", icon: "border-none-variant" },
    { title: "This is a valid option", value: "success", icon: "check-circle-outline" },
    { title: "This option comes with a warning", value: "warning", icon: "alert-outline" },
    { title: "This is an invalid option", value: "danger", icon: "alert-circle-outline" },
] as const;

export const SelectScreen = () => {
    const [selectDisabledItem, setSelectDisabledItem] = useState<string | undefined>(undefined);
    const [selectSingleItem, setSelectSingleItem] = useState<string | undefined>(undefined);
    const [selectMultipleItems, setSelectMultipleItems] = useState<string[]>([]);
    const [validationOption, setValidationOption] = useState<ValidationVariant | undefined>(
        undefined,
    );

    const styles = useStyles(themeStyles);
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

            <Spacer amount="small" />
            <Label label="Select your potion:" />
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
            <Spacer amount="small" />

            <Label label="Select ingredients" />
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
            <Spacer />

            <Typography group="paragraph" variant="caption" color="textTertiary">
                This is a select component that is read-only
            </Typography>
            <Spacer amount="small" />

            <Select
                placeholder="Select here..."
                items={potions}
                selectedItem={potions.at(0)?.value}
                onSelect={() => null}
                readOnly
            />
            <Spacer />

            <Typography group="paragraph" variant="caption" color="textTertiary">
                This is a select component that is read-only
            </Typography>
            <Spacer amount="small" />
            <Label label="Select validation option" />
            <Select
                placeholder="Select here..."
                items={validationOptions}
                selectedItem={validationOption}
                onSelect={setValidationOption}
                variant={validationOption === "none" ? undefined : validationOption}
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
