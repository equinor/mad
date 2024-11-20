---
"@equinor/mad-components": minor
---

-   **BREAKING CHANGE**: Changed name of `Theme` typing to `Token`
-   `useToken` no longer calculates the correctly themed token on every mount. This should come with
    some nice performance increases
