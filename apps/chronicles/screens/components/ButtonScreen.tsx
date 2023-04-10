import { Button } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ButtonScreen = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flexDirection: "row" }}
        >
            <View>
                <Button>Press me!</Button>
            </View>
        </ScrollView>
    );
};
