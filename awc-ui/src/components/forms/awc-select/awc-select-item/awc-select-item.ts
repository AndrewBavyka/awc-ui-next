import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcSelectItemStyles } from './awc-select-item.style';

export const awcSelectItemTag = 'awc-select-item';

@customElement(awcSelectItemTag)
export default class AwcSelectItem extends LitElement {
    @property({ type: String, reflect: true }) value: string;
    @property({ type: Boolean, reflect: true }) selected = false;
    @property({ type: Boolean, reflect: true }) disabled = false;

    // @state() private _noPadding: boolean = false;

    protected render(): TemplateResult {
        return html`
            <li class="awc-select-item" aria-selected="${this.selected}" ?disabled=${this.disabled} role="option">
                <slot></slot>
            </li>
        `;
    }

    static styles?: CSSResult = awcSelectItemStyles;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcSelectItemTag]: AwcSelectItem;
    }
}
