import { LitElement, TemplateResult, CSSResult } from "lit";
export declare const awcSelectItemTag = "awc-select-item";
export default class AwcSelectItem extends LitElement {
    value: string;
    selected: boolean;
    disabled: boolean;
    protected render(): TemplateResult;
    static styles?: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcSelectItemTag]: AwcSelectItem;
    }
}
