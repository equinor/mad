# Mad Toast

Mad Toast is a wrapper around `react-native-toast-message` that adds EDS styling to the toasts, and
a queueing system for toasts.

### Features

-   EDS styling
-   Toast queues
-   Simplified API

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
            type: "SUCCESS",
            text: "Hello",
        });
    };

    return <Button title="Show toast" onPress={showToast} />;
}
```

### Docs

For more detailed information about how to use the package, head to our
[documentation page](equinor.github.io/mad/docs/mad-toast/introduction)
