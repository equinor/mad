---
sidebar_label: Getting started
description: Learn how to configure your app to use mad toast!
---

# How to get started

### Installation

`npm install @equinor/mad-toast`

### Usage

Add ToastEmitter component to your app. It should be the last child in your View hierarchy in order
to prevent other components from rendering above it:

```tsx
import { ToastEmitter } from "@equinor/mad-toast";

export function App(props) {
    return (
        <>
            {/* ... */}
            <ToastEmitter />
        </>
    );
}
```

Then use `addToast` anywhere in your app

```tsx
// Foo.jsx
import { addToast } from "@equinor/mad-toast";
import { Button } from "react-native";

export function Foo(props) {
    const showToast = () => {
        addToast({
            type: "success",
            text: "Hello",
        });
    };

    return <Button title="Show toast" onPress={showToast} />;
}
```
