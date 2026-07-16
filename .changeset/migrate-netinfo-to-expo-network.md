---
"@equinor/mad-core": minor
---

Replace `@react-native-community/netinfo` peer dependency with `expo-network`. The `OfflineBanner`
component now uses `expo-network`'s `useNetworkState()` hook instead of `useNetInfo()`.

**Migration:** Replace `@react-native-community/netinfo` with `expo-network` in your app's
dependencies.
