import { FormControlMixin } from '@open-wc/form-control';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { event, EventDispatcher } from '../../../utilities/event';
import AwcCheckbox, { awcCheckboxTag } from './awc-checkbox/awc-checkbox';
import { checkboxGroupStyle } from './awc-checkbox-group.style';

export const awcCheckboxGroupTag = 'awc-checkbox-group';
export const awcChangeEventName = 'awc-checkbox-group-change';

/**
 * Элемент группы checkbox.
 *
 * @element awc-checkbox-group
 *
 * @fires awc-checkbox-group-change - Событие, возникающее при изменении состояния группы checkbox.
 *
 */
@customElement(awcCheckboxGroupTag)
export default class AwcCheckboxGroup extends FormControlMixin(LitElement) {
    /**
     * Список выбранных значений в группе checkbox.
     * @ignore
     * @property {string[]}
     */
    @property({ type: Array, reflect: true }) value: string[] = [];

    /**
     * Текстовая метка группы checkbox.
     *
     * @property {string}
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
     * Горизонтальное отображение awc-checkbox
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) horizontal = false;

    private focusedOptionIndex = 0;

    get options(): AwcCheckbox[] {
        return [...this.querySelectorAll(awcCheckboxTag)];
    }

    get checkedOptions(): string[] {
        return this.options.filter((opt) => opt.checked).map((opt) => opt.value);
    }

    get availableOptions(): AwcCheckbox[] {
        return this.options.filter((option) => !option.disabled);
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.tabIndex = 0;
        this._handleCheckboxItem();
        this.addEventListener('focus', this.handleFocus);
        this.addEventListener('keydown', this.handleKeyDown);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('focus', this.handleFocus);
        this.removeEventListener('keydown', this.handleKeyDown);
    }

    // TODO Если понадобится формировать значения в единый name группы.
    @event('awc-checkbox-group-change') private _onChange: EventDispatcher<string[]>;

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.checkedOptions.join(', '));
            this._onChange(this.value);
        }
    }

    private _handleCheckboxItem() {
        this.value = this.checkedOptions;
    }

    private handleKeyDown(event: KeyboardEvent) {
        if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
            this.focusedOptionIndex++;
        } else if (['ArrowUp', 'ArrowLeft'].includes(event.key)) {
            this.focusedOptionIndex--;
        } else if (event.key === 'Tab') {
            event.shiftKey ? this.focusedOptionIndex-- : this.focusedOptionIndex++;

            if (this.focusedOptionIndex === this.availableOptions.length) {
                this.tabIndex = 0;
                this.focusedOptionIndex = 0;
                return;
            }
        } else {
            return;
        }

        this.focusedOptionIndex = Math.max(0, Math.min(this.focusedOptionIndex, this.availableOptions.length - 1));

        this.availableOptions[this.focusedOptionIndex].focus();

        event.preventDefault();
    }

    private handleFocus() {
        this.availableOptions[this.focusedOptionIndex].focus();
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-checkbox-group" role="group" aria-labelledby="label" .value="${live(this.value)}">
                <legend class="awc-checkbox-group__label">${this.label}</legend>
                <div class="awc-checkbox-group__options" @awc-checkbox-change=${this._handleCheckboxItem}>
                    <slot></slot>
                </div>
                ${this.hint ? html`<span class="awc-checkbox-group__hint">${this.hint}</span>` : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [checkboxGroupStyle];
}
declare global {
    interface HTMLElementTagNameMap {
        [awcCheckboxGroupTag]: AwcCheckboxGroup;
    }
    interface HTMLElementEventMap {
        [awcChangeEventName]: CustomEvent<string[]>;
    }
}
