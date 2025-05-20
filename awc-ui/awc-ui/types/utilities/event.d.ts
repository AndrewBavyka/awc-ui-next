export interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
export interface EventDispatcher<T> {
    (value: T, options?: EventOptions): CustomEvent<T>;
}
export declare function event(customName?: string): (protoOrDescriptor: any, name: string) => any;
