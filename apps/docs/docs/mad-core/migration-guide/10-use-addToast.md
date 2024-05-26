# Use `addToast`

`@equinor/mad-core` uses `@equinor/mad-toast` under the hood, and injects a `ToastEmitter` for you.
Simply import `addToast` from `@equinor/mad-core` and use it to display toasts.

```tsx
import { addToast } from "@equinor/mad-core";
import { Button } from "@equinor/mad-components";

const DisplayToastButton = () => {
    const displayToast = () =>
        addToast({
            type: "info",
            text: "Hello world!",
            duration: 1000,
            onPress: () => console.log("You pressed the toast"),
        });
    return <Button title="Press me to display a toast" onPress={displayToast} />;
};
```

The addition of this feature gives you the ability to remove `react-native-salute` from your
project. If you need more information about `addToast`, refer to
[`@equinor/mad-toast`'s documentation](https://equinor.github.io/mad/docs/mad-toast/api).
