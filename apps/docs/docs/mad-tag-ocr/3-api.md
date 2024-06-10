---
sidebar_label: API
description: More detailed information about how to use the package!
---

# API

#### OCRCamera

The following set of `props` can be passed to the `OCRCamera` component:

| prop                      | description                                                                                                                                                                                                                                                                      | type                                                      | default value |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------- |
| `fps`                     | Target frames per second that the camera should use. Can be reduced to limit fps drops when scanning many text blocks simultaneously                                                                                                                                             | `number`                                                  |               |
| `enableConfirmTextDialog` | Controls whether a confirm selection dialog is shown when the user clicks a highlighted text block. If true, `onSelectTag` is called after the user presses `confirm` in the dialog. If false, `onSelectTag` is called immediately when the user clicks a highlighted text block | `boolean`                                                 |               |
| `textHighlightColor`      | Color of the bounding box shown around text blocks                                                                                                                                                                                                                               | `Color`                                                   |               |
| `buttonConfig`            | Customize which buttons to show on the top right of the screen                                                                                                                                                                                                                   | `ButtonConfig`                                            |               |
| `onSelectTag`             | Is called when the user confirms selected text                                                                                                                                                                                                                                   | `(tag: string) => void`                                   |               |
| `onClose`                 | Is called when the user clicks the close button                                                                                                                                                                                                                                  | `() => void`                                              |               |
| `shouldHighlightText`     | Is called whenever a block of text is detected. If this returns false, then the text block is not highlighted on screen and is not pressable                                                                                                                                     | `(text: string, textBoundingBox: BoundingBox) => boolean` |               |
