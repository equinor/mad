import React, { useState } from "react";
import {
    Button,
    Cell,
    EDSStyleSheet,
    Radio,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const CellScreen = () => {
    const styles = useStyles(themeStyles);
    const [activeToggleIndex, setActiveToggleIndex] = useState<number>(0);

    const [isCheckedRadio1, setIsCheckedRadio1] = useState(false);
    const [isCheckedRadio2, setIsCheckedRadio2] = useState(true);

    const handleRadioChange = (newState: boolean) => {
        setIsCheckedRadio2(newState);
        setIsCheckedRadio1(!newState);
    };

    const MyCustomCell = (customCellProps: { title: string }) => (
        <Cell
            rightAdornment={
                <Button.Toggle activeIndex={activeToggleIndex}>
                    <Button title="1" onPress={() => setActiveToggleIndex(0)} />
                    <Button title="2" onPress={() => setActiveToggleIndex(1)} />
                </Button.Toggle>
            }
        >
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Typography>{customCellProps.title}</Typography>
            </View>
        </Cell>
    );

    return (
        <ScrollView
            testID="scroll-view-cell"
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    The Cell is an essential container in our component library. It serves as a
                    reliable building block, forming the basis for many of the components we offer.
                </Typography>
            </View>
            <Spacer />
            <Cell />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">Groups</Typography>
                <Typography>
                    Things become more intriguing when we begin to arrange our cells into a cell
                    group. Not only do they come together visually, but we also have the option to
                    add a group title.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group title="My first cell group">
                <Cell />
                <Cell />
                <Cell />
            </Cell.Group>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    The clumping behavior applies for any type of cell. The group below contains
                    three cells: one switch cell, one navigation cell and one custom cell made for
                    this screen. You would typically create app specific cells for your apps needs.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group>
                <Cell.Switch
                    title="This cell is a switch cell"
                    isActive={false}
                    onChange={() => null}
                />
                <Cell.Navigation
                    title="This is a navigation cell"
                    description="And this is its description!"
                    iconName="navigation-outline"
                    onPress={() => null}
                />
                <MyCustomCell title="And this is a custom cell" />
            </Cell.Group>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">Adornments</Typography>
                <Typography>
                    Cells are segmented into three columns. Feel free to mix and match these in your
                    own cells according to your needs.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group>
                <Cell
                    leftAdornment={
                        <View style={styles.adornment}>
                            <Typography>This is the left adornment</Typography>
                        </View>
                    }
                />
                <Cell>
                    <View style={styles.child}>
                        <Typography>This element is a child of Cell</Typography>
                    </View>
                </Cell>
                <Cell
                    leftAdornment={
                        <View style={styles.adornment}>
                            <Typography> Left</Typography>
                        </View>
                    }
                    rightAdornment={
                        <View style={styles.adornment}>
                            <Typography> Right</Typography>
                        </View>
                    }
                >
                    <View style={styles.child}>
                        <Typography>Main content</Typography>
                    </View>
                </Cell>
            </Cell.Group>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">OnPress events</Typography>
                <Typography>
                    Cells can be responsive to touch events. Add the onPress prop to the cell and
                    watch it become interactive.
                </Typography>
            </View>
            <Spacer />

            <Cell onPress={() => null}>
                <Typography>This cell responds to touch!</Typography>
            </Cell>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    Cells can also have an additional pressable surface. This can be used to add
                    functionality to the cell without interfering with the onPress event.
                </Typography>
            </View>
            <Spacer />
            <Cell
                onPress={() => null}
                additionalSurface={{
                    onPress: () => handleRadioChange(!isCheckedRadio2),
                    component: (
                        <View style={styles.additionalSurface}>
                            <Radio checked={isCheckedRadio1} />
                        </View>
                    ),
                }}
            >
                <Typography> This cell has an additional pressable surface</Typography>
            </Cell>

            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">Swipe items</Typography>
                <Typography>
                    Cells can also be swiped in either direction to reveal actions. Take a look at
                    the different variants below.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group title="Swipe items">
                <Cell
                    rightSwipeGroup={[
                        {
                            title: "hello world",
                        },
                    ]}
                >
                    <Typography>This cell has right swipe items.</Typography>
                </Cell>
                <Cell
                    leftSwipeGroup={[
                        {
                            title: "first",
                            iconName: "nature",
                        },
                        {
                            title: "second",
                            iconName: "water",
                            color: "warning",
                        },
                        {
                            title: "third",
                            iconName: "star",
                            color: "danger",
                        },
                    ]}
                >
                    <Typography>This cell has multiple left swipe items.</Typography>
                </Cell>
                <Cell
                    leftSwipeGroup={[
                        {
                            iconName: "human-male",
                            color: "success",
                        },
                        {
                            iconName: "human-female",
                            color: "secondary",
                        },
                    ]}
                    rightSwipeGroup={[
                        {
                            iconName: "face-man",
                            color: "warning",
                        },
                        {
                            iconName: "face-woman",
                            color: "primary",
                        },
                    ]}
                >
                    <Typography>This cell has both, with icons only</Typography>
                </Cell>
                <Cell
                    testID="ping-pong"
                    leftSwipeGroup={[
                        {
                            title: "PING",
                            color: "primary",
                            onPress: methods => methods.openRight(),
                        },
                    ]}
                    rightSwipeGroup={[
                        {
                            title: "PONG",
                            color: "secondary",
                            onPress: methods => methods.openLeft(),
                        },
                    ]}
                >
                    <Typography>You can play ping pong with this cell</Typography>
                </Cell>
            </Cell.Group>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    child: {
        flex: 1,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: theme.colors.interactive.primary,
        borderRadius: theme.geometry.border.elementBorderRadius,
    },
    adornment: {
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: theme.colors.interactive.primary,
        borderRadius: theme.geometry.border.elementBorderRadius,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    additionalSurface: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
        paddingLeft: theme.spacing.container.paddingHorizontal,
        paddingRight: theme.spacing.container.paddingHorizontal,
    },
}));
