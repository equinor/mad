import { Color, Skia, SkiaDomView, useTouchHandler, useValue } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject } from "react";
import { SkiaDrawHandle } from "../types";
import { useRerender } from "./useRerender";
import { useDrawHandle } from "./useDrawHandle";
import { CanvasData, CanvasTool, PenData } from "../Canvas/types";

type CanvasSetup = {
    initialDrawColor: Color;
    initialStrokeWidth: number;
    ref: ForwardedRef<SkiaDrawHandle>;
    skiaCanvasRef: RefObject<SkiaDomView>;
};

export const useCanvasDraw = (setup: CanvasSetup) => {
    const toolColor = useValue<Color>(setup.initialDrawColor);
    const strokeWeight = useValue<number>(setup.initialStrokeWidth);
    const currentPenPaths = useValue<Record<string, PenData>>({});
    const canvasHistory = useValue<CanvasData[]>([]);
    const toolType = useValue<CanvasTool>("pen");

    const rerender = useRerender();

    useDrawHandle(setup.ref, setup.skiaCanvasRef, {
        toolColor,
        strokeWeight,
        canvasHistory,
        toolType,
    });

    const touchHandler = useTouchHandler(
        toolType.current === "pen"
            ? {
                  onStart: ({ x, y, id }) => {
                      const newPath = Skia.Path.Make();
                      newPath.moveTo(x, y);
                      currentPenPaths.current[id] = {
                          type: "pen",
                          path: newPath,
                          color: toolColor.current,
                          strokeWidth: strokeWeight.current,
                      };
                      rerender();
                  },
                  onActive: ({ x, y, id }) => {
                      currentPenPaths.current = {
                          ...currentPenPaths.current,
                          [id]: {
                              ...currentPenPaths.current[id],
                              path: currentPenPaths.current[id].path.lineTo(x, y),
                          },
                      };
                  },
                  onEnd: ({ id }) => {
                      canvasHistory.current.push(currentPenPaths.current[id]);
                      delete currentPenPaths.current[id];
                      rerender();
                  },
              }
            : {
                  onStart: ({ x, y, id }) => {
                      const newPath = Skia.Path.Make();
                      newPath.moveTo(x, y);
                      currentPenPaths.current[id] = {
                          type: "pen",
                          path: newPath,
                          color: "cyan",
                          strokeWidth: 40,
                      };
                      rerender();
                  },
                  onActive: ({ x, y, id }) => {
                      currentPenPaths.current = {
                          ...currentPenPaths.current,
                          [id]: {
                              ...currentPenPaths.current[id],
                              path: currentPenPaths.current[id].path.lineTo(x, y),
                          },
                      };
                  },
                  onEnd: ({ id }) => {
                      canvasHistory.current.push(currentPenPaths.current[id]);
                      delete currentPenPaths.current[id];
                      rerender();
                  },
              },
        [toolType.current],
    );

    return {
        currentPenPaths,
        canvasHistory,
        currentTool: toolType.current,
        touchHandler,
    };
};
