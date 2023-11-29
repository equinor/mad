---
"@equinor/mad-components": patch
---

`Button`: The `style` prop is now passed to the outermost component to make it behave as expected.
We now export `ButtonSpecificProps` which was previously named `ButtonProps`. `ButtonProps` is still
exported and consists of the types `ButtonSpecificProps` and `ViewProps`.
