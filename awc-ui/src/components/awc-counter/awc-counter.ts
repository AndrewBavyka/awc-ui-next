import { LitElement, TemplateResult, html, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { counterStyle } from './awc-counter.style';

/**
 * Элемент счетчик уведомлений.
 * @element awc-counter
 */
@customElement('awc-counter')
export default class AwcCounter extends LitElement {
    /**
     * Значение счетчика
     * @property {number}
     * @default
     */
    @property({ type: Number, reflect: true }) value = 1;

    private _checkMaxValue(): string {
        if (!Number.isInteger(this.value) || this.value <= 0) {
            return '';
        }

        if (this.value > 99) {
            return '99+';
        }

        return this.value.toString();
    }

    protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.update(changedProperties);

        this._checkMaxValue();
    }

    protected render(): TemplateResult {
        const displayValue = this._checkMaxValue();
        return html` <span class="awc-counter" value=${this.value}>${displayValue}</span> `;
    }

    /**
     * @ignore
     */
    static styles = [counterStyle];
}
