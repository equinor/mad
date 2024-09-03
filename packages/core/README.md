_`@equinor/mad-core` is a package made for the mad team in Equinor. It is opinionated and will not
work well for other teams. If you work in Equinor and would like to use this package, please contact
us!_

### Introduction

`@equinor/mad-core` is designed to handle the general requirements for your react native app, so
that you can focus on your app's core functionality. It provides:

-   Authentication system, including a login screen and easy authentication for your needs
-   Release notes. No need to worry about displaying release-notes. `mad-core` handles everything
    for you. If the app version is greater than the last time the user used it, a "What's
    New"-screen will be displayed automatically.
-   Language support. If you set your app to support multiple languages, the app will prompt the
    user to select language. Language will also be provided as a setting in the Settings screen if
    multiple languages are supported.
-   Settings Screen. The Settings Screen will provide a lot of your common needs, depending on your
    config. Your app-specific needs should also be easy to add.
-   Application Insights tracking. We provide methods for tracking events in your app. We have also
    added tracking to some of our screens, a `NavigationContainer` you can use to automatically
    track navigation, and a `ErrorBoundary` you can use for user-friendly crash handling, as well as
    crash tracking.
-   Service Message. Any planned maintenance? Just create a service message in the service portal,
    and the message will be displayed in the app automatically.
-   Environment banner. Don't know which environment you're in? Don't worry, we will display the
    information to you
-   About screen. Detailed information about the app. App version, environment endpoints, etc. Wow!
    Amazing!
-   Create incident screen. For creating a new incident in service-now. Available in a
    settings-screen near you!
-   Probably more, but it's hard to keep track of everything. Do you know of anything that should be
    added here? Create an issue!

### Docs

For more information about how to use this package, head to
[our documentation](https://equinor.github.io/mad/docs/mad-core/introduction)
