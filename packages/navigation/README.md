# Mad Navigation

Mad Navigation is a layer on top of React Navigation that provides additional features to provide a
better experience for developers.

### Features

-   Display custom sub-headers automatically on screens.
-   Add onRouteChange prop to navigation containers
-   (more features coming soon)

### Tested on and confirmed working with these versions

_Note: This package will most likely work well with any version of React Navigation v6. If you are
running a newer version of v6 and some features are missing, create an issue_
[_here_](https://github.com/equinor/mad/issues)

| Package                        | Version |
| ------------------------------ | ------- |
| @react-navigation/bottom-tabs  | 6.5.7   |
| @react-navigation/native       | 6.1.6   |
| @react-navigation/native-stack | 6.9.12  |

### Installation

`npm install @react-navigation/native @equinor/mad-navigation`

You also have to install the navigators you want to use, e.g `@react-navigation/bottom-tabs` and
`@react-navigation/native-stack`

### Usage

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
`Screen`’s `options` prop, or in the `Group` or `Navigator`'s `screenOptions` prop

```tsx
<Stack.Navigator
    screenOptions={{
        // add it here
        customSubHeaderShown: false,
    }}
>
    <Stack.Group
        screenOptions={{
            // or here
            customSubHeaderShown: true,
        }}
    >
        <Stack.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
                // or here
                customSubHeaderShown: false,
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

### Header Height Provider

`@react-navigation/elements` has a `useHeaderHeight` hook you can use to get the header height, but
this hook only works within the navigation system. If you need access to the header height outside
of the navigation system, add a `HeaderHeightProvider` to your App.

```tsx
import { HeaderHeightProvider } from "@equinor/mad-navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <HeaderHeightProvider>
                <EDSProvider colorScheme={colorScheme} density={deviceType}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </EDSProvider>
            </HeaderHeightProvider>
        </SafeAreaProvider>
    );
}
```

Then use the `useHeaderHeight` hook from `@equinor/mad-navigation` to access the header height.

### Development

This package has custom navigators created by following
[this guide](https://reactnavigation.org/docs/custom-navigators). If you want to add additional
navigators or update the current navigators to be in sync with React Navigation’s navigators, follow
these steps:

1. Go to
   [React Navigation’s repository](https://github.com/react-navigation/react-navigation/tree/main/packages)
   and find the navigator you want to copy (usually located within `package-name/src/navigators`
   directory). Copy the source code.
2. paste the source code into this package and update imports. Imports that are not provided by the
   react navigation package should be created manually (usually only the `XNavigationConfig`). The
   props can also be recreated by exported types from react navigation + your copied
   `XNavigationConfig`.
3. Modify the `descriptors` using the `createMadDecorators` function.
4. Use the modified descriptors instead of the original descriptors in the return function
