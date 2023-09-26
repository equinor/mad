import React from "react";
import { MadConfig } from "../types";
import {createNativeStackNavigator} from '@equinor/mad-navigation'



type MadStackParamList = {
    "Login": undefined;
    "ReleaseNotes": undefined;
    "Settings": undefined;
    "About": undefined;
    "Feedback": undefined;
    "Root": undefined;
    "NotFound": undefined;
}

const createMadStack = (config: MadConfig) => {
    const Stack = createNativeStackNavigator<MadStackParamList>()
    
    return <Stack.Navigator>
        <Stack.Screen name="Login" component={() => }/>
    </Stack.Navigator>
}