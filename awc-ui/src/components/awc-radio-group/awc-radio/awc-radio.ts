import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { FormControlMixin, requiredValidator } from '@open-wc/form-control';
import { radioStyle } from './awc-radio.style';
import { event, EventDispatcher } from '../../../utilities/event';
import type AwcRadioGroup from '../awc-radio-group';
import { awcChangeEventName } from '../awc-radio-group';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Тег для элемента радиокнопки.
 *
 * @type {string}
 */
export const awcRadioTag = 'awc-radio';

export enum AwcRadioSize {
    Regular = 'regular',
    Small = 'small',
}

/**
 * Элемент радиокнопки.
 *
 * @element awc-radio
 *
 * @fires awc-checked - Событие, возникающее при выборе радиокнопки.
 * @fires awc-focus - Событие, возникающее при фокусировке на радиокнопке.
 * @fires awc-blur - Событие, возникающее при потере фокуса радиокнопкой.
 *
 */
@customElement(awcRadioTag)
export default class AwcRadio extends FormControlMixin(LitElement) {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        delegatesFocus: true,
    };

    /**
     * Уникальное имя группы радиокнопок, к которой принадлежит данная радиокнопка.
     *
     * @property {String}
     */
    @property({ type: String, reflect: true }) name: string;

    /**
     * Значение радиокнопки.
     *
     * @property {String}
     */
    @property({ type: String, reflect: true }) value: string;

    /**
     * Текстовая метка радиокнопки.
     *
     * @property {String}
     */
    @property({ type: String, reflect: true }) label: string;
    /**
     * Пользовательская ошибка валидации. (Автоматически становится приоритетной)
     *
     * @type {string}
     * @default
     */
    @property({ reflect: true, attribute: 'custom-error' }) customError: string;
    /**
     * Статичное, принудительное отображение ошибки.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true, attribute: 'static-error' })
    staticError = false;
    /**
     * Флаг, указывающий, выделена ли радиокнопка.
     *
     * @property {Boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Выборо размера radio.
     * @type {string}
     * @default regular
     */
    @property({ reflect: true }) size: AwcRadioSize = AwcRadioSize.Regular;

    /**
     * Флаг, указывающий, выбрана ли радиокнопка.
     *
     * @property {Boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) checked = false;

    /**
     * Флаг, указывающий, является ли радиокнопка обязательной для выбора.
     *
     * @property {Boolean}
     * @reflect
     */
    @property({ type: Boolean, reflect: true }) required = false;

    /**
     * Цвет состояния radio.
     * @type {string}
     * @default
     */
    @property({ reflect: true, attribute: 'custom-color' }) customColor: string;

    /**
     * Событие выбора радиокнопки.
     *
     * @event awc-checked
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-checked') private _onChecked: EventDispatcher<string>;
    /**
     * Событие фокусировки на радиокнопке.
     *
     * @event awc-focus
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-focus') private _onFocus: EventDispatcher<string>;
    /**
     * Событие потери фокуса радиокнопкой.
     *
     * @event awc-blur
     * @type {EventDispatcher<string>}
     * @private
     */
    @event('awc-blur') private _onBlur: EventDispatcher<string>;

    private field: AwcRadioGroup | null;

    @query('[role=radio]') private _radioElement: HTMLElement;
    @query('[role=radio]') validationTarget: HTMLElement;

    static formControlValidators = [requiredValidator];

    @state() validationMessage = '';

    validityCallback(): string | void {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'name';
        radio.required = this.required;

        return radio.validationMessage;
    }

    validationMessageCallback(message: string): void {
        if (this.customError && !this.staticError) {
            this.validationMessage = message;
            this.validationMessage = this.customError;
        } else {
            this.validationMessage = message;
        }
    }

    shouldFormValueUpdate(): boolean {
        return this.checked;
    }

    connectedCallback(): void {
        super.connectedCallback();

        this.addEventListener('invalid', this._onInvalid);
        this._setupFieldListener();
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        this.removeEventListener('invalid', this._onInvalid);
        this._cleanupFieldListener();
    }

    private _setupFieldListener() {
        this.field = this.closest<AwcRadioGroup>('awc-radio-group');

        if (!this.field) {
            console.warn('awc-radio is designed to be used inside an awc-radio-group', this);
        }

        this.field?.addEventListener(awcChangeEventName, this._handleFieldValueChange);
    }

    private _cleanupFieldListener() {
        this.field?.removeEventListener(awcChangeEventName, this._handleFieldValueChange);
    }

    private _handleFieldValueChange = (event: CustomEvent<string>) => {
        const newValue = event.detail;
        this.checked = newValue === this.value;
    };

    select() {
        this.checked = true;
        this._onChecked(this.value);
        this._onChange();
    }

    focus(): void {
        this._radioElement.tabIndex = 0;
        this._radioElement.focus();
        this._onFocus(this.value);
    }

    blur() {
        this._radioElement.tabIndex = -1;
        this._onBlur(this.value);
    }

    private _settingCustomColor(): void {
        if (this.customColor) {
            this.style.setProperty('--awc-radio-custom-color', this.customColor);
        }
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('checked') || changedProperties.has('value')) {
            this.setValue(this.value);
        }

        if (changedProperties.has('customColor')) {
            this._settingCustomColor();
        }
    }

    private _onChange = (): void => {
        this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
    };

    private _onInvalid = (event: Event): void => {
        event.preventDefault();

        this.validationTarget.focus();
    };

    protected render(): TemplateResult {
        const classes = classMap({
            'awc-radio': true,
            checked: this.checked,
        });

        const labelClasses = {
            'awc-radio__label': true,
            'radio--error': (this.showError && !this.checked) || (this.staticError && this.required),
        };

        return html`
            <div class="awc-radio__wrapper">
                <div class="awc-radio__container">
                    <span
                        tabindex="0"
                        class="${classes}"
                        role="radio"
                        aria-checked=${this.checked}
                        aria-required=${this.required}
                        aria-disabled=${this.disabled}
                        aria-labelledby="label"
                        @blur=${this.blur}
                        @click=${this.select}
                    >
                        <p id="label" class="${classMap(labelClasses)}">${this.label}</p>
                    </span>
                </div>

                ${this.showError && this.required && !this.staticError ? html`<span class="awc-radio__error">${this.validationMessage}</span>` : ''}
                ${this.staticError && this.required && this.customError ? html`<span class="awc-radio__error">${this.customError}</span>` : ''}
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [radioStyle];
}
declare global {
    interface HTMLElementTagNameMap {
        [awcRadioTag]: AwcRadio;
    }

    interface HTMLElementEventMap {
        [awcChangeEventName]: CustomEvent<string>;
    }
}
