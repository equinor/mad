---
sidebar_label: Implement a way to access the settings screen
description: Learn how to implement a way to access the settings screen!
---

# Implement a way to access the settings screen

How the user navigates to settings, is up to the app itself. One common approach is to add a button
in your main screen's `headerRight` position.

```tsx
import React from "react";
import { Button } from "@equinor/mad-components";
import { useCoreStackNavigation } from "@equinor/mad-core";
import { View } from "react-native";

export type GoToSettingsButtonProps = { marginRight?: number };

export function GoToSettingsButton({ marginRight }: GoToSettingsButtonProps) {
    const navigation = useCoreStackNavigation();
    return (
        <View style={{ marginRight }}>
            <Button.Icon
                name="cog-outline"
                variant="ghost"
                onPress={() => navigation.navigate("Settings")}
            />
        </View>
    );
}
```

Results:

![Results](/img/settings-button-example.png)
