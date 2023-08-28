import {
    Button,
    EDSStyleSheet,
    Menu,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

export const MenuScreen = () => {
    const [firstMenuOpen, setFirstMenuOpen] = useState<boolean>(false);
    const [secondMenuOpen, setSecondMenuOpen] = useState<boolean>(false);
    const [selectedToggleButton, setSelectedToggleButton] = useState<boolean>(false);

    const firstButtonRef = useRef<View>(null);
    const secondButtonRef = useRef<View>(null);

    const style = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={style.contentContainer}
        >
            <View style={style.readableContent}>
                <Typography>
                    The menu opens modally in a non-intrusive manner. Together with the Menu Item
                    component, a user can select between multiple options.
                </Typography>

                <Spacer />

                <Button
                    title="Open menu"
                    ref={firstButtonRef}
                    onPress={() => setFirstMenuOpen(!firstMenuOpen)}
                />
                <Menu
                    anchorEl={firstButtonRef}
                    open={firstMenuOpen}
                    onClose={() => setFirstMenuOpen(false)}
                >
                    <Menu.Item title="First option" />
                    <Menu.Item title="Second option" />
                    <Menu.Item title="Third option" />
                </Menu>

                <Spacer />

                <Typography variant="h2">Customizing items</Typography>
                <Typography>
                    The menu items can be customized using various props. Take a look at this menu
                    for some inspiration.
                </Typography>
                <Spacer />
                <Button
                    title="Inspire me!"
                    ref={secondButtonRef}
                    onPress={() => setSecondMenuOpen(!firstMenuOpen)}
                />
                <Spacer />
                <Menu
                    anchorEl={secondButtonRef}
                    open={secondMenuOpen}
                    onClose={() => setSecondMenuOpen(false)}
                    placement="bottom-start"
                >
                    <Menu.Item title="First option of a left-aligned menu" />
                    <Menu.Item title="This is disabled" disabled />
                    <Menu.Item title="This item has an icon" iconName="face-man" />
                    <Menu.Item title="This item is active" active />
                    <Menu.Item
                        title={
                            selectedToggleButton
                                ? "That means you can do this"
                                : "This won't close the menu"
                        }
                        active={selectedToggleButton}
                        closeMenuOnClick={false}
                        iconName={selectedToggleButton ? "radiobox-marked" : "radiobox-blank"}
                        onPress={() => setSelectedToggleButton(state => !state)}
                    />
                </Menu>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
