---
sidebar_label: Installation
description: Installing the library and prerequisites into your project!
sidebar_position: 1
---

# Installation

The `@equinor/mad-components` package is found in
[npmjs](https://www.npmjs.com/package/@equinor/mad-components). Install it using your favorite
package manager:

<p align="center">
#### npm

`npm install @equinor/mad-components`

#### yarn

`yarn add @equinor/mad-components`

</p>

## Required dependencies

The component library requires the following libraries to properly function:

-   [`react-native-svg`](https://github.com/software-mansion/react-native-svg#installation): For
    indicators
-   [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation):
    For animations
-   [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/installation/):
    For swiping and other gestures

Please make sure to follow these installation instructions before using this package.

## Getting started

Before using the components in your app, make sure to load the fonts and assets required by the
library somewhere in your root component. It is also recommended that you wrap your app in the
`EDSProvider`. This will give you access to dynamically switching between `tablet` and `phone` mode
as well as `dark` and `light` mode support:

```tsx
export default function App() {
    const [hasLoadedEds, edsLoadError] = useEDS();
    if (!hasLoadedEds) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <EDSProvider colorScheme="light" density="phone">
                    <Navigation colorScheme="light" />
                    <StatusBar />
                </EDSProvider>
            </SafeAreaProvider>
        );
    }
}
```
