import { LitElement } from "lit";
/**
 * Компонент чипс
 * @element awc-chips
 */
export default class AwcChips extends LitElement {
    /**
     * Флаг отображающий кнопку закрытия/сброса
     * @type {Boolean}
     * @default false
     */
    resetButton: boolean;
    private _onRemoveChips;
    chips: HTMLElement;
    slotElement: HTMLSlotElement;
    private _checkedAwcAvatar;
    private handleResetClick;
    protected updated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * @ignore
     */
    static styles: import("lit").CSSResult[];
}
