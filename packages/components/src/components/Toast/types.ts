export type Toast = {
    type: ToastType,
    message: string,
    duration?: number
}

export type ToastType = "WARNING" | "ERROR" | "SUCCESS" | "INFO"

export type Listener = () => void;