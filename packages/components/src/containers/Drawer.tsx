import React, { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  Animated,
  useWindowDimensions,
  PanResponder,
  Easing,
  PanResponderInstance,
  ViewStyle,
} from "react-native";

import * as colors from '../../../stylesheets/colors';

type Props = {
  isShowing: boolean;
  onDismiss: () => void;
  fromEdge?: WindowEdge;
  displayAsModal?: boolean;
  dimBackground?: boolean;
  contentContainerStyle?: ViewStyle;
};
// TODO: Fix Left and Top window edge not working correctly (initial positions)
export enum WindowEdge {
  Top,
  Bottom,
  Left,
  Right,
}

const getEdgeVector = (edge: WindowEdge): { dirX: number; dirY: number } => {
  switch (edge) {
    case WindowEdge.Top:
      return { dirX: 0, dirY: 0 };
    case WindowEdge.Bottom:
      return { dirX: 0, dirY: 1 };
    case WindowEdge.Left:
      return { dirX: 0, dirY: 0 };
    case WindowEdge.Right:
      return { dirX: 1, dirY: 0 };
  }
};

const isHorizontalEdge = (edge: WindowEdge): boolean =>
  edge === WindowEdge.Left || edge === WindowEdge.Right;

export const Drawer: React.FC<Props> = ({
  isShowing,
  onDismiss,
  fromEdge = WindowEdge.Bottom,
  displayAsModal = true,
  dimBackground = false,
  contentContainerStyle = undefined,
  children,
}) => {
  const RESISTANCE_FACTOR = 0.05;
  const CLOSING_SWIPE_SPEED = 2;

  const [localShowing, setLocalShowing] = useState(false);
  const { height, width } = useWindowDimensions();

  const panX = useRef<Animated.Value>(
    new Animated.Value(getEdgeVector(fromEdge).dirX * width)
  ).current;
  const panY = useRef<Animated.Value>(
    new Animated.Value(getEdgeVector(fromEdge).dirY * height)
  ).current;

  const _resetAnimation: Animated.CompositeAnimation = Animated.parallel([
    Animated.timing(panX, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(panY, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
  ]);

  const _closeAnimation = (dur: number) =>
    Animated.parallel([
      Animated.timing(panX, {
        toValue: width * getEdgeVector(fromEdge).dirX,
        duration: dur,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(panY, {
        toValue: height * getEdgeVector(fromEdge).dirY,
        duration: dur,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

  const handleDismiss = (duration: number = 300) =>
    _closeAnimation(duration).start(() => {
      setLocalShowing(false);
      onDismiss();
    });

  useEffect(() => {
    if (isShowing !== localShowing) {
      if (isShowing) {
        setLocalShowing(true);
        _resetAnimation.start();
      } else {
        handleDismiss();
      }
    }
  }, [isShowing]);

  const panResponder = useRef<PanResponderInstance>(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: panX, dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_: any, gs: any) => {
        switch (fromEdge) {
          case WindowEdge.Top:
            if (gs.dy < 0 && gs.vy < -CLOSING_SWIPE_SPEED) {
              return handleDismiss(10);
            }
            break;

          case WindowEdge.Bottom:
            if (gs.dy > 0 && gs.vy > CLOSING_SWIPE_SPEED) {
              return handleDismiss(10);
            }
            break;

          case WindowEdge.Left:
            if (gs.dx < 0 && gs.vx < -CLOSING_SWIPE_SPEED) {
              return handleDismiss(10);
            }
            break;

          case WindowEdge.Right:
            if (gs.dx > 0 && gs.vx > CLOSING_SWIPE_SPEED) {
              return handleDismiss(10);
            }
            break;
        }
        return _resetAnimation.start();
      },
    })
  ).current;

  const translateY = () => {
    if (isHorizontalEdge(fromEdge)) {
      return 0;
    }
    const minFactor =
      (1 - RESISTANCE_FACTOR) * getEdgeVector(fromEdge).dirY - 1;
    const maxFactor =
      (1 - RESISTANCE_FACTOR) * getEdgeVector(fromEdge).dirY +
      RESISTANCE_FACTOR;
    return panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [minFactor, 0, maxFactor],
    });
  };

  const translateX = () => {
    if (!isHorizontalEdge(fromEdge)) {
      return 0;
    }
    const minFactor =
      (1 - RESISTANCE_FACTOR) * getEdgeVector(fromEdge).dirX - 1;
    const maxFactor =
      (1 - RESISTANCE_FACTOR) * getEdgeVector(fromEdge).dirX +
      RESISTANCE_FACTOR;

    return panX.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [minFactor, 0, maxFactor],
    });
  };

  const modalDrawer = () => (
    <Modal
      animationType="fade"
      transparent
      visible={localShowing}
      onRequestClose={() => handleDismiss()}
    >
      <Pressable style={styles.modalOverlay} onPress={() => handleDismiss()} />
        {drawerContent()}
    </Modal>
  );

  const drawerContent = () => (
    <Animated.View
      style={[
        edgeStyle(fromEdge).container,
        contentContainerStyle,
        {
          transform: [
            { translateX: translateX() },
            { translateY: translateY() },
          ],
        },
      ]}
    >
      <View
        style={edgeStyle(fromEdge).sliderArea}
        {...panResponder.panHandlers}
      >
        <View style={edgeStyle(fromEdge).sliderIndicator} />
      </View>
      <View style={edgeStyle(fromEdge).drawerContent}>{children}</View>
    </Animated.View>
  );

  if (displayAsModal) {
    return modalDrawer();
  }
  if (dimBackground) {
    return (
      localShowing && (
        <View pointerEvents="box-none" style={styles.inlineContainer}>
            <Pressable style={styles.modalOverlay} onPress={() => handleDismiss()} />
            {drawerContent()}
        </View>
      )
    );
  }
  return (
    localShowing && (
      <View pointerEvents="box-none" style={styles.inlineContainer}>
        {drawerContent()}
      </View>
    )
  );
};

const CONTAINER_MIN_HEIGHT = 200;
const CONTAINER_MIN_WIDTH = 200;
const CONTAINER_HORIZONTAL_BORDER_RADIUS = 6;
const CONTAINER_VERTICAL_BORDER_RADIUS = 12;
const SLIDER_AREA_SIZE = 25;
const SLIDER_INDICATOR_LENGTH = 45;
const SLIDER_INDICATOR_THICKNESS = 4;
const SLIDER_INDICATOR_BORDER_RADIUS = 10;
const SLIDER_INDICATOR_COLOR = "#CECECE";
const CONTENT_DRAWER_PADDING = 12;

type GenericDrawerOrientationStyleSheet = {
  container: ViewStyle;
  sliderArea: ViewStyle;
  sliderIndicator: ViewStyle;
  drawerContent: ViewStyle;
};

type PresentationModeStyleSheet = {
  modalOverlay: ViewStyle;
  inlineContainer: ViewStyle;
};

const styles = StyleSheet.create<PresentationModeStyleSheet>({
  modalOverlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    width: 1000,
    height: 1000,
    position: 'absolute',
    zIndex: 5,
  },
  inlineContainer: {
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

const generalStyle: GenericDrawerOrientationStyleSheet = {
  container: {
    position: "absolute",
    backgroundColor: colors.GRAY_BACKGROUND,
    zIndex: 10,
  },
  sliderArea: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderIndicator: {
    backgroundColor: SLIDER_INDICATOR_COLOR,
    borderRadius: SLIDER_INDICATOR_BORDER_RADIUS,
  },
  drawerContent: {
    flex: 1,
    marginTop: CONTENT_DRAWER_PADDING,
    marginBottom: CONTENT_DRAWER_PADDING,
    marginLeft: CONTENT_DRAWER_PADDING,
    marginRight: CONTENT_DRAWER_PADDING,
  },
};

const topStyle = StyleSheet.create<GenericDrawerOrientationStyleSheet>({
  container: {
    ...generalStyle.container,
    top: 0,
    minHeight: CONTAINER_MIN_HEIGHT,
    width: "100%",
    borderBottomRightRadius: CONTAINER_VERTICAL_BORDER_RADIUS,
    borderBottomLeftRadius: CONTAINER_VERTICAL_BORDER_RADIUS,
  },
  sliderArea: {
    ...generalStyle.sliderArea,
    flexDirection: "column",
    bottom: 0,
    paddingVertical: SLIDER_AREA_SIZE / 2,
    width: "100%",
  },
  sliderIndicator: {
    ...generalStyle.sliderIndicator,
    height: SLIDER_INDICATOR_THICKNESS,
    width: SLIDER_INDICATOR_LENGTH,
  },
  drawerContent: {
    ...generalStyle.drawerContent,
    marginBottom: SLIDER_AREA_SIZE + CONTENT_DRAWER_PADDING,
  },
});
const bottomStyle = StyleSheet.create<GenericDrawerOrientationStyleSheet>({
  container: {
    ...generalStyle.container,
    bottom: 0,
    minHeight: CONTAINER_MIN_HEIGHT,
    width: "100%",
    borderTopRightRadius: CONTAINER_VERTICAL_BORDER_RADIUS,
    borderTopLeftRadius: CONTAINER_VERTICAL_BORDER_RADIUS,
  },
  sliderArea: {
    ...generalStyle.sliderArea,
    flexDirection: "column",
    top: 0,
    paddingVertical: SLIDER_AREA_SIZE / 2,
    width: "100%",
  },
  sliderIndicator: {
    ...generalStyle.sliderIndicator,
    height: SLIDER_INDICATOR_THICKNESS,
    width: SLIDER_INDICATOR_LENGTH,
  },
  drawerContent: {
    ...generalStyle.drawerContent,
    flexDirection: "row",
    marginTop: SLIDER_AREA_SIZE + CONTENT_DRAWER_PADDING,
  },
});

const leftStyle = StyleSheet.create<GenericDrawerOrientationStyleSheet>({
  container: {
    ...generalStyle.container,
    left: 0,
    minWidth: CONTAINER_MIN_WIDTH,
    height: "100%",
    borderTopRightRadius: CONTAINER_HORIZONTAL_BORDER_RADIUS,
    borderBottomRightRadius: CONTAINER_HORIZONTAL_BORDER_RADIUS,
  },
  sliderArea: {
    ...generalStyle.sliderArea,
    flexDirection: "row",
    right: 0,
    paddingHorizontal: SLIDER_AREA_SIZE / 2,
    height: "100%",
  },
  sliderIndicator: {
    ...generalStyle.sliderIndicator,
    height: SLIDER_INDICATOR_LENGTH,
    width: SLIDER_INDICATOR_THICKNESS,
  },
  drawerContent: {
    ...generalStyle.drawerContent,
    marginRight: SLIDER_AREA_SIZE + CONTENT_DRAWER_PADDING,
  },
});
const rightStyle = StyleSheet.create<GenericDrawerOrientationStyleSheet>({
  container: {
    ...generalStyle.container,
    right: 0,
    minWidth: CONTAINER_MIN_WIDTH,
    height: "100%",
    borderTopLeftRadius: CONTAINER_HORIZONTAL_BORDER_RADIUS,
    borderBottomLeftRadius: CONTAINER_HORIZONTAL_BORDER_RADIUS,
  },
  sliderArea: {
    ...generalStyle.sliderArea,
    flexDirection: "row",
    left: 0,
    paddingHorizontal: SLIDER_AREA_SIZE / 2,
    height: "100%",
  },
  sliderIndicator: {
    ...generalStyle.sliderIndicator,
    height: SLIDER_INDICATOR_LENGTH,
    width: SLIDER_INDICATOR_THICKNESS,
  },
  drawerContent: {
    ...generalStyle.drawerContent,
    marginLeft: SLIDER_AREA_SIZE + CONTENT_DRAWER_PADDING,
  },
});

function edgeStyle(edge: WindowEdge): GenericDrawerOrientationStyleSheet {
  switch (edge) {
    case WindowEdge.Top:
      return topStyle;
    case WindowEdge.Bottom:
      return bottomStyle;
    case WindowEdge.Left:
      return leftStyle;
    case WindowEdge.Right:
      return rightStyle;
  }
}
