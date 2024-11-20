# @equinor/mad-dfw

## 0.5.10

### Patch Changes

-   Updated dependencies [7ff2d25]
-   Updated dependencies [75df020]
-   Updated dependencies [75df020]
-   Updated dependencies [2ce9392]
-   Updated dependencies [75df020]
    -   @equinor/mad-components@0.16.0

## 0.5.9

### Patch Changes

-   Updated dependencies [c0aea8c]
    -   @equinor/mad-components@0.15.2

## 0.5.8

### Patch Changes

-   e963324: Add main workcenter to WorkOrderCell

## 0.5.7

### Patch Changes

-   91f3bcc: Icons in the `WorkOrderCell.Navigation` now shows on a new line on smaller devices.

## 0.5.6

### Patch Changes

-   979b5bd: New prop for the `WorkOrderCell.Navigation` called `isBookmarked`. Can be used to
    display the `bookmark` and `bookmark-outline` icons.

## 0.5.5

### Patch Changes

-   32f5bc9: New prop, `wrapValues`, that wraps the text values in the `WorkOrderCell` and
    `WorkOrderCell.Navigation`.

## 0.5.4

### Patch Changes

-   455b6ee: Changed the finished icon in the `WorkOrderCell` from `circle` to `check-circle`

## 0.5.3

### Patch Changes

-   f73c165: Make the text values in the `WorkOrderCell` component selectable
-   f73c165: Fixed validation for when the `not started` icon should be visible in the
    `WorkOrderCell` component

## 0.5.2

### Patch Changes

-   3388a03: Updated button validation to fix visibility issues on buttons in the `WorkOrderCell`
    component

## 0.5.1

### Patch Changes

-   0bab79b: The `WorkOrderCell.Navigation` component is now swipeable.
-   0bab79b: New prop for `WorkOrderCell` components ,`additionalPropertyRows`: Adds custom rows to
    standard details.

## 0.5.0

### Minor Changes

-   c3cd036: - Introduced `tagPlantId` field on `WorkOrder` type.

    -   Expanded the allowed props on the `WorkOrderCell` to accept all non-child view props in
        addition to its fundamental props.

    **Breaking changes:**

    -   Moved all work order related data into the `workOrder` prop of the cell
    -   Renamed `requiredEnd` to `requiredEndDate`
    -   Renamed `workCenter` to `workCenterId`
    -   Renamed `functionalLocation` to `tagId`
    -   Renamed `basicFinishDate` to `basicEndDate`
    -   Renamed `equipment` to `equipmentId`
    -   Renamed `activeStatus` to `activeStatusIds`
    -   Removed the `overwriteLabel` prop on `WorkOrderCellProps`

## 0.4.1

### Patch Changes

-   93cd63d: Added new value to the `WorkOrderType`. Prevent excess padding when the
    `maintenanceType` is not being used.

## 0.4.0

### Minor Changes

-   7d09c9b: WorkOrderCell adjusted. Renamed prop `workOrder` to `workOrderId`. Added new prop,
    `workOrderType`, this relates to the workOrderId. Removed the `symbolDirection` and
    `overwriteLabel` props. The symbol direction is now column by default.

## 0.3.1

### Patch Changes

-   ae0f906: Added loading prop to the buttons in the `WorkOrderCell` component

## 0.3.0

### Minor Changes

-   8503815: Adjusted props related to data display and buttons in the `WorkOrderCell` component.
    Removed the `Id` part from the data props. Removed/adjusted the props: `showActions`,
    `onStartButtonPress`, `onReadyForOperationPress` and `onTecoButtonPress`. New props for this:
    `startJobButton`, `readyForOperationButton` and `tecoButton`. These props have three options
    `visible`, `disabled` and `onpress`. Removed validations for when the buttons are displayed.

## 0.2.0

### Minor Changes

-   f5133b3: Splitted `WorkOrderCell` into a new component `WorkOrderCell.Navigation`. Removed
    `onPress` from the WorkOrderCell. To get the onPress / navigation functionality, use
    WorkOrderCell.Navigation. `tagId` label is removed/replaced with `functionalLocation`

