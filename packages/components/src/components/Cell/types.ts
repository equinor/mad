import { SwipeableMethods } from "../_internal/SwipeableWithContext";
import { EDSColor } from "../../styling";
import { IconName } from "../Icon";

type BaseCellSwipeItemProps = {
    /**
     * The color of the swipe item.
     */
    color?: EDSColor;
    /**
     * A callback function invoked when the user presses the swipe item.
     */
    onPress?: (swipeableMethods: SwipeableMethods) => void;
};

export type CellSwipeItemProps = (
    | {
          /**
           * Text to display in the swipe item.
           */
          title: string;
          /**
           * Name of the icon to display alongside the text.
           */
          iconName?: IconName;
      }
    | {
          /**
           * Text to display in the swipe item.
           */
          title?: string;
          /**
           * Name of the icon to display alongside the text.
           */
          iconName: IconName;
      }
) &
    BaseCellSwipeItemProps;
