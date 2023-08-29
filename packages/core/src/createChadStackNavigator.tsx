

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Environment} from '@equinor/mad-components'
import React from 'react';
import { Login } from './screens/Login';

type ChadStackConfig = {
    login: {
        logo: string,
    }
    mainRoute: string
}

export const createChadStackNavigator = <T extends ParamListBase,>(config: ChadStackConfig) => {
    const Stack = createNativeStackNavigator<T>();
    const renderScreen = (props) => {
        const Component = props.component;
        const FinalComponent = (componentProps) => <>
        <Environment environment="dev" />
        {Component && <Component {...componentProps}/>}
    </>
        return <Stack.Screen {...props} component={FinalComponent} />
    }

    const ChadStackNavigator = React.forwardRef<typeof Stack.Navigator, PropsOf<typeof Stack.Navigator>>((props, ref) => {
        return <Stack.Navigator ref={ref} {...props}>
            {renderScreen({name:"login", component:({navigation}) => <Login onNavigate={() => navigation.navigate(config.mainRoute)} />})}
            {props.children.map(child => <Stack.Screen component={child} />)}
        </Stack.Navigator>
    })
    ChadStackNavigator.displayName = "Navigator"

    const ChadStack = {
        Group: Stack.Group,
        Navigator: ChadStackNavigator,
        Screen: renderScreen
    }

    return ChadStack

}

export type PropsOf<T extends (props: any) => any> = Parameters<T>[0]

