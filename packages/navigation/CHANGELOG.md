# @equinor/mad-navigation

## 0.3.2

### Patch Changes

-   fc6505c: Add Replace step for all "workspace:\*" dependencies

## 0.3.1

### Patch Changes

-   c2404af: `NavigationContainer`: ref can now be attached and forwarded to the underlying
    `NavigationContainer` from `react-navigation`

## 0.3.0

### Minor Changes

-   b024e0f: New option `customSubHeaderFloat`. Set this to `true` if you want the custom sub header
    to float above the content (position: 'absolute') rather than push the content down

## 0.2.1

### Patch Changes

-   b025c9b: Implemented Create Incident Screen

## 0.2.0

### Minor Changes

-   ab71601: BREAKING: no longer exports `createBottomTabNavigator` and
    `createNativeStackNavigator`. Instead, the package is exporting
    `createBottomTabNavigatorFactory` and `createNativeStackNavigatorFactory`, which you can use to
    add your own custom sub-headers. This also changes `environmentBannerShown` option's name to
    `customSubHeaderShown`

## 0.1.17

### Patch Changes

-   65d6d69: fix render bug
-   4c301e1: Implemented WhatsNewScreen into core package, created ChangeLog component
-   Updated dependencies [c8d9131]
-   Updated dependencies [a22023e]
-   Updated dependencies [a57a362]
-   Updated dependencies [a22023e]
-   Updated dependencies [a0999d4]
-   Updated dependencies [bda6748]
-   Updated dependencies [08eeb85]
    -   @equinor/mad-components@0.8.1

## 0.1.16

### Patch Changes

-   Updated dependencies [fb69a74]
    -   @equinor/mad-components@0.8.0

## 0.1.15

### Patch Changes

-   Updated dependencies [c2f7949]
-   Updated dependencies [b8b7a72]
-   Updated dependencies [c2f7949]
    -   @equinor/mad-components@0.7.0

## 0.1.14

### Patch Changes

-   Updated dependencies [a29275a]
-   Updated dependencies [26fbbbe]
    -   @equinor/mad-components@0.6.9

## 0.1.13

### Patch Changes

-   Updated dependencies [e8d96f6]
    -   @equinor/mad-components@0.6.8

## 0.1.12

### Patch Changes

-   8090ec9: added HeaderHeightProvider and useHeaderHeight hook
-   Updated dependencies [b5d2d61]
-   Updated dependencies [8da4b13]
    -   @equinor/mad-components@0.6.7

## 0.1.11

### Patch Changes

-   Updated dependencies [bd5ded0]
    -   @equinor/mad-components@0.6.6

## 0.1.10

### Patch Changes

-   Updated dependencies [adaa7bb]
    -   @equinor/mad-components@0.6.5

## 0.1.9

### Patch Changes

-   Updated dependencies [85b85ea]
    -   @equinor/mad-components@0.6.4

## 0.1.8

### Patch Changes

-   Updated dependencies [aba4173]
    -   @equinor/mad-components@0.6.3

## 0.1.7

### Patch Changes

-   Updated dependencies [1499432]
    -   @equinor/mad-components@0.6.2

## 0.1.6

### Patch Changes

-   Updated dependencies [89e4a73]
    -   @equinor/mad-components@0.6.1

## 0.1.5

### Patch Changes

-   Updated dependencies [2e8e6c7]
-   Updated dependencies [2e8e6c7]
-   Updated dependencies [622bf95]
-   Updated dependencies [2e8e6c7]
    -   @equinor/mad-components@0.6.0

## 0.1.4

### Patch Changes

-   Updated dependencies [a057c98]
    -   @equinor/mad-components@0.5.4

## 0.1.3

### Patch Changes

-   Updated dependencies [2e03adc]
    -   @equinor/mad-components@0.5.3

## 0.1.2

### Patch Changes

-   Updated dependencies [d277791]
    -   @equinor/mad-components@0.5.2

## 0.1.1

### Patch Changes

-   Updated dependencies [d7e40cd]
    -   @equinor/mad-components@0.5.1

## 0.1.0

### Minor Changes

-   25ef39f: first version of mad insights, added a navigation container to mad-navigation

### Patch Changes

-   e49ee8c: The package now exports the `EnvironmentProvider` component for setting the navigation
    environment banner.
-   003e677: first version of mad-navigation
-   Updated dependencies [7d96952]
-   Updated dependencies [c98abdf]
-   Updated dependencies [c7816aa]
    -   @equinor/mad-components@0.5.0
