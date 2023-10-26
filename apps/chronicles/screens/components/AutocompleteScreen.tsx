import React, { useState, createContext, useContext, useCallback } from "react";
import { ScrollView, View } from "react-native";
import {
    EDSStyleSheet,
    useStyles,
    Typography,
    Spacer,
    Autocomplete,
    Button,
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

const awesomeAnimalsAsObjects: Animal = [
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
    // const [selectedAnimals, setSelectedAnimals] = useState([]);
    const [selectedJungleCreature, setSelectedJungleCreature] = useState<string>();
    const [selectedJungleObject, setSelectedJungleObject] = useState();

    // const handleOptionsChange = newOptions => {
    //     setSelectedAnimals(newOptions);
    // };

    // const clearSelection = () => {
    //     setSelectedAnimals([]);
    // };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <Typography variant="h3">Welcome to the Jungle!</Typography>
                <Spacer />
                <Typography>Discover the hidden creatures of the Autocomplete.</Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimalsAsObjects}
                    label="Click me and spot a Jungle Creature"
                    placeholder="Type a name and see who's lurking..."
                    onSelect={setSelectedJungleObject}
                    selectedOption={selectedJungleObject}
                    transformItem={item => item.name}
                />
            </View>
            {/* <View style={styles.container}>
                <Typography>Explore the Jungle Canopy</Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Find a Tree-dweller"
                    placeholder="Who's swinging in the trees?"
                    onSelect={() => null}
                />
            </View> */}
            {/* <View style={styles.container}>
                <Typography>
                    Delve into the Jungle Undergrowth and select multiple animals
                </Typography>
                <Spacer />
                <Autocomplete
                    options={awesomeAnimals}
                    label="Unearth your Ground Critters"
                    placeholder="Who's scuttling below?"
                    onSelect={() => null}
                    multiple
                />
            </View>
            <View style={styles.container}>
                <Autocomplete
                    multiple
                    options={awesomeAnimals}
                    selectedOptions={selectedAnimals}
                    onOptionsChange={handleOptionsChange}
                    label="Click me and spot a Jungle Creature"
                    placeholder="Type a name and see who's lurking..."
                />
                <Spacer />
                {selectedAnimals.length > 0 && <Button title="Clear" onPress={clearSelection} />}
            </View> */}
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
