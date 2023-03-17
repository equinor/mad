import {PropsWithChildren, useRef} from "react";
import {Canvas} from '../Canvas'
import {SkiaDrawHandle} from "../types";

const SignaturePad = (props: PropsWithChildren<{height?: number}>) => {
    const canvasRef = useRef<SkiaDrawHandle>(null);
    return <>
    <Canvas ref={canvasRef}>
        {props.children}
    </Canvas>

    </>
}