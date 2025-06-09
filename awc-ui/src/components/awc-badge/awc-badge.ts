import { CSSResult, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { badgeStyle } from './awc-badge.style';
import { AwcBadgeColor } from './awc-badge.types';

/**
 * Элемент бейдж
 * @element awc-badge
 */
@customElement('awc-badge')
export default class AwcBadge extends LitElement {
    /**
     * Цвет бейджа
     * @property {string}
     * @default primary
     */
    @property({ type: String, reflect: true }) color: AwcBadgeColor = 'primary';

    protected render(): TemplateResult {
        return html` <span class="awc-badge ${this.color}"></span> `;
    }

    static styles: CSSResult = badgeStyle;
}
