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

export const AutocompleteScreen = () => {
    const styles = useStyles(themedStyles);
    const [selectedToggleButtons, setSelectedToggleButtons] = useState<string[]>([]);
    const handleToggle = (animal: string) => {
        if (selectedToggleButtons.includes(animal)) {
            // If the animal is already selected, remove it from the array
            setSelectedToggleButtons(prevState => prevState.filter(item => item !== animal));
        } else {
            // If the animal is not selected, add it to the array
            setSelectedToggleButtons(prevState => [...prevState, animal]);
        }
    };
    const toggleOptions = awesomeAnimals.map(animal => ({
        title: animal,
        active: selectedToggleButtons.includes(animal),
        iconName: selectedToggleButtons.includes(animal) ? "radiobox-marked" : "radiobox-blank",
        onPress: () => handleToggle(animal),
    }));

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <Typography variant="h3">Welcome to the Jungle!</Typography>
                <Spacer />
                <Typography>Discover the hidden creatures of the Autocomplete.</Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Click me and spot a Jungle Creature"
                    placeholder="Type a name and see who's lurking..."
                    onSelect={selectedOption => console.log(`Spotted: ${selectedOption}`)}
                />
            </View>
            <View style={styles.container}>
                <Typography>Explore the Jungle Canopy</Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Find a Tree-dweller"
                    placeholder="Who's swinging in the trees?"
                    onSelect={selectedOption => console.log(`Found: ${selectedOption}`)}
                />
            </View>
            <View style={styles.container}>
                <Typography>
                    Delve into the Jungle Undergrowth and select multiple animals
                </Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Unearth your Ground Critters"
                    placeholder="Who's scuttling below?"
                    onSelect={selectedOption => console.log(`Unearthed: ${selectedOption}`)}
                    toggleOptions={toggleOptions}
                />
            </View>
            <View style={styles.container}>
                <Typography variant="h3">Selected Animals:</Typography>
                {selectedToggleButtons.map(animal => (
                    <Typography key={animal}>{animal}</Typography>
                ))}
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
