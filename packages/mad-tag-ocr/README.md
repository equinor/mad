# React Native Mad Optical Character Recognition (OCR)

Mad Tag Optical Character Recognition (OCR) adds a camera component that recognizes and highlights
text in real-time. The highlighted text can also be selected by the user. This is useful for tasks
such as scanning tags on Equinor facilities, but can also be used to scan other types of text.

## 🖌️ How to use

This library exports a component called `OCRCamera` that you can import into your project. The
example below shows how it can be used.

```tsx
import { OCRCamera } from "@equinor/react-native-mad-tag-ocr";

export const MyComponent = () => {
    const { hasPermission, requestPermission } = useCameraPermission();

    useFocusEffect(() => void requestPermission());

    const onScanResult = (tag: string) => {
        // do someting here
    };

    const onScanCancel = () => {
        // do something here
    };

    return <OCRCamera onSelectTag={onScanResult} onClose={onScanCancel} />;
};
```

Remember to call the `requestPermission` function from `react-native-vision-camera` before using the
OCR camera. Also, if your project is using the [React Navigation](https://reactnavigation.org/)
package, you can call `useFocusEffect` to make sure permission is requested every time you navigate
to the OCR camera. This ensures the user is always asked for permissions even if the user initially
clicked decline.

Note that the OCR camera only supports viewing in portrait mode.

## ⚙️ Installation

This library has the following peer dependencies that you need to install in your project. Please
refer to the documentation below for information on how to do this.

-   [React Native Vision Camera](https://github.com/mrousavy/react-native-vision-camera) provides
    the underlying camera component that support frame processor plugins such as OCR
-   [Vision Camera OCR](https://github.com/ismaelsousa/vision-camera-ocr#readme) is a frame
    processor plugin for the vision camera package that provides OCR
-   [React Native Worklets Core](https://github.com/margelo/react-native-worklets-core) for running
    frame processors on a seperate thread
-   [React Native Skia](https://shopify.github.io/react-native-skia/) for drawing on the camera
    screen
