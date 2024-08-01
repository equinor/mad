# @equinor/mad-core

## 0.9.5

### Patch Changes

-   12a30db: fixed logout button error

## 0.9.4

### Patch Changes

-   01751ef: update mad base url

## 0.9.3

### Patch Changes

-   fc6505c: Add Replace step for all "workspace:\*" dependencies
-   Updated dependencies [fc6505c]
    -   @equinor/mad-auth@0.2.5
    -   @equinor/mad-components@0.14.13
    -   @equinor/mad-insights@0.1.4
    -   @equinor/mad-navigation@0.3.2
    -   @equinor/mad-toast@0.1.2

## 0.9.2

### Patch Changes

-   c9f698e: updated mad api base url
-   Updated dependencies [dab732c]
-   Updated dependencies [dab732c]
-   Updated dependencies [00e6e0a]
-   Updated dependencies [dab732c]
-   Updated dependencies [00e6e0a]
    -   @equinor/mad-components@0.14.12
    -   @equinor/mad-auth@0.2.4
    -   @equinor/mad-toast@0.1.1
    -   @equinor/mad-insights@0.1.3
    -   @equinor/mad-navigation@0.3.1

## 0.9.1

### Patch Changes

-   ff2a015: Fixed incident request url for the feedback screen

## 0.9.0

### Minor Changes

-   4b172f9: Update mad api base urls. Content Security Policies may need to be updated

## 0.8.1

### Patch Changes

-   771e14d: Fixed keyboard covering the input fields in the feedback screen

## 0.8.0

### Minor Changes

-   7ce28df: `addToast` is available. `react-native-safe-area-context` is now a peer dependency

### Patch Changes

-   Updated dependencies [7ce28df]
    -   @equinor/mad-components@0.14.6

## 0.7.2

### Patch Changes

-   09870d8: Several fixes for expo-auth-session implementation
-   Updated dependencies [09870d8]
    -   @equinor/mad-auth@0.2.1

## 0.7.1

### Patch Changes

-   d329bc9: Display authentication method in about screen

## 0.7.0

### Minor Changes

-   14d79cb: Implemented Expo-Auth-Session as authentication alternative from mad-auth

### Patch Changes

-   1fe26dc: Added msal-browser client implementation
-   abb6d1a: Fixed issue with exporting mad-auth package
-   c2404af: `NavigationContainer`: ref can now be attached and forwarded to the underlying
    `NavigationContainer` from `react-navigation`
-   Updated dependencies [1fe26dc]
-   Updated dependencies [14d79cb]
-   Updated dependencies [c2404af]
    -   @equinor/mad-auth@0.2.0
    -   @equinor/mad-navigation@0.3.1

## 0.6.1

### Patch Changes

-   13fbceb: add testID to demo button and the invisible pressable used to display the demo button
-   Updated dependencies [13fbceb]
    -   @equinor/mad-components@0.14.2

## 0.6.0

### Minor Changes

-   6fa6d98: use react-native-markdown-display for release notes

## 0.5.18

### Patch Changes

-   ae11efd: Export types from mad-auth

## 0.5.17

### Patch Changes

-   7cf3344: You can now change the background color of the login screen

## 0.5.16

### Patch Changes

-   Updated dependencies [49e643c]
    -   @equinor/mad-components@0.13.0
    -   @equinor/mad-auth@0.1.24

## 0.5.15

### Patch Changes

-   bfb69d7: Now initiates authentication client when creating core stack in order to make sure it's
    available at all times
-   Updated dependencies [bfb69d7]
    -   @equinor/mad-auth@0.1.23

## 0.5.14

### Patch Changes

-   Updated dependencies [af77bb9]
    -   @equinor/mad-auth@0.1.22

## 0.5.13

### Patch Changes

-   5cdfd6b: demo mode should now always be disabled when logging in
-   dcf40b7: Should no longer update last displayed release notes in demo mode

## 0.5.12

### Patch Changes

-   Updated dependencies [b5badbd]
    -   @equinor/mad-components@0.12.10
    -   @equinor/mad-auth@0.1.21

## 0.5.11

### Patch Changes

-   Updated dependencies [ba1d39f]
    -   @equinor/mad-components@0.12.9
    -   @equinor/mad-auth@0.1.20

## 0.5.10

### Patch Changes

