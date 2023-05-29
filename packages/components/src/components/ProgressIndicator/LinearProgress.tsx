import { Animated, View, ViewProps } from "react-native";
import { ProgressIndicatorProps } from "./types"
import Svg, { Rect } from "react-native-svg";
import { useAnimatedProgress } from "./useAnimatedProgress";
import { useToken } from "../../hooks/useToken";

export type LinearProgressProps = {
    test?: number
} & ProgressIndicatorProps & ViewProps;

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const STROKE_WIDTH = 6;

export const LinearProgress = ({
    value,
    ...rest
}: LinearProgressProps) => {

    const token = useToken();
    const progressValue = useAnimatedProgress(value);
    const progress = progressValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp",
    })

    return (
        <View style={[{ flex: 1 }, rest.style]}>
            <Svg height={STROKE_WIDTH} width="100%">
                <Rect
                    x="0"
                    y="0"
                    width="100%"
                    height={STROKE_WIDTH}
                    fill={token.colors.interactive.primary}
                    opacity={0.16}
                    rx={STROKE_WIDTH / 2}
                    ry={STROKE_WIDTH / 2}
                />
                <AnimatedRect
                    x="0"
                    y="0"
                    width={progress}
                    height={STROKE_WIDTH}
                    fill={token.colors.interactive.primary}
                    rx={STROKE_WIDTH / 2}
                    ry={STROKE_WIDTH / 2}
                />
            </Svg>
        </View>
    );
}

LinearProgress.displayName = "LinearProgress";
