---
sidebar_label: Add ErrorBoundary (optional)
description: Learn how to add ErrorBoundary to your app!
---

# Add `ErrorBoundary` (optional)

`@equinor/mad-core` provides an `ErrorBoundary` component that automatically logs crashes to
Application Insights. It gives the user a more user-friendly crash behaviour, and gives you
information about why the app crashes.

_note: The error boundary might not catch native code related crashes. It should almost always catch
javascript-related crashes, though._

`ErrorBoundary` should be as far up your stack as possible, in `App.tsx`:

```tsx
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    }
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <SpeakUpSessionProvider>
                    <EDSProvider colorScheme="light" density="tablet">
                        <SafeAreaProvider>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar style="dark" />
                        </SafeAreaProvider>
                    </EDSProvider>
                </SpeakUpSessionProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    );
}
```
