---
"@equinor/mad-navigation": minor
---

BREAKING: no longer exports `createBottomTabNavigator` and `createNativeStackNavigator`. Instead,
the package is exporting `createBottomTabNavigatorFactory` and `createNativeStackNavigatorFactory`,
which you can use to add your own custom sub-headers. This also changes `environmentBannerShown`
option's name to `customSubHeaderShown`
