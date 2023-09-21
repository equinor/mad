# MAD Error Boundary

MAD Error Boundary is a package that wraps `react-error-boundary` to make a common error boundary
screen for our apps

### Usage

Install `@equinor/mad-error-boundary` and it's peer dependency `react-native-safe-area-context`.

Import and use the Error boundary component like so:

```tsx
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "@equinor/mad-error-boundary";

const App = () => {
    return (
        <SafeAreaProvider>
            {/*If you care about dark mode, Add an EDSProvider between the SafeAreaProvider and ErrorBoundary*/}
            <ErrorBoundary
                onError={(error, info) => {
                    /*Track error here*/
                }}
            >
                {/*Children here */}
            </ErrorBoundary>
        </SafeAreaProvider>
    );
};
```
