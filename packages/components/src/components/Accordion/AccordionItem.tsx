import { useContext, useRef, useState } from "react";
import { Cell } from "../Cell";
import { Animated, View, ViewProps } from "react-native";
import { Icon } from "../Icon";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Typography } from "../Typography";
import { AccordionContext, AccordionContextType } from "./Accordion";
import { useToken } from "../../hooks/useToken";

export type AccordionItemProps = {
    title: string;
    chevronPosition?: "right" | "left";
    disabled?: boolean;
};

export const AccordionItem = ({
    title,
    chevronPosition = "right",
    disabled = false,
    children,
    ...rest
}: React.PropsWithChildren<AccordionItemProps & ViewProps>) => {

    const context = useContext(AccordionContext);
    const [expanded, setExpanded] = useState<boolean>(false);

    const styles = useStyles(themeStyles, context);
    const token = useToken();

    const [contentHeight, setContentHeight] = useState<number>();
    const animatedController = useRef(new Animated.Value(0)).current;

    const _expandAnimation = Animated.timing(animatedController, {
        toValue: 1,
        duration: token.timing.animation.normal,
        useNativeDriver: false,
    });

    const _retractAnimation = Animated.timing(animatedController, {
        toValue: 0,
        duration: token.timing.animation.normal,
        useNativeDriver: false,
    });

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight ?? 0],
    });

    const toggleItem = () => {
        console
        expanded ? _retractAnimation.start() : _expandAnimation.start();
        setExpanded(state => !state);
    }

    const ChevronView = () => (
        <View style={styles.chevronContainer}>
            <Icon name={expanded ? "chevron-up" : "chevron-down"} color={disabled ? "textTertiary" : "primary"} />
        </View>
    );

    return (
        <>
            <View>
                <Cell
                    rightAdornment={chevronPosition === "right" ? ChevronView() : undefined}
                    leftAdornment={chevronPosition === "left" ? ChevronView() : undefined}
                    onPress={disabled ? undefined : toggleItem}
                    style={styles.cellContainer}
                >
                    <View style={styles.headerContainer}>
                        <Typography
                            variant="h6"
                            color={disabled ? "textTertiary" : expanded ? "primary" : "textPrimary"}
                            numberOfLines={1}>
                            {title}
                        </Typography>
                    </View>
                </Cell>
                {expanded && <View style={styles.dividerOuter}>
                    <View style={styles.dividerInner} />
                </View>}
            </View>
            {children && <Animated.View
                style={{
                    height: bodyHeight,
                    overflow: "hidden",
                }}
            >
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    width: "100%"
                }}
                    onLayout={event => setContentHeight(event.nativeEvent.layout.height)}>
                    <View {...rest} style={[styles.contentContainer, rest.style]}>
                        {children}
                    </View>
                </View>
            </Animated.View>}
        </>
    );
};

const themeStyles = EDSStyleSheet.create((theme, props: AccordionContextType) => {
    const { isLastItem } = props;
    return {
        cellContainer: {
            borderTopWidth: theme.geometry.border.borderWidth,
            borderBottomWidth: isLastItem ? theme.geometry.border.borderWidth : undefined,
        },
        headerContainer: {
            height: theme.geometry.dimension.cell.accordion.height,
            justifyContent: "center",
        },
        contentContainer: {
            backgroundColor: theme.colors.container.default,
            paddingHorizontal: theme.spacing.container.paddingHorizontal,
            paddingVertical: theme.spacing.container.paddingVertical
        },
        chevronContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        dividerOuter: {
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            paddingHorizontal: theme.spacing.container.paddingHorizontal,
        },
        dividerInner: {
            height: theme.geometry.border.borderWidth,
            backgroundColor: theme.colors.border.medium,
        }
    }
});