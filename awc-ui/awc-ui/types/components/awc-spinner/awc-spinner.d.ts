import { LitElement, TemplateResult, CSSResult } from 'lit';
import { AwcSpinnerSize, AwcSpinnerVariant } from './awc-spinner.types';
export declare const awcSpinnerTag = "awc-spinner";
export default class AwcSpinner extends LitElement {
    /**
     * Размер спинера
     * @type {AwcSpinnerSize}
     * @default "m"
     */
    size: AwcSpinnerSize;
    /**
     * Цвет спинера
     * @type {AwcSpinnerVariant}
     * @default "primary"
     */
    variant: AwcSpinnerVariant;
    protected render(): TemplateResult;
    static styles: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcSpinnerTag]: AwcSpinner;
    }
}
