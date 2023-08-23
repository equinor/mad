import { Color, Skia, SkiaDomView, useTouchHandler, useValue } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject } from "react";
import { PathData, SkiaDrawHandle } from "../types";
import { useRerender } from "./useRerender";
import { useDrawHandle } from "./useDrawHandle";

type CanvasSetup = {
	initialDrawColor: Color;
	initialStrokeWidth: number;
	ref: ForwardedRef<SkiaDrawHandle>;
	skiaCanvasRef: RefObject<SkiaDomView>;
};

export const useCanvasDraw = (setup: CanvasSetup) => {
	const drawColor = useValue<Color>(setup.initialDrawColor);
	const strokeWeight = useValue<number>(setup.initialStrokeWidth);

	const pathHistory = useValue<PathData[]>([]);
	const currentPaths = useValue<Record<string, PathData>>({});

	const rerender = useRerender();

	useDrawHandle(setup.ref, setup.skiaCanvasRef, {
		drawColor,
		strokeWeight,
		pathHistory,
	});

	const touchHandler = useTouchHandler({
		onStart: ({ x, y, id }) => {
			const newPath = Skia.Path.Make();
			newPath.moveTo(x, y);
			currentPaths.current[id] = {
				path: newPath,
				color: drawColor.current,
				strokeWidth: strokeWeight.current,
			};
			rerender();
		},
		onActive: ({ x, y, id }) => {
			currentPaths.current = {
				...currentPaths.current,
				[id]: {
					...currentPaths.current[id],
					path: currentPaths.current[id].path.lineTo(x, y),
				},
			};
		},
		onEnd: ({ id }) => {
			pathHistory.current.push(currentPaths.current[id]);
			delete currentPaths.current[id];
			rerender();
		},
	});

	return {
		currentPaths,
		pathHistory,
		touchHandler,
	};
};
