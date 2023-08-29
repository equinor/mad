import React from "react";
import { Button } from "@equinor/mad-components";

type DemoButtonProps = {onPress?: () => void}
export const DemoButton = ({onPress}: DemoButtonProps) => <Button
      title="Demo"
      onPress={onPress}
    />



//TODO demo button should track and navigate
/**
 * if (props.onDemoPress) {
          props.onDemoPress();
          track(metricKeys.AUTHENTICATION_DEMO);
        }
 */