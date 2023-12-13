# @equinor/mad-components

## 0.8.2

### Patch Changes

-   38e818d: Added support for ignoring outside presses on the `Popover` component
-   cf131da: Implemented Radio component. Added showcase to Chronicles
-   e941e2e: `PressableHighlight`: Allows for press event propagation if disabled `Radio`: Allows
    for press event propagation if `onPress` prop is not defined `Cell`: cell children now in center
    (fixes issue with text not being centered when there is only one line of text)

## 0.8.1

### Patch Changes

-   c8d9131: Fixed flexing issue in `LinearProgress`
-   a22023e: export SwitchColor type
-   a57a362: `useEDS`: Added `MaterialCommunityIcons` to the list of loaded fonts since our icons
    use it. This means that you no longer need to specifically load `MaterialCommunityIcons` in your
    project, often found in `useCachedResources`.
-   a22023e: Export buttoncellprops and switchcellprops
-   a0999d4: Added Typography link variant to interactive group
-   bda6748: `Button`: The `style` prop is now passed to the outermost component to make it behave
    as expected. We now export `ButtonSpecificProps` which was previously named `ButtonProps`.
    `ButtonProps` is still exported and consists of the types `ButtonSpecificProps` and `ViewProps`.
-   08eeb85: Changed type of Typography child props to include JSX elements

## 0.8.0

### Minor Changes

-   fb69a74: Fixed flex issues on search

## 0.7.0

### Minor Changes

-   b8b7a72: changed autocomplete to have sub component `multiselect`. Removed `Multiselect` prop in
    `autocomplete` component. Use `autocomplete.multiselect` instead.

### Patch Changes

-   c2f7949: fix typescript errors
-   c2f7949: fix label and iconColor errors in TextField component

## 0.6.9

### Patch Changes

-   a29275a: Change Autocomplete to use TextField instead of Input
-   26fbbbe: added variant prop for validation handling in input component

## 0.6.8

### Patch Changes

-   e8d96f6: Added styling fixes for Autocomplete component

## 0.6.7

### Patch Changes

-   b5d2d61: Adjusted the pressable container around the icon button to its original size
-   8da4b13: Added autocomplete component. Gives suggestions based on input. Options can be
    toggleable.

## 0.6.6

### Patch Changes

-   bd5ded0: Make search get its text value from other sources

## 0.6.5

### Patch Changes

-   adaa7bb: fixed clear text button onchange issues on search

## 0.6.4

### Patch Changes

-   85b85ea: fixed flex layout

## 0.6.3

### Patch Changes

-   aba4173: fixed onchange and onblur issue

## 0.6.2

### Patch Changes

-   1499432: fixed input onchange issue

## 0.6.1

### Patch Changes

-   89e4a73: fixed Input container styling issue

## 0.6.0

### Minor Changes

-   2e8e6c7: Added an error boundary component
-   2e8e6c7: add paragraph/body_long and paragraph/body_short as variants to typography

### Patch Changes

-   622bf95: Updated search. Search bar can now clear text. Added optional cancel button. Fixed
    flicker bug on search when focused
-   2e8e6c7: add danger color to the master token

## 0.5.4

### Patch Changes

-   a057c98: Fixed an issue where accordion item chevron did not display properly

## 0.5.3

### Patch Changes

-   2e03adc: Fixed Cell styling issue in non-ScrollView containers... again

## 0.5.2

### Patch Changes

-   d277791: Fixed a styling issue in `Cell` component that caused the cell to collapse in non
    scroll views

## 0.5.1

### Patch Changes

-   d7e40cd: Added `Cell.Switch`component

## 0.5.0

### Minor Changes

-   7d96952: BREAKING: 'Environment' component renamed to 'EnvironmentBanner', and no longer accepts
    props. Use EnvironmentProvider to provide the environment

### Patch Changes

-   c98abdf: fixed the circularprogress component so that it is spinning in place when set to
    undefined
-   c7816aa: Added `Switch` and `Switch.Small` components

## 0.4.2

### Patch Changes

-   edac0f1: Added Cell.Button component
-   e9d978d: Set the Dialog container color to be dynamic.
-   e507ef4: Increased `Cell` vertical padding

## 0.4.1

### Patch Changes

-   283729c: Added docstrings to all types and methods exposed by the library!
-   ed5b46f: Added `Environment` component

## 0.4.0

### Minor Changes

-   ddaf58c: Added `Dialog` components and `alert` function for easy usability to trigger dialog
-   ddaf58c: Added `Scrim` component

### Patch Changes

-   cd3b2eb: outlined buttons should now have the same height/width as other buttons
-   afbaece: add GestureHandlerRootView to EDSProvider for Expo SDK 49 support

## 0.3.2

### Patch Changes

-   05f7145: Added Portal and Portal.Host components
-   5bbce84: Added `defaultOpen` prop to `Accordion.Item` component
-   05f7145: Add animations to Popover and Menu components!
-   6a82f85: Added swipe items to cells!
-   05f7145: Fixed error in build causing large package size

## 0.3.1

### Patch Changes

-   eb3d0d1: Added `adornment` prop to `Cell.Group` component
-   764c47a: Added `disabled` prop to `Cell.Navigation` component

## 0.3.0

### Minor Changes

-   dfcd044: Added peer requirement to `react-native-svg`

### Patch Changes

-   5e212e6: Added `forwardRef` to Cell component
-   dfcd044: Added `loading` prop to Button component
-   dfcd044: Added `DotProgress` component
-   08a351c: Added `meta` prop to Input and TextField components
-   dfcd044: Added `LinearProgress` component
-   dfcd044: Added `CircularProgress` component

## 0.2.5

### Patch Changes

-   afe14c9: Reworked Cell styling
-   89f2e91: Added icon support for text buttons
-   89f2e91: Added disabled state to button
-   675f9d2: Made input field visually indicate its focus state
-   afe14c9: Fixed Input component label padding
-   6c837a1: Added support for icon and adornment layout to Accordion.Item component
-   675f9d2: Added unit prop to TextField component
-   89f2e91: Added Button.Icon component
-   89f2e91: Added ghost button variation

## 0.2.4

### Patch Changes

-   8379013: Restructure text inputs
-   3acea10: Animate PressableHighlight component on release

## 0.2.3

### Patch Changes

-   6c65ad1: Add Cell, Cell Group and Navigation Cell components!
-   3a31f24: Added Menu component
-   6c65ad1: Streamlined colors used in the component library
-   6c65ad1: Added Accordion component!

## 0.2.2

### Patch Changes

-   a1e9110: Removed MadLegacyButton
-   a1e9110: Added support for more color options in the Typography component
-   5bc0eb2: Added TextField and Input components
-   5bc0eb2: Added a search component

## 0.2.1

### Patch Changes

-   a242b74: Toggle buttons behave better on smaller screens, styles are now specific to tablets and
    phones

## 0.2.0

### Minor Changes

-   6112b37: Introduce theming engine. All components should now dynamically respond to the set
    theme and density!

### Patch Changes

-   6112b37: Extended the Button to support Button.Group and Button.Toggle

## 0.1.1

### Patch Changes

-   928f526: Configured eslint
-   2ff3459: Added proper build system
-   064958f: Added arrows to popovers.

## 0.1.0

### Minor Changes

-   6a5d12f: Created Digital Field worker Image Markup Canvas

## 0.0.2

### Patch Changes

-   add minHeight to madLegacyButton

## 0.0.1

### Patch Changes

-   1a1a27c: Initial release!
