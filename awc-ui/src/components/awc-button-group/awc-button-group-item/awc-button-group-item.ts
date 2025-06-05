import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcButtonGroupItemStyle } from './awc-button-group-item.style';

export const awcButtonGroupItemTag = 'awc-button-group-item';

@customElement(awcButtonGroupItemTag)
export default class AwcButtonGroupItem extends LitElement {
    /**
     * Флаг для увелечения внутреннего отступа у элемента.
     * @type {boolean}
     * @default false
     * @example false
     */
    @property({ type: Boolean, reflect: true }) expanded = false;
    /**
     * Флаг включения/отключения режима чтения у кнопки.
     * @type {boolean}
     * @default false
     * @example false
     */
    @property({ type: Boolean, reflect: true }) readonly = false;

    /**
     * Отключение кнопки.
     * @type {boolean}
     * @default false
     * @example false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;
    /**
     * @ignore
     */
    @property({ type: String }) position: string;

    protected render(): TemplateResult {
        return html`
            <button ?readonly=${this.readonly} ?expanded=${this.expanded} ?disabled=${this.disabled} class="awc-button-group-item ${this.position}">
                <slot></slot>
            </button>
        `;
    }

    /**
     * @ignore
     */
    static styles = [awcButtonGroupItemStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcButtonGroupItemTag]: AwcButtonGroupItem;
    }
}
