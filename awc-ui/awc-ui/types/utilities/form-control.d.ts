export declare const innerInputValidators: {
    key: keyof ValidityState;
    isValid(instance: HTMLElement & {
        validationTarget: HTMLInputElement;
    }): boolean;
}[];
export declare const textareaLengthValidator: {
    isValid(instance: HTMLElement & {
        validationTarget: HTMLTextAreaElement;
    }): boolean;
    attribute?: string | string[];
    key?: keyof ValidityState;
    message: string | import("@open-wc/form-control").validationMessageCallback;
} | {
    isValid(instance: HTMLElement & {
        validationTarget: HTMLTextAreaElement;
    }): boolean;
    attribute?: string | string[];
    key?: keyof ValidityState;
    message: string | import("@open-wc/form-control").validationMessageCallback;
};
export declare const textAreaValidators: ({
    key: keyof ValidityState;
    isValid(instance: HTMLElement & {
        validationTarget: HTMLInputElement;
    }): boolean;
} | {
    isValid(instance: HTMLElement & {
        validationTarget: HTMLTextAreaElement;
    }): boolean;
    attribute?: string | string[];
    key?: keyof ValidityState;
    message: string | import("@open-wc/form-control").validationMessageCallback;
})[];
