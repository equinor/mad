import { ScrollView } from "react-native"
import { View } from "../../components/Themed"
import { EDSStyleSheet, useStyles, Typography, Spacer, Search } from "@equinor/mad-components"

export const SearchScreen = () => {
    const styles = useStyles(themedStyles);
    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flex: 1 }}
    >
        <View style={styles.container}>
            <Typography>
                You can use an Input to add left adornments
            </Typography>
            <Spacer />
            <Search placeholder="Search" label="Search for something"></Search>
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
    }
}));