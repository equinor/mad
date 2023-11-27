---
"@equinor/mad-components": patch
---

`useEDS`: Added `MaterialCommunityIcons` to the list of loaded fonts since our icons use it. This
means that you no longer need to specifically load `MaterialCommunityIcons` in your project, often
found in `useCachedResources`.
