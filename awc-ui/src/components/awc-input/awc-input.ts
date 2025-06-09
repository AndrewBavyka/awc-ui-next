import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormControlMixin } from '@open-wc/form-control';
import { innerInputValidators } from '../../utilities/form-control';
import { submit } from '@open-wc/form-helpers';
import { inputStyle } from './awc-input.style';
import AwcButton from '../awc-button/awc-button';
import { AwcInputType, AwcInputAutocompleteType, AwcInputSize } from './awc-input.types';

export const awcInputTag = 'awc-input';

/**
 * Поле ввода
 * @element awc-input
 */
@customElement(awcInputTag)
export default class AwcInput extends FormControlMixin(LitElement) {
    /**
     * Метка для поля ввода.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) label: string;
    /**
     * Текущее значение поля ввода.
     * @property {string}
     * @default
     */
    @property({ reflect: true })
    value = '';
    /**
     * Текст подсказки для поля ввода.
     * @property {string}
     * @default ""
     */
    @property({ type: String, reflect: true }) placeholder: string;
    /**
     * Имя атрибута для поля ввода.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) name?: string;
    /**
     * Отображение дополнительной информации.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) hint?: string;
    /**
     * Тип атрибута для поля ввода.
     * @property {AwcInputType}
     * @default text
     */
    @property({ reflect: true }) type: AwcInputType = 'text';
    /**
     * Размер поля ввода.
     * @property {AwcInputSize}
     * @default medium
     */
    @property({ type: String, reflect: true }) size: AwcInputSize = 'medium';
    /**
     * Пользовательская ошибка валидации. 
     * (Автоматически становится приоритетной)
     * @property {string}
     * @default ""
     */
    @property({ reflect: true, attribute: 'custom-error' }) customError: string = '';
    /**
     * Максимальная длина поля ввода.
     * @property {number}
     * @default
     */
    @property({ type: Number, reflect: true }) maxlength?: number;
    /**
     * Минимальная длина поля ввода.
     * @property {number}
     * @default undefined
     */
    @property({ type: Number, reflect: true }) minlength?: number;
    /**
     * Минимальное значение для поля ввода.
     * @property {number|string}
     * @default
     */
    @property({ type: Number, reflect: true }) min?: number;
    /**
     * Максимальное значение для поля ввода.
     * @property {number|string}
     * @default
     */
    @property({ type: Number, reflect: true }) max?: number;
    /**
     * Шаг для поля ввода.
     * @property {number}
     * @default
     */
    @property({ type: Number, reflect: true }) step?: number;
    /**
     * Шаблон для поля ввода.
     * @property {string}
     * @default
     */
    @property({ type: String, reflect: true }) pattern?: string;
    /**
     * Включение/отключение автозаполнения.
     * @property {AwcInputAutocompleteType}
     * @default off
     */
    @property({ type: String, reflect: true }) autocomplete: AwcInputAutocompleteType = 'off';
    /**
     * Указывает, должно ли поле ввода автоматически получать фокус при загрузке.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) autofocus: boolean = false;
    /**
     * Указывает, является ли поле ввода обязательным.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) required: boolean = false;
    /**
     * Указывает, отключено ли поле ввода.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;
    /**
     * Указывает, только для чтения ли поле ввода.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) readonly: boolean = false;
    /**
     * Статичное, принудительное отображение ошибки.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'static-error' })
    staticError: boolean = false;

    @state() validationMessage = '';

    @query('input') validationTarget!: HTMLInputElement;
    @query('.awc-input') input!: HTMLInputElement;
    @query('.awc-input__password') private _passwordButton!: HTMLElement;
    @query('.awc-input__progress') private _progressBar!: HTMLElement;

    static formControlValidators = innerInputValidators;

    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        delegatesFocus: true,
    };

    private inputId = Math.random().toString(36).substring(2);

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
        this.validationTarget.value = '';
    }

    private _changeVisibilityPassword(): void {
        if (this.input && this._passwordButton) {
            this.input.type = this.input.type === 'password' ? 'text' : 'password';

            const icon =
                this.input.type === 'password'
                    ? `<path fill-rule="evenodd" clip-rule="evenodd" d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z" fill="#919BB6"/>`
                    : `<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0827055 8.39823L0.0783361 8.388C0.0249487 8.26125 -0.00032161 8.12958 -0.000259399 8.00001C-0.000324169 7.87043 0.0249465 7.73876 0.0783366 7.612L0.0827063 7.60177C1.48797 4.34653 4.46036 2 8 2C11.5396 2 14.5119 4.34645 15.9172 7.60162L15.9217 7.612C15.975 7.73875 16.0003 7.87042 16.0003 8C16.0003 8.12958 15.975 8.26125 15.9217 8.388L15.9172 8.39838C14.5119 11.6536 11.5396 14 8 14C4.46036 14 1.48797 11.6535 0.0827055 8.39823ZM8 4C10.4635 4 12.6941 5.55711 13.8989 8C12.6941 10.4429 10.4635 12 8 12C5.53648 12 3.30588 10.4429 2.10113 8C3.30588 5.55711 5.53648 4 8 4ZM8.99999 8C8.99999 8.55228 8.55228 9 7.99999 9C7.44771 9 6.99999 8.55228 6.99999 8C6.99999 7.44772 7.44771 7 7.99999 7C8.55228 7 8.99999 7.44772 8.99999 8ZM11 8C11 9.65685 9.65685 11 7.99999 11C6.34314 11 4.99999 9.65685 4.99999 8C4.99999 6.34315 6.34314 5 7.99999 5C9.65685 5 11 6.34315 11 8Z" fill="#919BB6"/>`;

            this._passwordButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          ${icon}
        </svg>
      `;
        }
    }

    private _updateCharacterLimit(): void {
        if (this.input && this._progressBar && this.maxlength !== undefined) {
            const maxLength = this.maxlength;
            const currentLength = this.value.length;
            const progress = (currentLength / maxLength) * 360;
            const percent = (currentLength * 100) / maxLength;

            if (percent > 70) {
                this._progressBar.classList.add('awc-input__progress--percent');
            } else {
                this._progressBar.classList.remove('awc-input__progress--percent');
            }

            this._progressBar.style.setProperty('--progress', `${progress}deg`);

            if (maxLength < currentLength) {
                const differenceLength = maxLength - currentLength;

                this._progressBar.setAttribute('length', `${differenceLength}`);
                this._progressBar.classList.add('awc-input__progress--length-warning');

                if (differenceLength < -99) {
                    this._progressBar.classList.add('awc-input__progress--small-font');
                } else {
                    this._progressBar.classList.remove('awc-input__progress--small-font');
                }
            } else {
                this._progressBar.removeAttribute('length');
                this._progressBar.classList.remove('awc-input__progress--length-warning');
            }
        }
    }

    private _paddingInputIcon(): void {
        if ((this.input && this._passwordButton) || (this.input && this._progressBar)) {
            this.input.classList.add('has-padding-icon');
        }
    }

    private _onKeyDown(event: KeyboardEvent) {
        if (event.code === 'Enter' && this.form) {
            event.preventDefault();

            const awcSubmitButton = this.form.querySelector("awc-button[type='submit']") as AwcButton;
            if (awcSubmitButton && !awcSubmitButton.disabled) {
                submit(this.form);
                return;
            }

            const submitButton = this.form.querySelector("button[type='submit']") as HTMLButtonElement;
            if (submitButton && !submitButton.disabled) {
                setTimeout(() => submitButton.click());
                return;
            }
        }
    }

    private _onInput(event: InputEvent) {
        this.value = (event.target as HTMLInputElement).value;

        this.dispatchEvent(new InputEvent('input', { composed: true, bubbles: true }));
    }

    private _onChange(event: Event) {
        this.value = (event.target as HTMLInputElement).value;

        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    private _onInvalid(event: Event): void {
        event.preventDefault();

        this.input.focus();
    }

    private _renderPasswordButton(): TemplateResult {
        return html`
            <awc-toolbar-button @click="${this._changeVisibilityPassword}" class="awc-input__password">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.88016 4.52534C1.61801 4.03924 1.01143 3.85769 0.525328 4.11984C0.0392261 4.382 -0.142322 4.98858 0.119829 5.47468C0.460909 6.10714 0.886046 6.69103 1.38093 7.21455C1.35044 7.23864 1.32104 7.26476 1.29289 7.2929L0.292888 8.2929C-0.097636 8.68343 -0.097636 9.31659 0.292888 9.70712C0.683413 10.0976 1.31658 10.0976 1.7071 9.70712L2.7071 8.70712C2.77745 8.63677 2.83512 8.55856 2.88012 8.47531C3.49551 8.88444 4.16892 9.22105 4.8856 9.47295L4.51941 11.3039C4.4111 11.8455 4.76232 12.3723 5.30388 12.4806C5.84544 12.5889 6.37226 12.2377 6.48058 11.6961L6.83405 9.92873C7.21597 9.97577 7.6052 10 7.99999 10C8.39479 10 8.78401 9.97577 9.16594 9.92873L9.51941 11.6961C9.62773 12.2377 10.1546 12.5889 10.6961 12.4806C11.2377 12.3723 11.5889 11.8455 11.4806 11.3039L11.1144 9.47295C11.8311 9.22105 12.5045 8.88444 13.1199 8.47531C13.1649 8.55856 13.2225 8.63677 13.2929 8.70712L14.2929 9.70712C14.6834 10.0976 15.3166 10.0976 15.7071 9.70712C16.0976 9.31659 16.0976 8.68343 15.7071 8.2929L14.7071 7.2929C14.679 7.26476 14.6495 7.23864 14.6191 7.21455C15.1139 6.69103 15.5391 6.10714 15.8802 5.47468C16.1423 4.98858 15.9608 4.382 15.4747 4.11984C14.9886 3.85769 14.382 4.03924 14.1198 4.52534C13.0235 6.55825 10.7156 8.00001 7.99999 8.00001C5.2844 8.00001 2.97649 6.55825 1.88016 4.52534Z"
                        fill="#919BB6"
                    />
                </svg>
            </awc-toolbar-button>
        `;
    }

    private _renderIncrementArrowButtons(): TemplateResult {
        return html`<div class="awc-input__arrows">
            <div @click=${this._increaseCounterValue} class="awc-input__arrow--up">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289L11.4142 8L10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div @click=${this._decreaseCounterValue} class="awc-input__arrow--down">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289L11.4142 8L10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </div> `;
    }

    private _increaseCounterValue(): void {
        let currentValue = parseFloat(this.value || '0');

        const step = this.step || 1;
        const max = this.max !== undefined ? this.max : Infinity;

        let newValue = currentValue + step;

        if (newValue > max) {
            newValue = max;
        }

        this.value = newValue.toString();

        this.dispatchEvent(new InputEvent('input', { composed: true, bubbles: true }));
        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    private _decreaseCounterValue(): void {
        let currentValue = parseFloat(this.value);

        const step = this.step || 1;
        const min = this.min !== undefined ? this.min : -Infinity;

        let newValue = currentValue - step;

        if (newValue < min) {
            newValue = min;
        }

        this.value = newValue.toString();

        this.dispatchEvent(new InputEvent('input', { composed: true, bubbles: true }));
        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    private _renderSearchIcon(): TemplateResult {
        return html`
            <div class="awc-input__search">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM12.6064 11.1922C13.4816 10.0236 14 8.57234 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57234 14 10.0236 13.4816 11.1922 12.6064L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.6064 11.1922Z"
                            fill="#919BB6"
                        />
                    </g>
                </svg>
            </div>
        `;
    }

    /**
     * Устанавливает фокус на поле ввода.
     * @method
     */
    focus(): void {
        this.input.focus();
    }