### Patch Changes

-   f5133b3: Added technical complete button to the `WorkOrderCell` and a prop, showActions for
    controlling the visibility of buttons
-   f5133b3: Updated the default work order labels and added an overwriteLabel prop to allow
    customization
-   f5133b3: Created a new component `WorkOrderCell.Navigation`

## 0.1.5

### Patch Changes

-   Updated dependencies [1224665]
-   Updated dependencies [1224665]
    -   @equinor/mad-components@0.15.1

## 0.1.4

### Patch Changes

-   Updated dependencies [2a428d6]
    -   @equinor/mad-components@0.15.0

## 0.1.3

### Patch Changes

-   fc6505c: Add Replace step for all "workspace:\*" dependencies
-   Updated dependencies [fc6505c]
    -   @equinor/mad-components@0.14.13

## 0.1.2

### Patch Changes

-   Updated dependencies [dab732c]
-   Updated dependencies [dab732c]
-   Updated dependencies [00e6e0a]
-   Updated dependencies [dab732c]
-   Updated dependencies [00e6e0a]
    -   @equinor/mad-components@0.14.12

## 0.1.1

### Patch Changes

-   350b5fc: Added a selectable prop to the PropertyRow component

## 0.1.0

### Minor Changes

-   583968f: Add textcolor support for propertyrow and workordercell and add requiredEnd prop to
    workordercell

### Patch Changes

-   Updated dependencies [a8cc142]
    -   @equinor/mad-components@0.14.3

## 0.0.16

### Patch Changes

-   Updated dependencies [49e643c]
    -   @equinor/mad-components@0.13.0

## 0.0.15

### Patch Changes

-   Updated dependencies [b5badbd]
    -   @equinor/mad-components@0.12.10

## 0.0.14

### Patch Changes

-   Updated dependencies [ba1d39f]
    -   @equinor/mad-components@0.12.9

## 0.0.13

### Patch Changes

-   5f69443: `PropertyRow` now correctly displays value when not in a `ScrollView` and on mobile
-   Updated dependencies [8a09b94]
    -   @equinor/mad-components@0.12.8

## 0.0.12

### Patch Changes

-   Updated dependencies [cd8350f]
    -   @equinor/mad-components@0.12.7

## 0.0.11

### Patch Changes

-   Updated dependencies [964af01]
    -   @equinor/mad-components@0.12.6

## 0.0.10

### Patch Changes

-   Updated dependencies [121bbec]
    -   @equinor/mad-components@0.12.5

## 0.0.9

### Patch Changes

-   Updated dependencies [8657a23]
    -   @equinor/mad-components@0.12.4

## 0.0.8

### Patch Changes

-   Updated dependencies [45f2215]
    -   @equinor/mad-components@0.12.3

## 0.0.7

### Patch Changes

-   Updated dependencies [558ca83]
    -   @equinor/mad-components@0.12.2

## 0.0.6

### Patch Changes

-   Updated dependencies [8baaf7b]
    -   @equinor/mad-components@0.12.1

## 0.0.5

### Patch Changes

-   46401e7: Add truhyness check to `PropertyRow` render function to avoid rendering rows with empty
    values.
-   Updated dependencies [e43285f]
-   Updated dependencies [79fb731]
-   Updated dependencies [37025ac]
    -   @equinor/mad-components@0.12.0

## 0.0.4

### Patch Changes

-   15c1410: Added `WorkOrderCell` component.
-   Updated dependencies [8adb0dc]
-   Updated dependencies [496cd9a]
    -   @equinor/mad-components@0.11.3

## 0.0.3

### Patch Changes

-   61a8d3e: Added propertyrow component

## 0.0.2

### Patch Changes

-   Updated dependencies [7eae144]
    -   @equinor/mad-components@0.11.2

## 0.0.1

### Patch Changes

-   6a11730: Initial release of mad-dfw package
