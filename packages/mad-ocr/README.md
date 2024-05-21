# React Native Mad Optical Character Recognition

This library adds text scanning for ios devices.

## 🖌️ How to use

Import the component called `OCRCamera` as shown below:

```tsx
export const myComponent = () => {
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

## ⚙️ Installation

This library has the following peer dependencies. You have to install these in your project.

```
"@shopify/react-native-skia": "1.2.3",
"react-native-vision-camera": "^4.0.4",
"@ismaelmoreiraa/vision-camera-ocr": "^3.0.1",
"react-native-worklets-core": "^1.3.3",
```

Please refer to the installation guides when installing
[React Native Skia](https://shopify.github.io/react-native-skia/) and
[React Native Vision Camera](https://github.com/mrousavy/react-native-vision-camera).
