import appJson from "./app.json"
import { Platform } from "react-native"

export const getBuildNumber = (): string => {
    const buildNumber = Platform.OS == "ios" ?
        appJson.expo.ios.buildNumber as string :
        appJson.expo.web.buildNumber as string;
    return buildNumber;
}