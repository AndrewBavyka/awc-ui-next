import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { selectGroupStyle } from './awc-select-group.style';

export const awcSelectGroupTag = 'awc-select-group';

@customElement(awcSelectGroupTag)
export default class AwcSelectGroup extends LitElement {
    /**
     * Задается заголовок группы элементов.
     * @property {String} label
     * @default
     */
    @property({ type: String, reflect: true }) label: string;

    protected render(): TemplateResult {
        return html`
            <div class="awc-select-group">
                <p class="awc-select-group__label">${this.label}</p>
                <slot></slot>
            </div>
        `;
    }

    static styles?: CSSResult = selectGroupStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcSelectGroupTag]: AwcSelectGroup;
    }
}
