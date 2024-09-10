---
"@equinor/mad-dfw": minor
---

Adjusted props related to the data display and buttons in the `WorkOrderCell` component. Removed the
`Id` part from the data props. Renamed `completeButton` to `ReadyForOperationButton`. Renamed
`onCompleteButtonPress` to `onReadyForOperationPress`. Renamed `showActions`to`actions`. The actions
have two new props `visible`and`disabled`. Removed validations for when the buttons are displayed.
