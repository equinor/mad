import { useSyncExternalStore } from "react";
import { IconName } from "../../Icon";

export type DialogContent = {
    title: string;
    message: string;
    buttons: DialogButton[]
}

export type DialogButton = {
    text: string
    onPress: () => void
    style?: 'default' | 'cancel' | 'destructive',
    isPreferred?: boolean,
    icon?: IconName
}

type Listener = () => void

let dialogContent: DialogContent | null = null;
let listeners: Listener[] = []

const _getSnapshot = () => dialogContent;

const _subscribe = (listener: Listener) => {
    listeners = [...listeners, listener];
    return () => {
        listeners = listeners.filter(l => l !== listener);
    };
}

const _emitChange = () => {
    for (const listener of listeners) {
        listener();
    }
}

export const alert = (title: DialogContent["title"], message: DialogContent["message"], buttons: DialogContent["buttons"]) => {
    if (dialogContent === null) {
        dialogContent = { title, message, buttons };
        _emitChange();
    }
}

const finishDialog = () => {
    if (dialogContent !== null) {
        dialogContent = null
        _emitChange()
    }
}

export const _useDialogService = () => {
    const dialogContent = useSyncExternalStore(_subscribe, _getSnapshot)
    return { dialogContent, finishDialog }
}