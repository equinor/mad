---
"@equinor/mad-core": minor
---

BREAKING: replace `createCoreStackNavigator` with
`createStackCoreNavigator`/`createNativeStackCoreNavigator`. Under the hood they use
`createStackNavigator`/`createNativeStackNavigator` respectively. If you don't want any breaking
changes in your app, migrate `createCoreStackNavigator` to `createNativeStackCoreNavigator`. The
stack-type you use is displayed in the about-screen.
