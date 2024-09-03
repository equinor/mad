import { AddToastOptions } from "./types";

type Subscriber = () => void;

export class ToastQueue {
    private static queue: AddToastOptions[] = [];
    private static subscribers: Set<Subscriber> = new Set<Subscriber>();
    private static emitChange = () => {
        for (const subscriber of this.subscribers) {
            subscriber();
        }
    };
    public static subscribe = (subscriber: Subscriber) => {
        this.subscribers.add(subscriber);
        return () => {
            this.subscribers.delete(subscriber);
        };
    };
    public static getSnapshot = () => this.queue;
    public static enqueue = (item: AddToastOptions) => {
        this.queue = [...this.queue, item];
        this.emitChange();
    };
    public static shift = () => {
        const toast = this.queue.at(0);
        this.queue = [...this.queue.slice(1)];
        this.emitChange();
        return toast;
    };
}
