import React from "react";
import { Button, TextField, Typography } from "@equinor/mad-components";
import { Dialog } from "@equinor/mad-components/dist/components/Dialog";
import { DialogActions } from "@equinor/mad-components/dist/components/Dialog/DialogActions";
import { DialogCustomContent } from "@equinor/mad-components/dist/components/Dialog/DialogCustomContent";
import { DialogHeader } from "@equinor/mad-components/dist/components/Dialog/DialogHeader";
import { View } from "react-native";

export type DialogOptions = {
    show: boolean;
    tagText: string;
    maxTagLength: number;
    onChangeTagText: (text: string) => void;
    onClickRetry: () => void;
    onClickConfirm: () => void;
};

export const SelectTagDialog = ({
    show,
    tagText,
    maxTagLength,
    onChangeTagText,
    onClickRetry,
    onClickConfirm,
}: DialogOptions) => {
    return (
        <Dialog isOpen={show}>
            <DialogHeader>
                <Typography variant="h6">Confirm & edit selection</Typography>
            </DialogHeader>
            <DialogCustomContent>
                <TextField
                    multiline={false}
                    label="Selected tag"
                    value={tagText}
                    onChange={onChangeTagText}
                    maxLength={maxTagLength}
                    style={{ textAlign: "center" }}
                />
            </DialogCustomContent>
            <DialogActions align="left">
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Button title="Retry" onPress={onClickRetry} />
                    <Button title="Confirm" disabled={!tagText.length} onPress={onClickConfirm} />
                </View>
            </DialogActions>
        </Dialog>
    );
};
