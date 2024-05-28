# React Native Mad Optical Character Recognition (OCR)

This library adds a camera component that automatically recognizes text in real-time. The text is
highlighted on the screen with a boundary box and is selectable by clicking the screen. This is
useful for tasks such as scanning tags on platforms and other facilities.

## 🖌️ How to use

This library exports a component called `OCRCamera` that you can import into your project. The code
below shows how it can be used.

```tsx
export const MyComponent = () => {
    const onScanResult = (tag: string) => {
        // do someting here
    };

    const onScanCancel = () => {
        // do something here
    };

    return (
        <>
            <OCRCamera onSelectTag={onScanResult} onClose={onScanCancel} />
        </>
    );
};
```

Note that the `OCRCamera` component currently only supports viewing in portrait.

## ⚙️ Installation

This library has the following peer dependencies. You have to install these in your project.

```
"@shopify/react-native-skia": "1.2.3",
"react-native-vision-camera": "^4.0.4",
"@ismaelmoreiraa/vision-camera-ocr": "^3.0.1",
"react-native-worklets-core": "^1.3.3",
"react-native-gesture-handler": "^2.14.0",
```

Please refer to the installation guides when installing
[React Native Skia](https://shopify.github.io/react-native-skia/),
[React Native Vision Camera](https://github.com/mrousavy/react-native-vision-camera) and
[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation).
