import { Paper } from "@equinor/mad-components"
import { View, Text} from "react-native"


const PaperScreen = () => {
    return (
        <View style={{backgroundColor: "#D0D0D0", padding: 10, flex: 1, alignItems: "stretch", width: "100%", justifyContent: "space-evenly", height: 2000}}>
            <Paper elevation="none" style={{width: "auto", height: 50}}>
            <Text>none</Text>
            </Paper>
            <Paper elevation="raised" style={{width: "auto", height: 50}}>
            <Text>raised</Text>
            </Paper>
            <Paper elevation="overlay" style={{width: "auto", height: 50}}>
            <Text>overlay</Text>
            </Paper>
            <Paper elevation="sticky" style={{width: "auto", height: 50}}>
            <Text>sticky</Text>
            </Paper>
            <Paper elevation="temporary_nav" style={{width: "auto", height: 50}}>
            <Text>temporary_nav</Text>
            </Paper>
            <Paper elevation="above_scrim" style={{width: "auto", height: 50}}>
            <Text>above_scrim</Text>
            </Paper>
        </View>
    );
}