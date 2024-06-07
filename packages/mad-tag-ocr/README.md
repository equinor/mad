# React Native Mad Optical Character Recognition (OCR)

This library adds a camera component that automatically recognizes text in real-time. The text is
highlighted on the screen with a boundary box and is selectable by clicking the screen. This is
useful for tasks such as scanning tags on platforms and other facilities.

## 🖌️ How to use

This library exports a component called `OCRCamera` that you can import into your project. The code
below shows how it can be used.

Remember to call the `requestPermission` function from `react-native-vision-camera` before using the
OCR camera. Also, if your project is using the [React Navigation](https://reactnavigation.org/)
package, you can call `useFocusEffect` to make sure permission is requested every time you navigate
to the OCR camera. This ensures the user is always asked for permissions if permission is not
already given.

```tsx
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

Note that the OCR camera only supports viewing in portrait mode.

## ⚙️ Installation

This library has the following peer dependencies. You have to install these in your project.

-   [React Native Skia](https://shopify.github.io/react-native-skia/) for drawing on the camera
    screen
-   [React Native Vision Camera](https://github.com/mrousavy/react-native-vision-camera) provides
    the underlying camera component that support frame processor plugins such as OCR
-   [React Native Worklets Core](https://github.com/margelo/react-native-worklets-core) for running
    frame processors on a seperate thread
-   [Vision Camera OCR](https://github.com/ismaelsousa/vision-camera-ocr#readme) is a frame
    processor plugin for the vision camera package that provides OCR
