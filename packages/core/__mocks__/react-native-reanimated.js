const React = require("react");
const { View, Text, Image, ScrollView } = require("react-native");

const NOOP = () => {};
const VALUES = { value: 0 };

const Reanimated = {
    // 1. Core Animated Components
    View: View,
    Text: Text,
    Image: Image,
    ScrollView: ScrollView,
    createAnimatedComponent: Component => Component,

    // 2. Hooks
    useSharedValue: init => ({ value: init }),
    useDerivedValue: cb => ({ value: cb() }),
    useAnimatedStyle: cb => cb(),
    useAnimatedProps: cb => cb(),
    useAnimatedScrollHandler: () => NOOP,
    useAnimatedGestureHandler: () => NOOP,
    useAnimatedReaction: NOOP,
    useFrameCallback: () => ({ setActive: NOOP, isActive: false }),

    // 3. Animations & Timing
    withTiming: toValue => toValue,
    withSpring: toValue => toValue,
    withDecay: toValue => toValue,
    withDelay: (delay, animation) => animation,
    withSequence: (...animations) => animations[0],
    withRepeat: animation => animation,
    cancelAnimation: NOOP,

    // 4. Layout Animations
    Layout: {
        delay: () => Reanimated.Layout,
        duration: () => Reanimated.Layout,
        springify: () => Reanimated.Layout,
    },
    FadeIn: { delay: () => Reanimated.FadeIn, duration: () => Reanimated.FadeIn },
    FadeOut: { delay: () => Reanimated.FadeOut, duration: () => Reanimated.FadeOut },
    SlideInLeft: { delay: () => Reanimated.SlideInLeft, duration: () => Reanimated.SlideInLeft },
    SlideOutRight: {
        delay: () => Reanimated.SlideOutRight,
        duration: () => Reanimated.SlideOutRight,
    },

    // 5. Interpolation & Extrapolation
    interpolateColor: jest.fn(() => "transparent"),
    interpolate: (x, input, output) => output[0],
    Extrapolation: { CLAMP: "clamp", IDENTITY: "identity", EXTEND: "extend" },
    Extrapolate: { CLAMP: "clamp", IDENTITY: "identity", EXTEND: "extend" },

    // 6. Miscellaneous
    runOnJS: fn => fn,
    runOnUI: fn => fn,
    Easing: {
        linear: NOOP,
        ease: NOOP,
        quad: NOOP,
        cubic: NOOP,
        poly: () => NOOP,
        sin: NOOP,
        circle: NOOP,
        exp: NOOP,
        elastic: () => NOOP,
        back: () => NOOP,
        bounce: NOOP,
        bezier: () => NOOP,
        in: f => f,
        out: f => f,
        inOut: f => f,
    },

    // Setup placeholder
    setUpTests: NOOP,
};

module.exports = Reanimated;
