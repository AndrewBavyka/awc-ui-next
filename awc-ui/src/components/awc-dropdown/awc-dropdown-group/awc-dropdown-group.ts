import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dropdownGroupStyle } from './awc-dropdown-group.style';
import { scrollStyle } from '../../awc-scroll/awc-scroll.style';

export const awcDropdownGroupTag = 'awc-dropdown-group';

@customElement(awcDropdownGroupTag)
export default class AwcDropdownGroup extends LitElement {
    /**
     * Заголовок группы.
     * @property {string | undefined}
     *
     */
    @property({ type: String, reflect: true }) label?: string;
    /**
     * Отображение линии разделителя.
     * @type {string}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) divider = false;

    protected render(): TemplateResult {
        return html`
            <div class="awc-dropdown-group">
                ${this.label ? html`<label class="awc-dropdown-group__label">${this.label}</label>` : nothing}
                <div class="awc-dropdown-group__content">
                    <slot></slot>
                </div>
                ${this.divider ? html`<awc-divider spacing="xs"></awc-divider>` : nothing}
            </div>
        `;
    }

    static styles?: CSSResultGroup = [scrollStyle, dropdownGroupStyle];
}
