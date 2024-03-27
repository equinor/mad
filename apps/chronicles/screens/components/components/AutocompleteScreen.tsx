import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
    EDSStyleSheet,
    useStyles,
    Typography,
    Spacer,
    Autocomplete,
} from "@equinor/mad-components";

const awesomeAnimals = [
    "Snow Leopard",
    "Red Panda",
    "Platypus",
    "Narwhal",
    "Axolotl",
    "Mantis Shrimp",
    "Tarsier",
    "Fennec Fox",
    "Komodo Dragon",
    "Okapi",
    "Aardvark",
    "Quokka",
    "Kakapo",
    "Dik-dik",
    "Thorny Devil",
    "Sun Bear",
    "Gharial",
    "Toucan",
    "Mandarinfish",
    "Proboscis Monkey",
    "Giant Pangolin",
    "Flying Fox",
    "Sloth Bear",
    "Nudibranch",
    "Ocelot",
    "Sugar Glider",
    "Cassowary",
    "Lemur",
    "Peacock Mantis Shrimp",
    "Tamarin",
];

type Animal = {
    id: number;
    name: string;
};

const animals: Animal[] = [
    { id: 1, name: "Snow Leopard" },
    { id: 2, name: "Red Panda" },
    { id: 3, name: "Platypus" },
    { id: 4, name: "Narwhal" },
    { id: 5, name: "Axolotl" },
    { id: 6, name: "Mantis Shrimp" },
    { id: 7, name: "Tarsier" },
    { id: 8, name: "Fennec Fox" },
    { id: 9, name: "Komodo Dragon" },
    { id: 10, name: "Okapi" },
];

export const AutocompleteScreen = () => {
    const styles = useStyles(themedStyles);
    const [selectedAwesomeAnimal, setSelectedAwesomeAnimal] = useState<string>();
    const [selectedAnimal, setSelectedAnimal] = useState<Animal>();
    const [selectedAnimals, setSelectedAnimals] = useState<Animal[]>([]);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <Typography variant="h3">Welcome to the Jungle!</Typography>
                <Spacer />
                <Typography>Discover the hidden creatures of the Autocomplete.</Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Click me and spot a Jungle Creature"
                    placeholder="Type a name and see who's lurking..."
                    onSelect={animal => setSelectedAwesomeAnimal(animal)}
                    selectedOption={selectedAwesomeAnimal}
                />
            </View>
            <View style={styles.container}>
                <Typography>The autocomplete can accept all types of options.</Typography>
                <Spacer />
                <Autocomplete
                    options={animals}
                    label="Click me and spot a Jungle Creature"
                    placeholder="Type a name and see who's lurking..."
                    onSelect={animal => setSelectedAnimal(animal)}
                    selectedOption={selectedAnimal}
                    transformItem={item => `${item.id} - ${item.name}`}
                />
            </View>
            <View style={styles.container}>
                <Typography>This is a autocomplete with multiple selections.</Typography>
                <Spacer />
                <Autocomplete.Multiselect
                    options={animals}
                    label="Click me and spot multiple Jungle Creatures"
                    placeholder="Type a name and see who's lurking..."
                    onSelect={animal => setSelectedAnimals(animal)}
                    selectedOptions={selectedAnimals}
                    transformItem={item => item.name}
                />
            </View>
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default,
    },
}));
