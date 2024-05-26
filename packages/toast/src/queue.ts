import { AddToastOptions } from "./types";

export class ToastQueue {
    private static queue: AddToastOptions[] = [];
    private static isLocked = false;

    public static lock = () => (this.isLocked = true);
    public static unlock = () => (this.isLocked = false);
    public static push = (item: AddToastOptions) => this.queue.push(item);
    public static shift = () => {
        if (this.isLocked) return undefined;
        return this.queue.shift();
    };
}
