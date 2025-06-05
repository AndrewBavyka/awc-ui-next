import { LitElement, PropertyValueMap, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FormControlMixin } from '@open-wc/form-control';
import { live } from 'lit/directives/live.js';
import { awcRangeStyle } from './awc-range.style';
import AwcRangeItem, { awcRangeItemTag } from './awc-range-item/awc-range-item';

@customElement('awc-range')
export default class AwcRange extends FormControlMixin(LitElement) {
    /**
     * Имя атрибута для ползунка.
     * @property {string}
     * @default "0"
     */
    @property({ type: String, reflect: true }) name = '0';

    /**
     * Текущее значение ползунка.
     * @property {string}
     * @default "0"
     */
    @property({ type: String, reflect: true }) value = '0';

    /**
     * Метка ползунка.
     * @property {string}
     */
    @property({ type: String, reflect: true }) label: string;

    /**
     * Флаг, указывающий, следует ли отображать маркеры.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) marker = false;

    /**
     * Флаг, указывающий, отключен ли ползунок.
     * @property {boolean}
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean;

    /**
     * Минимальное значение ползунка.
     * @property {number}
     * @default 0
     */
    @property({ type: Number, reflect: true }) min = 0;

    /**
     * Максимальное значение ползунка.
     * @property {number}
     * @default 100
     */
    @property({ type: Number, reflect: true }) max = 100;

    /**
     * Шаг изменения значения ползунка.
     * @property {number}
     * @default 1
     */
    @property({ type: Number, reflect: true }) step = 1;

    get rangeItem(): AwcRangeItem[] {
        return [...this.querySelectorAll(awcRangeItemTag)];
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('value')) {
            this.setValue(this.value);
        }
    }

    private _handleMarkers(e: Event): void {
        const target = e.target as AwcRangeItem;

        if (!target || target.tagName !== 'AWC-RANGE-ITEM') return;

        this.value = target.value;

        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    private _handleInputValue(e: InputEvent) {
        const targetValue = e.target as HTMLInputElement;
        this.value = targetValue.value;

        this.dispatchEvent(new Event('input', { composed: true, bubbles: true }));
    }

    private _handleChangeValue(e: Event) {
        const targetValue = e.target as HTMLInputElement;
        this.value = targetValue.value;

        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-range-container">
                ${this.label
                    ? html`<label class="awc-range-label"
                          >${this.label}:
                          <p class="awc-range-label__value">${this.value}</p></label
                      >`
                    : ''}
                <input
                    class="awc-range"
                    type="range"
                    name=${this.name}
                    .value=${live(this.value)}
                    max=${this.max}
                    min=${this.min}
                    step=${this.step}
                    ?marker=${this.marker}
                    @input=${this._handleInputValue}
                    @change=${this._handleChangeValue}
                />
                ${this.marker
                    ? html`
                          <ul class="awc-range__markers">
                              <slot @click=${this._handleMarkers}></slot>
                          </ul>
                      `
                    : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [awcRangeStyle];
}
