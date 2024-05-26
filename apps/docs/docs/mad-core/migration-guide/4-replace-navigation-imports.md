---
sidebar_label: Replace react-navigation imports
description: Learn how to replace react-navigation imports!
---

# Replace `react-navigation` imports

In order for us to display environment banners and service messages on all screens, you need to
import `createNativeStackNavigator`/`createBottomTabsNavigator` from `@equinor/mad-core` instead of
`react-navigation`. Currently we don't support other navigators. Do you need support for other
navigators? Create an issue!

By default environment banners and service messages should display if the screen header is
displayed. If you need to override this behaviour, you can use the `customSubHeaderShown` option.
For more information on using `customSubHeaderShown`, refer to `@equinor/mad-navigation`'s
documentation.

Using `@equinor/mad-core`'s `NavigationContainer` is optional, but it adds application insights
navigation tracking for you automatically, which is a nice feature to have!

```tsx
import {
    createBottomTabNavigator,
    createNativeStackNavigator,
    createCoreStackNavigator,
    NavigationContainer,
} from "@equinor/mad-core";
```
