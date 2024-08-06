---
"@equinor/react-native-skia-draw": minor
---

-   **BREAKING:** Change method signature of `makeImageSnapshot` to only accept the
    `ImageSnapshotConfig` object (was previously `SKRect`).
-   Add support for setting encoding options on the `makeImageSnapshot` method.
-   Expose raw base64 data through the `makeImageSnapshot` method.
