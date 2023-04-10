import { MADLegacyButton } from "@equinor/mad-components";
import { StyleSheet } from "react-native";

/*TODO EDS secondary outlined variation?*/
export const ClearSignatureButton = (props: { onPress: () => void }) => (
    <MADLegacyButton
        title={"Clear signature"}
        onPress={props.onPress}
        disabled={false}
        busy={false}
        textStyle={styles.clearButtonTextStyle}
        viewStyle={styles.clearButtonViewStyle}
    />
);

const styles = StyleSheet.create({
    clearButtonViewStyle: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
    },
    clearButtonTextStyle: { color: "black" },
});
