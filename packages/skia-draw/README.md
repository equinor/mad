# React Native Skia Draw

<p align="center">
        <img src="https://img.shields.io/badge/iOS-✅-brightgreen" />
        <img src="https://img.shields.io/badge/web-✅-brightgreen" />
        <img src="https://img.shields.io/badge/android-❔-orange" />
</p>
<p align="center">
        <img 
            src="https://raw.githubusercontent.com/equinor/mad/main/packages/skia-draw/assets/skia-draw-header.png"
            title="React Native Skia Draw"
            alt="The Equinor React Native library for all things drawing!"
            width=390/>
</p>
<br />

This library adds basic drawing capabilities for your apps. It features a ready to use Signature Pad and an [EDS](https://loop.equinor.com/en/stories/eds-design-system) themed Image Markup tool.
The library also exposes functionality for creating your own solution.

## 🖌️ How to use

The library currently exposes two ready-made (reffered to as premades) solutions.

### 🖋️ Signature Pad

<p align="center">
        <img 
            src="https://raw.githubusercontent.com/equinor/mad/main/packages/skia-draw/assets/skia-draw-signature.png"
            title="React Native Skia Draw Signature Pad"
            alt="For signing all your important stuff!"
            width=300/>
</p>
<br/>

The Signature Pad component comes with a signature field, a clear button and the ability to create snapshots. A simple implementation looks like this:

```ts
import { Button } from "react-native";
import { SignaturePad } from "@equinor/react-native-skia-draw";
import { SnapshotHandle, SkiaDrawSnapshot } from "@equinor/react-native-skia-draw/dist/types";

const MySignaturePad = () => {
    const drawRef = useRef<SnapshotHandle>(null);
    const [myImage, setMyImage] = useState<SkiaDrawSnapshot>();

    const takeSnapshot = () => {
        if (drawRef.current?.makeImageSnapshot) {
            const result = drawRef.current.makeImageSnapshot();
            setMyImage(result);
        }
    };

    return (
        <>
            <SignaturePad ref={drawRef} />
            <Button
                title="Take snapshot!"
                onPress={takeSnapshot} />
        <>
    );
};
```

---

<br/>

### 👩‍🎨 Image Markup

<p align="center">
        <img 
            src="https://raw.githubusercontent.com/equinor/mad/main/packages/skia-draw/assets/skia-draw-image-markup.png"
            title="React Native Skia Draw Signature Pad"
            alt="For drawing on top of your work of art <3"
            width=300/>
</p>
<br/>

The Image Markup component comes with a simple control panel for some markup operations (stroke size, color selection, clear and undo), and the ability to draw on top of an imported image. A simple implementation looks like this:

```ts
import { Button } from "react-native";
import { ImageMarkup } from "@equinor/react-native-skia-draw";
import { SnapshotHandle, SkiaDrawSnapshot } from "@equinor/react-native-skia-draw/dist/types";

const MyImageMarkup = ({
    myImageAsAnEncodedString,
}:
{
    myImageAsAnEncodedString: string;
}) => {
    const drawRef = useRef<SnapshotHandle>(null);
    const [myImage, setMyImage] = useState<SkiaDrawSnapshot>();

    const takeSnapshot = () => {
        if (drawRef.current?.makeImageSnapshot) {
            const result = drawRef.current.makeImageSnapshot();
            setMyImage(result);
        }
    };

    return (
        <>
            <ImageMarkup
                ref={drawRef}
                markupImage={myImageAsAnEncodedString} />
            <Button
                title="Take snapshot!"
                onPress={takeSnapshot} />
        <>
    );
};
```

## ⚙️ Installation

[React Native Skia](https://shopify.github.io/react-native-skia/) is listed as a peer deendency to this project. This means you will have to install an appropriate version of this on your own. Please refer to the [React Native installlation guide](https://shopify.github.io/react-native-skia/docs/getting-started/installation) for information on how to do this.

### 🕸️ Web support

Note that React Native Skia has an own setup process for working on the web. Make sure to follow this when adding any solution from this packace to your React Native web project.
