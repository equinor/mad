---
"@equinor/mad-components": minor
---

-   **BREAKING CHANGE**: Removed the `title` prop on the Progress component. Use the `Label`
    component to achieve similar functionality in the future
-   **BREAKING CHANGE**: Removed the counters shown in the description of `Progress.Item` when it is
    populated with tasks. See further down for how to add this back if needed
-   Modernized the `Progress` and `Progress.Item` component look
-   Moved the 'show more' button to underneath the `Progress.Item` component on smaller devices
-   Added option for passing a method into the description prop of `Progress.Item` with tasks. The
    method should return a string and takes in the number of completed tasks and the number of total
    tasks as arguments
