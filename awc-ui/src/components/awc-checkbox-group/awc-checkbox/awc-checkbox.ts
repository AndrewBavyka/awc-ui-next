import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, query, property, state } from 'lit/decorators.js';
import { FormControlMixin, requiredValidator } from '@open-wc/form-control';
import { event, EventDispatcher } from '../../../utilities/event';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import type AwcCheckboxGroup from '../awc-checkbox-group';
import { awcCheckboxGroupTag, awcChangeEventName } from '../awc-checkbox-group';
import { checkboxStyle } from './awc-checkbox.style';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';

export const awcCheckboxTag = 'awc-checkbox';

export enum AwcCheckboxSize {
    Regular = 'regular',
    Small = 'small',
}

/**
 * Элемент checkbox.
 *
 * @element awc-checkbox
 *
 * @fires awc-checkbox-change - Событие, возникающее при изменении состояния checkbox.
 * @fires awc-focus - Событие, возникающее при фокусировке на checkbox.
 * @fires awc-blur - Событие, возникающее при потере фокуса checkbox.
 *
 */
@customElement(awcCheckboxTag)
export default class AwcCheckbox extends FormControlMixin(LitElement) {
    /**
     * Значение checkbox.
     *
     * @property {string}
     */
    @property({ type: String, reflect: true }) value: string;

    /**
     * Текстовая метка checkbox.
     *
     * @property {string}
     * @reflect
     */
    @property({ type: String, reflect: true }) label: string;

    /**
     * Уникальное имя группы checkbox.
     *
     * @property {string}
     * @reflect
     */
    @property({ type: String, reflect: true }) name?: string;

    /**
     * Флаг, указывающий, выбран ли checkbox.
     *
     * @property {boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) checked = false;

    /**
     * Флаг, указывающий, является ли checkbox обязательным для выбора.
     *
     * @property {boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) required = false;

    /**
     * Флаг, указывающий, отключен ли checkbox.
     *
     * @property {boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Флаг, указывающий, находится ли checkbox в неопределенном состоянии.
     *
     * @property {boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) indeterminate = false;
    /**
     * Статичное, принудительное отображение ошибки.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'static-error' })
    staticError = false;
    /**
     * Пользовательская ошибка валидации. (Автоматически становится приоритетной)
     * @type {string}
     * @default
     */
    @property({ reflect: true, attribute: 'custom-error' }) customError?: string;
    /**
     * Выборо размера checkbox.
     * @type {string}
     * @default regular
     */
    @property({
        reflect: true,
        converter: {
            toAttribute(value: string): string | null {
                return value === AwcCheckboxSize.Regular ? null : value; // Не отражаем дефолтное значение
            },
            fromAttribute(value: string | null): string {
                return value ?? AwcCheckboxSize.Regular; // Если атрибут не задан, возвращаем дефолт
            },
        },
    })
    size: string = AwcCheckboxSize.Regular;
    /**
     * Цвет состояния checkbox.
     * @type {string}
     * @default
     * @example custom-colot="red", custom-color="#FFFFFF", custom-color="var(--my-color)"
     */
    @property({ reflect: true, attribute: 'custom-color' }) customColor: string;

    @state() validationMessage = '';

    /**
     * Событие изменения состояния checkbox.
     *
     * @event awc-checkbox-change
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-checkbox-change') private onChange: EventDispatcher<boolean>;
    /**
     * Событие фокусировки на checkbox.
     *
     * @event awc-focus
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-focus') private onFocus: EventDispatcher<string>;

    /**
     * Событие потери фокуса checkbox.
     *
     * @event awc-blur
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-blur') private onBlur: EventDispatcher<string>;

    @query('input') checkboxElement: HTMLInputElement;
    @query('label') labelCheckboxElement: HTMLLabelElement;
    @query('input[type=checkbox]') validationTarget: HTMLInputElement;

    protected field: AwcCheckboxGroup | null;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
    static formControlValidators = [requiredValidator];

    validityCallback(): string | void {
        return this.validationTarget?.validationMessage;
    }

    validationMessageCallback(message: string): void {
        if (this.customError && !this.staticError) {
            this.validationMessage = message;
            this.validationMessage = this.customError;
        } else {
            this.validationMessage = message;
        }
    }

    resetFormControl(): void {
        this.checked = false;
    }

    shouldFormValueUpdate(): boolean {
        return this.checked;
    }

    protected update(changedProperties: Map<PropertyKey, unknown>): void {
        super.update(changedProperties);

        if (changedProperties.has('checked') || changedProperties.has('value')) {
            this.setValue(this.value);
        }

        if (changedProperties.has('customColor')) {
            this._settingCustomColor();
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('invalid', this._onInvalid);

        document.addEventListener('DOMContentLoaded', () => {
            this.field = this.closest<AwcCheckboxGroup>(awcCheckboxGroupTag);

            if (this.field) {
                this.addEventListener(awcChangeEventName, this._handleFieldValueChange);
            }
        });
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('invalid', this._onInvalid);
        this.field?.removeEventListener(awcChangeEventName, this._handleFieldValueChange);
    }

    private _handleFieldValueChange = (event: CustomEvent<Array<string>>) => {
        this.checked = event.detail.includes(this.value);
    };

    private _onInvalid = (event: Event): void => {
        event.preventDefault();

        this.validationTarget.focus();
    };

    focus() {
        this.checkboxElement.tabIndex = 0;
        this.checkboxElement.focus();

        this.onFocus(this.value);
    }

    blur() {
        this.onBlur(this.value);
        if (!this.field) return;
        this.checkboxElement.tabIndex = -1;
    }

    private _settingCustomColor(): void {
        if (this.customColor) {
            this.style.setProperty('--awc-checkbox-custom-color', this.customColor);
        }
    }

    private _handleChange(event: CustomEvent) {
        const target = event.target as HTMLInputElement;
        target.checkValidity();

        this.checked = target.checked;
        this.onChange(target.checked);
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));

        this.indeterminate = false;
    }

    protected render(): TemplateResult {
        const checkboxClasses = {
            checkbox: true,
            'checkbox--error': this.showError,
        };

        const labelClasses = {
            'awc-checkbox__label': true,
            'checkbox--error': this.showError || (this.staticError && this.required),
        };

        return html`
            <div class="awc-checkbox__wrapper">
                <label class="${classMap(labelClasses)}"
                    >${this.label}
                    <div class="awc-checkbox__container">
                        <span class="awc-checkbox"></span>
                        <input
                            class="${classMap(checkboxClasses)}"
                            type="checkbox"
                            label=${this.label}
                            name=${ifDefined(this.name)}
                            value=${ifDefined(this.value)}
                            .checked=${live(this.checked)}
                            ?disabled=${this.disabled}
                            ?required=${this.required}
                            .indeterminate=${this.indeterminate}
                            @change=${this._handleChange}
                            @blur=${this.blur}
                        />
                    </div>
                </label>

                ${when(this.showError && this.required && !this.staticError, () => html`<span class="awc-checkbox__error">${this.validationMessage}</span>`)}
                ${when(
                    this.staticError && this.required && this.customError !== undefined,
                    () => html`<span class="awc-checkbox__error">${ifDefined(this.customError)}</span>`
                )}
            </div>
        `;
    }

    static styles: CSSResult = checkboxStyle;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcCheckboxTag]: AwcCheckbox;
    }
}
