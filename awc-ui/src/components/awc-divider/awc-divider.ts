import { CSSResult, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dividerStyle } from './awc-divider.style';
import { AwcDividerSpacing } from './awc-divider.types';

/**
 * Элемент-разделитель.
 * @element awc-divider
 */
@customElement('awc-divider')
export default class AwcDivider extends LitElement {
    /**
     * Название label
     * @type {String}
     * @default ''
     */
    @property({ type: String, reflect: true }) label: string;
    /**
     * Отступы
     * @type {String}
     * @default 'l'
     */
    @property({ type: String, reflect: true }) spacing: AwcDividerSpacing = 'l';

    protected render(): TemplateResult {
        return html`
            <div class="awc-divider" style="--awc-divider-spacing: var(--spacing-${this.spacing});">
                ${this.label ? html`<span class="awc-divider__text">${this.label}</span>` : html`<div class="awc-divider__line"></div>`}
            </div>
        `;
    }

    static styles: CSSResult = dividerStyle;
}