    /**
     * Убирает фокус с поля ввода.
     * @method
     */
    blur(): void {
        this.input.blur();
    }

    /**
     * Выделяет текст в поле ввода.
     * @method
     */
    select(): void {
        this.input.select();
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('invalid', this._onInvalid);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('invalid', this._onInvalid);
    }

    protected updated(changedProperties: Map<string, unknown>) {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
        }

        if (changedProperties.has('value') && this.maxlength) {
            this._updateCharacterLimit();
        }

        if (this.type === 'password' || this.maxlength) {
            this._paddingInputIcon();
        }
    }

    protected render(): TemplateResult {
        const inputClass = {
            'awc-input': true,
            [this.size]: true,
            'awc-input--error': this.showError,
        };

        const passwordButton = this.type === 'password' ? this._renderPasswordButton() : '';
        const progressSpinner = this.maxlength && !passwordButton ? html`<div class="awc-input__progress"></div>` : '';

        const incrementButtons = this.type === 'number' ? this._renderIncrementArrowButtons() : '';

        const searchIcon = this.type === 'search' ? this._renderSearchIcon() : '';

        return html`
            <div class="awc-input__main">
                ${this.label ? html`<label for=${this.inputId} class="awc-input__label">${this.label}</label>` : ''}
                <div class="awc-input__wrapper">
                    <div class="awc-input__container">
                        <input
                            class=${classMap(inputClass)}
                            id=${this.inputId}
                            type=${this.type}
                            .value=${live(this.value)}
                            placeholder=${this.placeholder}
                            maxlength="${ifDefined(this.maxlength)}"
                            minlength="${ifDefined(this.minlength)}"
                            min="${ifDefined(this.min)}"
                            max="${ifDefined(this.max)}"
                            pattern="${ifDefined(this.pattern)}"
                            step="${ifDefined(this.step)}"
                            autocomplete="${ifDefined(this.autocomplete)}"
                            ?autofocus=${this.autofocus}
                            ?required=${this.required}
                            ?disabled=${this.disabled}
                            ?readonly=${this.readonly}
                            @change=${this._onChange}
                            @input=${this._onInput}
                            @keypress=${this._onKeyDown}
                        />

                        ${passwordButton} ${progressSpinner} ${incrementButtons} ${searchIcon}
                    </div>
                    <div class="awc-input__slot">
                        <slot></slot>
                    </div>
                </div>

                ${this.showError && !this.staticError
                    ? html`<span class="awc-input__error">${this.validationMessage}</span>`
                    : this.hint && !this.staticError
                      ? html`<span class="awc-input__hint">${this.hint}</span>`
                      : ''}
                ${this.staticError && this.required && this.customError
                    ? html`<span class="awc-input__error">${this.customError}</span>`
                    : this.hint && this.staticError
                      ? html`<span class="awc-input__hint">${this.hint}</span>`
                      : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [inputStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcInputTag]: AwcInput;
    }
}
