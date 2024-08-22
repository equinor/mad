---
"@equinor/mad-components": patch
---

Adjusted the `Cell` component. Instead of using `PressableHighlight`, it now uses a different press
component from `react-native-gesture-handler` when the cell is `swipeable`.
