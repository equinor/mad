---
sidebar_label: API
description: More detailed information about how to use the package!
---

# API

#### ToastEmitter

The following set of `props` can be passed to the `ToastEmitter` component instance to specify
certain **defaults for all Toasts that are shown**:

| prop             | description                                                                                                                       | type              | default value |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------- |
| `position`       | Default Toast position                                                                                                            | `top` or `bottom` | `top`         |
| `visibilityTime` | Number of milliseconds after which Toast automatically hides. Has effect only in conjunction with `autoHide` prop set to `true`   | `number`          | `4000`        |
| `autoHide`       | When `true`, the visible Toast automatically hides after a certain number of milliseconds, specified by the `visibilityTime` prop | `boolean`         | `true`        |
| `topOffset`      | Offset from the top of the screen (in px). Has effect only when `position` is `top`                                               | `number`          | `40`          |
| `bottomOffset`   | Offset from the bottom of the screen (in px). Has effect only when `position` is `bottom`                                         | `number`          | `40`          |
| `keyboardOffset` | Offset from the Keyboard (in px). Has effect only when `position` is `bottom` and Keyboard is visible (iOS only)                  | `number`          | `10`          |
| `onShow`         | Called when any Toast is shown                                                                                                    | `() => void`      |               |
| `onHide`         | Called when any Toast hides                                                                                                       | `() => void`      |               |
| `onPress`        | Called on any Toast press                                                                                                         | `() => void`      |               |

#### addToast

The complete set of **options** is described below:

| option     | description                                                          | type                         | required | default value |
| ---------- | -------------------------------------------------------------------- | ---------------------------- | -------- | ------------- |
| `type`     | Toast type. available values: `success`, `error`, `info`, `warning`. | `string`                     | yes      |               |
| `text`     | Text to display in the toast                                         | `string`                     | yes      |               |
| `duration` | Number of milliseconds after which Toast automatically hides.        | `number`                     | no       | `4000`        |
| `onPress`  | Called on Toast press                                                | `(hide: () => void) => void` | no       |               |
