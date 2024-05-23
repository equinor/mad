---
sidebar_label: Replace imports from mad-expo-core
description: Learn how to replace imports from mad-expo-core!
---

# Replace imports from `mad-expo-core`

Replace imports from `mad-expo-core`, and import them from `@equinor/mad-core` instead. If you want
to replace components, you should look for equivalent components in `@equinor/mad-components`.
Otherwise, you should be able to find `authenticateSilently`, and application insights related items
like `track`, `metricStatus`, `metricKeys`, `addTelemetryInitializer`, etc in `@equinor/mad-core`.
If anything is missing, and you think it should be there, create an issue!
