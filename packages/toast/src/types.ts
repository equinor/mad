export const ToastTypes = {
    ERROR: "error",
    SUCCESS: "success",
    WARNING: "warning",
    INFO: "info",
} as const;

export type ToastType = (typeof ToastTypes)[keyof typeof ToastTypes];

export type AddToastOptions = {
    type: ToastType;
    text: string;
    duration?: number;
    onPress?: (hide: () => void) => void;
};
