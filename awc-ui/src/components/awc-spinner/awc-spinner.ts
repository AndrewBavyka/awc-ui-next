import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AwcSpinnerSize, AwcSpinnerVariant } from './awc-spinner.types';
import { spinnerStyle } from './awc-spinner.style';

export const awcSpinnerTag = 'awc-spinner';

@customElement(awcSpinnerTag)
export default class AwcSpinner extends LitElement {
    /**
     * Размер спинера
     * @type {AwcSpinnerSize}
     * @default "m"
     */
    @property({ type: String, reflect: true }) size: AwcSpinnerSize = 'm';
    /**
     * Цвет спинера
     * @type {AwcSpinnerVariant}
     * @default "primary"
     */
    @property({ type: String, reflect: true }) variant: AwcSpinnerVariant = 'primary';

    protected render(): TemplateResult {
        return html` <div class="awc-spinner"></div> `;
    }

    static styles: CSSResult = spinnerStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcSpinnerTag]: AwcSpinner;
    }
}
