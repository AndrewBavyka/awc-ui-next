declare module 'can' {
    export interface ControlOptions {
        [key: string]: any;
    }

    export interface Control {
        new (element: HTMLElement, options: ControlOptions): ControlInstance;
        extend(staticProps: object, instanceProps: object): Control;
    }

    export interface ControlInstance {
        destroy(): void;
    }

    export const Control: Control;
}