-   256e7de: Fixed overlapping text in Feedback screen on small devices
-   Updated dependencies [8a09b94]
    -   @equinor/mad-components@0.12.8
    -   @equinor/mad-auth@0.1.19

## 0.5.9

### Patch Changes

-   11b42e4: mock release notes should now display correctly when entering demo mode
-   48f5206: Now exits demo mode when signing out

## 0.5.8

### Patch Changes

-   aebe3a2: Now adds username to app insights tracking after authenticating

## 0.5.7

### Patch Changes

-   4724aea: `MadConfig`: `addScreenManually` option added for `login`. Lets the developer add login
    screen to the stack manually in order to access otherwise inaccessible props
-   Updated dependencies [b2b8572]
    -   @equinor/mad-insights@0.1.2

## 0.5.6

### Patch Changes

-   Updated dependencies [cd8350f]
    -   @equinor/mad-components@0.12.7
    -   @equinor/mad-auth@0.1.18

## 0.5.5

### Patch Changes

-   Updated dependencies [964af01]
    -   @equinor/mad-components@0.12.6
    -   @equinor/mad-auth@0.1.17

## 0.5.4

### Patch Changes

-   Updated dependencies [121bbec]
    -   @equinor/mad-components@0.12.5
    -   @equinor/mad-auth@0.1.16

## 0.5.3

### Patch Changes

-   Updated dependencies [8657a23]
    -   @equinor/mad-components@0.12.4
    -   @equinor/mad-auth@0.1.15

## 0.5.2

### Patch Changes

-   Updated dependencies [45f2215]
    -   @equinor/mad-components@0.12.3
    -   @equinor/mad-auth@0.1.14

## 0.5.1

### Patch Changes

-   04713bc: `CreateIncidentScreen`: Now has a scrollview surrounding the content, making the
    content available on smaller devices

## 0.5.0

### Minor Changes

-   b024e0f: login screen has been redesigned. Now requires you to provide a splash screen instead
    of a title and logo

### Patch Changes

-   Updated dependencies [b024e0f]
    -   @equinor/mad-navigation@0.3.0

## 0.4.4

### Patch Changes

-   Updated dependencies [558ca83]
    -   @equinor/mad-components@0.12.2
    -   @equinor/mad-auth@0.1.13

## 0.4.3

### Patch Changes

-   Updated dependencies [8baaf7b]
    -   @equinor/mad-components@0.12.1
    -   @equinor/mad-auth@0.1.12

## 0.4.2

### Patch Changes

-   Updated dependencies [e43285f]
-   Updated dependencies [79fb731]
-   Updated dependencies [37025ac]
    -   @equinor/mad-components@0.12.0
    -   @equinor/mad-auth@0.1.11

## 0.4.1

### Patch Changes

-   Updated dependencies [8adb0dc]
-   Updated dependencies [496cd9a]
    -   @equinor/mad-components@0.11.3
    -   @equinor/mad-auth@0.1.10

## 0.4.0

### Minor Changes

-   b81ade4: `useLanguage`: now returns `defaultLanguage`, `isLanguageSelected` and
    `supportedLanguages` instead of `getDefaultLanguage`, `getIsLanguageSelected` and
    `getSupportedLanguages`
-   b81ade4: `MadConfig`: new property `navigateToMainRouteFn` has been added. This means `"Root"`
    is no longer recognized as the main route for your app. You have to configure this new property
    to navigate the user to your preferred route

## 0.3.11

### Patch Changes

-   Updated dependencies [7eae144]
    -   @equinor/mad-components@0.11.2
    -   @equinor/mad-auth@0.1.9

## 0.3.10

### Patch Changes

-   85da576: Now exports `getAccount`, `signOut`, and `authenticateInteractively`

## 0.3.9

### Patch Changes

-   Updated dependencies [d986ab2]
    -   @equinor/mad-components@0.11.1
    -   @equinor/mad-auth@0.1.8

## 0.3.8

### Patch Changes

-   ea920f3: feat: you're now able to add custom settings

## 0.3.7

### Patch Changes

-   Updated dependencies [3681d0b]
-   Updated dependencies [8441874]
    -   @equinor/mad-components@0.11.0
    -   @equinor/mad-auth@0.1.7

## 0.3.6

### Patch Changes

