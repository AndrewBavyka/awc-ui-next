import { LitElement, TemplateResult, PropertyValues, CSSResult } from "lit";
import { AwcAvatarGroupCounterSize } from "./awc-avatar-group-counter/awc-avatar-group-counter.types";
/**
 * Элемент аватар-группа.
 * @element awc-avatar-group
 */
export declare const awcAvatarGroupTag = "awc-avatar-group";
export default class AwcAvatarGroup extends LitElement {
    /**
     * Количество отображаемых пользователей в группе.
     * @property {number}
     * @default 2
     */
    displayUsers: number;
    /**
     * Значение счетчика общего количества пользователей.
     * @property {number}
     * @default 0
     */
    totalUsers: number;
    /**
     * Размер счетчика пользователей в группе.
     * @property {string}
     * @default "24"
     */
    counterSize: AwcAvatarGroupCounterSize;
    /**
     * Форма счетчика пользователей в группе.
     * @property {string}
     * @default "circle"
     */
    counterRounded: string;
    private counterValue;
    private counterHidden;
    _slottedCounter: HTMLSlotElement;
    private get avatarCounter();
    private updateDisplayedUsers;
    private _applySliceEffect;
    private _applyStylesToElement;
    private _applyHoverToElement;
    private updateCounterValue;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    static styles?: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarGroupTag]: AwcAvatarGroup;
    }
}
