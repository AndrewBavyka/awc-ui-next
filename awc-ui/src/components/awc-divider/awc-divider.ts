import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dividerStyle } from './awc-divider.style';

export enum Spacing {
    None = 'none',
    XXS = '2xs',
    XS = 'xs',
    S = 's',
    SM = 'sm',
    M = 'm',
    L = 'l',
    XL = 'xl',
    XXL = '2xl',
    XXXL = '3xl',
}

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
    @property({ type: String, reflect: true }) spacing: Spacing = Spacing.L;

    protected render(): TemplateResult {
        return html`
            <div class="awc-divider" style="--awc-divider-spacing: var(--spacing-${this.spacing});">
                ${this.label ? html`<span class="awc-divider__text">${this.label}</span>` : html`<div class="awc-divider__line"></div>`}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [dividerStyle];
}