-   Updated dependencies [f02e61c]
-   Updated dependencies [f02e61c]
    -   @equinor/mad-components@0.10.0
    -   @equinor/mad-auth@0.1.6

## 0.3.5

### Patch Changes

-   37c7524: `What's new Screen`: ok button should now be available regardless of release note
    length
-   Updated dependencies [1fe9f1b]
    -   @equinor/mad-components@0.9.0
    -   @equinor/mad-auth@0.1.5

## 0.3.4

### Patch Changes

-   0d6c310: update color scheme for feedback and added deprecation
-   Updated dependencies [a5607df]
-   Updated dependencies [0d6c310]
    -   @equinor/mad-components@0.8.6
    -   @equinor/mad-auth@0.1.4

## 0.3.3

### Patch Changes

-   b025c9b: Implemented Create Incident Screen
-   009f521: Added support for environment switching
-   Updated dependencies [b025c9b]
    -   @equinor/mad-components@0.8.5
    -   @equinor/mad-navigation@0.2.1
    -   @equinor/mad-insights@0.1.1
    -   @equinor/mad-auth@0.1.3

## 0.3.2

### Patch Changes

-   3d8b22f: `createCoreStackNavigator`: now accepts paramlist as a generic argument (just like
    `createNativeStackNavigator`)

## 0.3.1

### Patch Changes

-   7c9c6da: export most of `mad-insights`' exports

## 0.3.0

### Minor Changes

-   97dca15: Added support for service-messages!

### Patch Changes

-   e9e74b0: export demo mode and language related utilities
-   Updated dependencies [97dca15]
-   Updated dependencies [97dca15]
    -   @equinor/mad-components@0.8.4
    -   @equinor/mad-auth@0.1.2

## 0.2.0

### Minor Changes

-   8e0178c: Added `AboutScreen`

### Patch Changes

-   bcb1f75: Now exports `authenticateSilently`
-   Updated dependencies [59860d3]
-   Updated dependencies [6f62312]
    -   @equinor/mad-components@0.8.3
    -   @equinor/mad-auth@0.1.1

## 0.1.0

### Minor Changes

-   936e5e0: Added application insights support. Now exports NavigationContainer and ErrorBoundary
    with tracking

### Patch Changes

-   64325cd: Implemented Release Notes Screen from Settings
-   00d02ca: Norwegian and english support
-   f96b8e4: `MadConfig`: added redirectUriWeb
-   106a9a8: Portuguese language added
-   ab71601: now exports `createBottomTabNavigator` and `createNativeStackNavigator`, with
    environment-banner as a sub-header
-   e941e2e: Can now select language
-   Updated dependencies [ab71601]
-   Updated dependencies [936e5e0]
-   Updated dependencies [38e818d]
-   Updated dependencies [cf131da]
-   Updated dependencies [936e5e0]
-   Updated dependencies [e941e2e]
    -   @equinor/mad-navigation@0.2.0
    -   @equinor/mad-insights@0.1.0
    -   @equinor/mad-components@0.8.2
    -   @equinor/mad-auth@0.1.0

## 0.0.4

### Patch Changes

-   a22023e: Settings screen implemented
-   4c301e1: Implemented WhatsNewScreen into core package, created ChangeLog component
-   Updated dependencies [c8d9131]
-   Updated dependencies [a22023e]
-   Updated dependencies [a57a362]
-   Updated dependencies [a22023e]
-   Updated dependencies [65d6d69]
-   Updated dependencies [a0999d4]
-   Updated dependencies [4c301e1]
-   Updated dependencies [bda6748]
-   Updated dependencies [08eeb85]
    -   @equinor/mad-components@0.8.1
    -   @equinor/mad-navigation@0.1.17
    -   @equinor/mad-auth@0.0.14

## 0.0.3

### Patch Changes

-   Updated dependencies [fb69a74]
    -   @equinor/mad-components@0.8.0
    -   @equinor/mad-auth@0.0.13
    -   @equinor/mad-navigation@0.1.16

## 0.0.2

### Patch Changes

-   81f95ba: An initial template for mad-core
-   Updated dependencies [c2f7949]
-   Updated dependencies [b8b7a72]
-   Updated dependencies [5a071fb]
-   Updated dependencies [c2f7949]
    -   @equinor/mad-components@0.7.0
    -   @equinor/mad-auth@0.0.12
    -   @equinor/mad-navigation@0.1.15
