# MAD Insights

MAD insights is an easy to use package for tracking events in application insights.

### Before implementation

You need a resource in Azure you can use. Head to
[https://portal.azure.com](https://portal.azure.com), and head to AppInsights. Search for your
application and see if it already has a resource you can use. If not, create one for each
environment (dev, test, qa, prod). If your project wants to implement long term logging, you need an
additional resource for each environment.

In order to connect to AppInsights, you need the instrumentation key or connection string from a
resource. instrumentation keys are shorter, but might be deprecated in the future.

**_IMPORTANT: for any custom tracking/logging you add to your app, please make sure you don_**’**_t
log sensitive information. Please also keep this in mind when looking at pull requests related to
tracking._**

### Implementation

Install `@equinor/mad-insights` and `react-native-device-info`.

Then, you need to initiate appInsights on app startup. This can be done with `useAppInsights` in
`App.tsx`:

```tsx
import { useAppInsights } from "@equinor/mad-insights";

export default function App() {
    useAppInsights({
        instrumentationKey: "KEY FROM ENV CONFIG",
    });

    return <>...</>;
}
```

If you want to use connection string instead, replace instrumentationKey with connectionString:

```tsx
import { useAppInsights } from "@equinor/mad-insights";

export default function App() {
    useAppInsights({
        connectionString: "CONNECTION STRING FROM ENV CONFIG",
    });

    return <>...</>;
}
```

If you need a long term log, you can add this as well. Please note that you will need an additional
Application Insights resource, and long term logs will hash the user’s ID automatically (using
SHA256 by default, SHA1 is optional and should only be used in special circumstances, as it is not
secure).

```tsx
import { useAppInsights } from "@equinor/mad-insights";

export default function App() {
    useAppInsights({
        connectionString: "CONNECTION STRING FROM ENV CONFIG",
        longTermLog: {
            connectionString: "ANOTHER CONNECTION STRING FROM ENV CONFIG",

            //ONLY USE SHA1 IN SPECIAL CIRCUMSTANCES. IT'S _NOT_ SECURE
            useSHA1: false,
        },
    });

    return <>...</>;
}
```

If implemented correctly, you should be able to test it by starting the app. The app should
automatically log “Application STARTED”. Go to App Insights, click “Events” in the sidebar, and then
“View More Insights” to check.

![Image.png](https://res.craft.do/user/full/3962e2a1-6b41-04e6-5c2f-0ac17166a1f0/doc/43FD48EF-256E-46C3-9B31-C8B139E237C8/5A44AC82-07CD-4C00-AEFB-8C89693404BE_2/Bx7VTgQSiBulhaCacSDEyA41gPlO6iyntQdHubv7NDsz/Image.png)

**Navigation**

Navigation logging can be implemented in your app. We have a `trackNavigation` method you can use
for this.
[Here’s React Navigation’s official doc regarding this issue](https://reactnavigation.org/docs/screen-tracking/).
Below is an example implementation taken from Expense and Pay (with some additional lines of code to
make TypeScript happy). If implemented correctly, it should log all navigation route changes to
Application Insights!

```tsx
export default function Navigation() {
    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef<string | undefined>();

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                const currentRoute = navigationRef.getCurrentRoute();
                if (!currentRoute) return;
                routeNameRef.current = currentRoute.name;
            }}
            onStateChange={async () => {
                const currentRoute = navigationRef.getCurrentRoute();
                if (!currentRoute) return;
                const previousRouteName = routeNameRef.current;
                const currentRouteName = currentRoute.name;

                if (previousRouteName !== currentRouteName) {
                    trackNavigation(currentRouteName);
                }

                routeNameRef.current = currentRouteName;
            }}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}
```

Alternatively, if you use `@equinor/mad-navigation`, this part is made easier for you:

```tsx
import { NavigationContainer } from "@equinor/mad-navigation";

export default function Navigation() {
    return (
        <NavigationContainer onRouteChange={currentRouteName => trackNavigation(currentRouteName)}>
            <RootNavigator />
        </NavigationContainer>
    );
}
```

**Custom tracking**

If you need to add additional tracking to your app, we have some helper methods for that! The
easiest way to track something is to use `trackCustom`, which takes a string for the title, and
optionally an object with data. `trackCustom` logs to both long term log and short term log. If you
want more control over how the tracking should occur, use `track` if you want both long term and
short term tracking, or `trackShortTerm` and `trackLongTerm` respectively.

Example:

```tsx
//this is the easiest way to add some custom tracking
trackCustom("Custom event!", { param1: "param1", param2: "param2" });

//this is identical to the line above
track(metricKeys.CUSTOM, undefined, "Custom event!", { param1: "param1", param2: "param2" });

//this will only log to the short term log
trackShortTerm(metricKeys.CUSTOM, undefined, "Custom event!", {
    param1: "param1",
    param2: "param2",
});

//this will only log to the long term log
trackLongTerm(metricKeys.CUSTOM, undefined, "Custom event!", {
    param1: "param1",
    param2: "param2",
});
```

### Adding common information to all events

If you want to add common telemetry to all events, use the `addTelemetryInitializer` function.

Usage of `addTelemetryInitializer` can be found
[here](https://github.com/microsoft/ApplicationInsights-JS#telemetry-initializers). You can add
multiple envelopes to our application insights instances.

Import the function from `@equinor/mad-insights` in order to use our own instances of application
insights.

```tsx
import { ITelemetryItem, addTelemetryInitializer, useAppInsights } from "@equinor/mad-insights";
import * as APP from "./app.json";

export default function App() {
    useAppInsights({
        instrumentationKey: "SHORT TERM LOG INSTRUMENTATION KEY",
        longTermLog: { instrumentationKey: "LONG TERM LOG INSTRUMENTATION KEY" },
    });
    useEffect(() => {
        // envelope for adding app version to all events
        const appVersionEnvelope = (item: ITelemetryItem) => {
            if (item.data) {
                item.data["app-version"] = APP.expo.version;
            }
        };

        // add envelope to our application insights instances
        addTelemetryInitializer(appVersionEnvelope);
    }, []);

    return <>...</>;
}
```

Once logged, the data can be found in the customDimensions tab:

![Image.png](https://res.craft.do/user/full/3962e2a1-6b41-04e6-5c2f-0ac17166a1f0/doc/57C7E3D1-7632-48B1-98B1-4A8058550CA1/A3977F74-238C-40E7-BE03-759D699C2A09_2/JjH1wx3kx76uENL1eQMYymbfvLK4xGcXKoEkVw7FXxgz/Image.png)
