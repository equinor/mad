---
sidebar_label: Implement demo mode
description: Learn how to implement demo mode!
---

# Implement demo mode

Demo mode is handled for you in `@equinor/mad-core`. You should delete your old demo state, and use
`getIsDemoModeEnabled` or `useDemoMode` from `@equinor/mad-core` instead. `@equinor/mad-core` should
handle this state for you. However, if you need access to setting the demo mode state, you can use
`enableDemoMode` and `disableDemoMode`.
