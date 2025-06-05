import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcRangeItemStyle } from './awc-range-item.style';

export const awcRangeItemTag = 'awc-range-item';

@customElement(awcRangeItemTag)
export default class AwcRangeItem extends LitElement {
    /**
     * Значение компонента, для устновки в awc-range.
     * @property {string}
     * @default 0
     */
    @property({ type: String, reflect: true }) value = '0';

    protected render(): TemplateResult {
        return html`
            <li value=${this.value} class="awc-range-item">
                <p class="awc-range-item__text"><slot></slot></p>
            </li>
        `;
    }

    /**
     * @ignore
     */
    static styles = [awcRangeItemStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcRangeItemTag]: AwcRangeItem;
    }
}
