import { Cell, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";


export const CellScreen = () => {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    The Cell is an essential container in our component library.
                    It serves as a reliable building block, forming the basis for many of the components we offer.
                </Typography>
            </View>
            <Spacer />
            <Cell style={{ height: 60 }} />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">Groups</Typography>
                <Typography>
                    Things become more intriguing when we begin to arrange our cells into a cell group.
                    Not only do they come together visually, but we also have the option to add a group title.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group title="My first cell group">
                <Cell style={{ height: 60 }} />
                <Cell style={{ height: 60 }} />
                <Cell style={{ height: 60 }} />
            </Cell.Group>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography variant="h2">Adornments</Typography>
                <Typography>
                    Cells are segmented into three columns.
                    Feel free to mix and match these in your own cells according to your needs.
                </Typography>
            </View>
            <Spacer />
            <Cell.Group>
                <Cell leftAdornment={
                    <View style={styles.adornment}>
                        <Typography> This is the left adornment</Typography>
                    </View>
                }
                    style={{ height: 60 }} />
                <Cell style={{ height: 60 }} >
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
                    style={{ height: 60 }}
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
                    Cells can be responsive to touch events. Add the onPress prop to the cell and watch it become interactive.
                </Typography>
            </View>
            <Spacer />
            <Cell onPress={() => null} style={{ height: 60 }} >
                <View style={{ justifyContent: "center", flex: 1 }}>
                    <Typography>This cell responds to touch!</Typography>
                </View>
            </Cell>
        </ScrollView >
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
        flex: 1,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: theme.colors.interactive.primary,
        borderRadius: theme.geometry.border.elementBorderRadius,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
}));