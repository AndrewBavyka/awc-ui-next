import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { awcFileButtonStyles } from './awc-file-button.style';

export const awcFileButtonTag = 'awc-file-button';

@customElement(awcFileButtonTag)
export default class AwcFileButton extends LitElement {
    protected render(): TemplateResult {
        return html`
            <button tabindex="0" class="awc-file-button" type="button">
                <slot name="awc-file-button-icon"></slot>
                <span class="awc-file-button__label">
                    <slot></slot>
                </span>
                <slot name="awc-file-button-google"></slot>
            </button>
        `;
    }

    static styles?: CSSResult = awcFileButtonStyles;
}
