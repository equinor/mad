import {
    createBottomTabNavigatorFactory,
    createNativeStackNavigatorFactory,
} from "@equinor/mad-navigation";
import { MadCoreSubHeader } from "./MadCoreSubHeader";

export const createBottomTabNavigator: ReturnType<typeof createBottomTabNavigatorFactory> = createBottomTabNavigatorFactory(MadCoreSubHeader);
export const createNativeStackNavigator: ReturnType<typeof createNativeStackNavigatorFactory> = createNativeStackNavigatorFactory(MadCoreSubHeader);
