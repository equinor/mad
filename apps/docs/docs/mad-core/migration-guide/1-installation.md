---
sidebar_label: Installation
description: Learn how to install mad core!
---

# Step 1: Installation

Install `react-native-msal` from [this repository](https://github.com/equinor/react-native-msal/).
This is a fork maintained by the mad-team. Always install the newest commit. To install it, add this
to your `package.json`:

```json
"dependencies": {
    "react-native-msal": "github:equinor/react-native-msal#NEWEST_COMMIT_HASH_HERE",
}
```

And then run `npm install`.

Next, install `@equinor/mad-core` and it's peer dependencies
`@react-native-async-storage/async-storage`, `@react-navigation/native`,
`react-native-safe-area-context`, and `react-native-gesture-handler`. _note: Any issues with
installation? Do you suspect some peer-dependencies are missing? Create an issue!_
