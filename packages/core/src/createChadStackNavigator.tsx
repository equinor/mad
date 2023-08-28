
// @ts-nocheck
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Environment} from '@equinor/mad-components'
import React, { forwardRef} from 'react';
import { Login } from './screens/Login';

type ChadStackConfig = {
    login: {
        logo: string,
    }
    mainRoute: string
}

export const createChadStackNavigator = (config: ChadStackConfig) => {
    const Stack = createNativeStackNavigator();
    const ChadStackScreen = forwardRef<typeof Stack.Screen, PropsOf<typeof Stack.Screen>>((props, ref) => {
        const Component = props.component;
        const FinalComponent = (componentProps) => <>
        <Environment />
        {Component && <Component {...componentProps}/>}
    </>
        return <Stack.Screen ref={ref} {...props} component={FinalComponent} />
    })
    ChadStackScreen.displayName = "ChadStackScreen";

    const ChadStackNavigator = React.forwardRef<typeof Stack.Navigator, PropsOf<typeof Stack.Navigator>>((props, ref) => {
        return <Stack.Navigator ref={ref} {...props}>
            <Stack.Screen name="login" component={({navigation}) => <Login onNavigate={() => navigation.navigate(config.mainRoute)} />} />
            {props.children}
        </Stack.Navigator>
    })
    ChadStackNavigator.displayName = "ChadStackNavigator"

    const ChadStack = {
        Group: Stack.Group,
        Navigator: ChadStackNavigator,
        Screen: ChadStackScreen
    }

    return ChadStack

}

export type PropsOf<T extends (props: any) => any> = Parameters<T>[0]