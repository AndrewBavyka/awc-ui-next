import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { event, EventDispatcher } from '../../utilities/event';
import { FormControlMixin } from '@open-wc/form-control';
import { radioGroupStyle } from './awc-radio-group.style';
import AwcRadio, { awcRadioTag } from './awc-radio/awc-radio';

/**
 * Название события изменения в радиогруппе.
 *
 * @type {string}
 */
export const awcChangeEventName = 'awc-radio-change';

/**
 * Элемент радиогруппа.
 *
 * @element awc-radio-group
 *
 * @fires awc-radio-change - Событие, возникающее при изменении выбранного радио.
 *
 */
@customElement('awc-radio-group')
export default class AwcRadioGroup extends FormControlMixin(LitElement) {
    /**
     * Текущее значение выбранной опции.
     *
     * @property {String}
     */
    @property({ type: String }) value = '';

    /**
     * Уникальное имя для группы радиокнопок.
     *
     * @property {String}
     * @reflect
     */
    @property({ type: String, reflect: true }) name = '';

    /**
     * Текстовая метка для радиогруппы.
     *
     * @property {String}
     * @reflect
     */
    @property({ type: String, reflect: true }) label = '';
    /**
     * Отображение дополнительной информации.
     *
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) hint = '';
    /**
     * Горизонтальное отображение awc-radio
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) horizontal = false;

    /**
     * Событие изменения значения в радиогруппе.
     *
     * @event awc-radio-change
     * @type {EventDispatcher<string>}
     * @private
     */
    @event(awcChangeEventName) private _onChange: EventDispatcher<string>;

    private focusedOptionIndex = 0;

    get options(): AwcRadio[] {
        return [...this.querySelectorAll(awcRadioTag)];
    }

    get availableOptions(): AwcRadio[] {
        return this.options.filter((option) => !option.disabled);
    }

    private _handleRadioButton(event: CustomEvent) {
        const checkedOption = event.target as AwcRadio;

        this.setValue(checkedOption.value);
        this._onChange(checkedOption.value);
    }

    resetFormControl(): void {
        return this.options.forEach((opt) => {
            this.value = '';
            opt.checked = false;
        });
    }

    private _handleKeyDown(event: KeyboardEvent) {
        if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
            this.focusedOptionIndex++;
        } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
            this.focusedOptionIndex--;
        } else if ([' '].includes(event.key)) {
            this.availableOptions[this.focusedOptionIndex].select();
            return;
        } else {
            return;
        }

        this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, this.availableOptions.length - 1));

        this.availableOptions[this.focusedOptionIndex].focus();

        event.preventDefault();
    }

    private _handleFocus() {
        this.availableOptions[this.focusedOptionIndex].focus();
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
        }
    }

    private _setupAwcRadioValues(): void {
        this.options.forEach((radio) => {
            if (radio.checked) {
                this.value = radio.value;
            }
        });
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.tabIndex = 0;
        this.addEventListener('focus', this._handleFocus);
        this.addEventListener('keydown', this._handleKeyDown);

        this._setupAwcRadioValues();
        document.addEventListener('DOMContentLoaded', () => {
            this._setupAwcRadioValues();
        });
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-radio-group" role="radiogroup" aria-labelledby="label">
                ${this.label ? html`<legend class="awc-radio-group__label">${this.label}</legend>` : ''}
                <div class="awc-radio-group__options" @awc-checked=${this._handleRadioButton}>
                    <slot></slot>
                </div>
                ${this.hint ? html`<span class="awc-radio-group__hint">${this.hint}</span>` : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [radioGroupStyle];
}
