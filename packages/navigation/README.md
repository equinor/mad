# Mad Navigation

Mad Navigation is a layer on top of React Navigation that provides additional features to provide a
better experience for developers.

### Features

-   Display environment banners automatically on screens.
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

If you want environment banners to display, you also need to install `@equinor/mad-components`
version 0.5.0 or higher (unless you use `mad-core`)

### Usage

Follow [React Navigation’s documentation](https://reactnavigation.org/docs/getting-started/). When
you get to the point where you are creating a navigator, import any of our supported navigators
listed below:

-   `createBottomTabNavigator`
-   `createNativeStackNavigator`

For example:

```tsx
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//replace the above line with the line below
import { createNativeStackNavigator } from "@equinor/mad-navigation";
```

### Environment banner

In order for environment banners to work, they need to know which environment they are in.

If you are using mad-core, this step will be fixed for you. If not, you have to add an
`EnvironmentProvider` to your application. `mad-navigation` re-exports `EnvironmentProvider` from
`mad-components`, and we recommend you to use that version.

```tsx
//import environment provider from mad navigation to make sure you are using the correct version
import { EnvironmentProvider } from "@equinor/mad-navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <EDSProvider colorScheme={colorScheme} density={deviceType}>
                <EnvironmentProvider environment={environment}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </EnvironmentProvider>
            </EDSProvider>
        </SafeAreaProvider>
    );
}
```

For more information on how environment banners work, please refer to the mad-components docs

Once the environment provider is set up, you should see environment banners in your application. By
default, the environment banner will display if navigator’s header is displayed. if you want to
overwrite this behaviour, use the custom `environmentBannerShown` option. This option can be applied
in the `Screen`’s `options` prop, or in the `Group` or `Navigator`'s `screenOptions` prop

```tsx
<Stack.Navigator
    screenOptions={{
        // add it here
        environmentBannerShown: false,
    }}
>
    <Stack.Group
        screenOptions={{
            // or here
            environmentBannerShown: true,
        }}
    >
        <Stack.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
                // or here
                environmentBannerShown: false,
            }}
        />
    </Stack.Group>
</Stack.Navigator>
```

_CAUTION: Environment banners will not work properly if `headerLargeTitle` is set to true, and
`headerLargeTitle` make it hard for elements in your application to calculate header height. It is
therefore not recommended to use `headerLargeTitle`. If you still decide to use it, we recommend
disabling environment banners where it is used, as the environment banner may cause the header to
not work as expected._

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
        environmentBannerShown: false,
    }}
>
```

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
