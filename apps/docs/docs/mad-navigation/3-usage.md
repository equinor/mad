---
sidebar_label: Usage
description: Learn how to use this package!
---

# Usage

If you want to add custom sub-headers to your navigation system, you first have to create custom
navigator-creator functions. You can do so with `createBottomTabNavigatorFactory` and
`createNativeStackNavigatorFactory`.

Step 1: Create your custom sub-header:

```tsx
import { Text } from "react-native";
export const CustomSubHeader = () => <Text>This is a custom sub-header</Text>;
```

Step 2: Create your new navigator-creator functions:

```tsx
import {
    createBottomTabNavigatorFactory,
    createNativeStackNavigatorFactory,
} from "@equinor/mad-navigation";
import { CustomSubHeader } from "path/to/subHeader";

export const createBottomTabNavigator = createBottomTabNavigatorFactory(CustomSubHeader);
export const createNativeStackNavigator = createNativeStackNavigatorFactory(CustomSubHeader);
```

Follow [React Navigation’s documentation](https://reactnavigation.org/docs/getting-started/). When
you get to the point where you are creating a navigator, import your custom navigator-creators.

You can also import `NavigationContainer` from this package if you need a `onRouteChange` prop.

For example:

```tsx
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//replace the above line with the line below
import { createNativeStackNavigator } from "path/to/createNativeStackNavigator";
```

Once you've finished the steps above, you should see your custom sub-header in your application. By
default, the sub-header will display if navigator’s header is displayed. if you want to overwrite
this behaviour, use the custom `customSubHeaderShown` option. This option can be applied in the
`Screen`’s `options` prop, or in the `Group` or `Navigator`'s `screenOptions` prop. You can also use
`customSubHeaderFloat` if you want the sub header to float above the content instead of pushing the
screen's content down.

```tsx
<Stack.Navigator
    screenOptions={{
        // add it here
        customSubHeaderShown: false,
        customSubHeaderFloat: false,
    }}
>
    <Stack.Group
        screenOptions={{
            // or here
            customSubHeaderShown: true,
            customSubHeaderFloat: true,
        }}
    >
        <Stack.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
                // or here
                customSubHeaderShown: false,
                customSubHeaderFloat: false,
            }}
        />
    </Stack.Group>
</Stack.Navigator>
```

_CAUTION: sub-headers will not work properly if `headerLargeTitle` is set to true, and
`headerLargeTitle` make it hard for elements in your application to calculate header height. It is
therefore not recommended to use `headerLargeTitle`. If you still decide to use it, we recommend
disabling sub-headers where it is used, as the sub-headers may cause the header to not work as
expected._

```tsx
<DiscoverStack.Navigator
    initialRouteName="Discover"
    screenOptions={{
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: true,
        headerLargeTitleStyle: { fontFamily: "Equinor-Bold" },
        headerTitleStyle: {
            fontFamily: "Equinor-Regular",
        },
        headerBackTitleStyle: { fontFamily: "Equinor-Regular" },
        customSubHeaderShown: false,
    }}
>
```
