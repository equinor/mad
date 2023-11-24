import { useContext } from "react";
import { CanvasControlContext } from "../CanvasControlProvider/CanvasControlProvider";

export const useCanvasControl = () => {
    const context = useContext(CanvasControlContext);
};
