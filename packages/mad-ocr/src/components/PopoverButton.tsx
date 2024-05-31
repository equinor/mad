import React, { useRef, useState } from "react";
import {
    Button,
    EDSStyleSheet,
    IconName,
    Popover,
    Typography,
    useStyles,
} from "@equinor/mad-components";

type PopoverButtonProps = {
    icon: IconName;
    title: string;
    text: string;
};

export const PopoverButton = ({ icon, title, text }: PopoverButtonProps) => {
    const style = useStyles(themeStyles);
    const buttonRef = useRef(null);
    const [showPopover, setShowPopover] = useState(false);
    return (
        <>
            <Popover
                open={showPopover}
                placement="bottom"
                anchorEl={buttonRef}
                style={style.popover}
            >
                <Typography variant="h5" style={style.title}>
                    {title}
                </Typography>
                <Typography>{text}</Typography>
            </Popover>
            <Button.Icon
                ref={buttonRef}
                name={icon}
                iconSize={30}
                onPress={() => setShowPopover(!showPopover)}
            />
        </>
    );
};

const themeStyles = EDSStyleSheet.create(() => ({
    title: { marginBottom: 10 },
    popover: { maxWidth: 500 },
}));
