import { LitElement, TemplateResult, CSSResultGroup } from "lit";
import { AwcAvatarGroupCounterSize } from "./awc-avatar-group-counter.types";
export declare const awcAvatarGroupCounterTag = "awc-avatar-group-counter";
export default class AwcAvatarGroupCounter extends LitElement {
    /**
     * Значение счетчика общего количества пользователей.
     * @property {number}
     * @default 0
     */
    totalUsers: number;
    /**
       * Размер счетчика пользователей в группе.
       * @property {AwcAvatarGroupCounterSize}
       * @default 24
       */
    counterSize: AwcAvatarGroupCounterSize;
    /**
     * Форма счетчика пользователей в группе.
     * @property {string}
     * @default circle
     * @example "circle"
     */
    counterRounded: string;
    sliced: boolean;
    protected render(): TemplateResult;
    static styles?: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarGroupCounterTag]: AwcAvatarGroupCounter;
    }
}
