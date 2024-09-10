---
"@equinor/mad-dfw": minor
---

Adjusted props related to data display and buttons in the `WorkOrderCell` component. Removed the
`Id` part from the data props. Removed/adjusted the props: `showActions`, `onStartButtonPress`, `onReadyForOperationPress` 
and `onTecoButtonPress`. New props for this: `startButton`, `readyForOperationButton` and `tecoButton`. These props have three options 
`visible`, `disabled` and `onpress`. Removed validations for when the buttons are displayed.
