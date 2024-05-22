---
sidebar_label: Use createCoreStackNavigator
description: Learn how to use createCoreStackNavigator!
---

# Use `createCoreStackNavigator`

Next step is replacing your topmost `createStackNavigator`/`createNativeStackNavigator` with
`createCoreStackNavigator` from `@equinor/mad-core`. It takes one argument: The config you created
in step 2. You use it the same way you would a normal `Stack`.

```tsx
import { createCoreStackNavigator } from "@equinor/mad-core";
import { config } from "path/to/mad.config.ts";
import { RootStackParamList } from "path/to/paramList.ts";

const RootStack = createCoreStackNavigator<RootStackParamList>(config);
```

If you have leftover screens from `mad-expo-core` in the stack, they should be removed.
`createCoreStackNavigator` will add similar screens for you behind the scenes.

`SettingsScreen` also has to be added manually. This is because you most likely have app-specific
settings you want to hook up to the settings screen.

If you don't have any app-specific settings, you can just add `SettingsScreen` from
`@equinor/mad-core` with name `"Settings"`. If you do have app-specific settings you want to add, we
suggest creating a wrapper component that passes in the props you need to `SettingsScreen`.

Example stack:

```tsx
const CoreStack = createCoreStackNavigator<RootStackParamList>(config);
function RootNavigator() {
    return (
        <CoreStack.Navigator>
            <CoreStack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <CoreStack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <CoreStack.Screen name="Settings" component={SampleSettingsScreen} />
        </CoreStack.Navigator>
    );
}
```

SampleSettingsScreen:

```tsx
import React from "react";
import { SettingsScreen, SettingsScreenConfiguration } from "@equinor/mad-core";

export const SampleSettingsScreen = () => {
    const appSpecificSettingsConfig: SettingsScreenConfiguration = [
        {
            items: [
                {
                    name: "navigation",
                    title: "navigation",
                    onPress: () => undefined,
                    iconName: "abacus",
                },
                {
                    name: "button",
                    title: "Button",
                    onPress: () => undefined,
                    iconName: "abacus",
                    color: "primary",
                },
                {
                    name: "switch",
                    title: "Test",
                    onChange: () => undefined,
                    isActive: true,
                    iconName: "abacus",
                },
                {
                    name: "custom",
                    key: "Custom",
                    component: () => (
                        <Cell>
                            <Typography>This is a custom setting</Typography>
                        </Cell>
                    ),
                },
            ],
        },
    ];

    return <SettingsScreen config={appSpecificSettingsConfig} />;
};
```

_note: Remember to put your content in a `Cell` when adding custom settings_
