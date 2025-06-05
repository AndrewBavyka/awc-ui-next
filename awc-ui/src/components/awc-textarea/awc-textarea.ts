import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { FormControlMixin } from '@open-wc/form-control';
import { TextAreaAutocompleteType } from './awc-textarea.types';
import { textareaStyle } from './awc-textarea.style';
import { live } from 'lit/directives/live.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export const awcTextAreaTag = 'awc-textarea';

@customElement(awcTextAreaTag)
export default class AwcTextarea extends FormControlMixin(LitElement) {
    /**
     * Значение текстовой области.
     * @property {string} value
     * @default
     */
    @property({ type: String, reflect: true }) value = '';

    /**
     * Текст подсказки для текстовой области.
     * @property {string} placeholder
     * @default
     */
    @property({ type: String, reflect: true }) placeholder?: string;
    /**
     * Имя атрибута для текстовой области.
     * @property {string} name
     * @default
     */
    @property({ type: String, reflect: true }) name?: string;

    /**
     * Текст метки для текстовой области.
     * @property {string} label
     * @default
     */
    @property({ type: String, reflect: true }) label: string;
    /**
     * Указывает, должно ли поле ввода автоматически получать фокус при загрузке.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) autofocus: boolean = false;
    /**
     * Указывает, только для чтения ли поле ввода.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) readonly: boolean = false;
    /**
     * Указывает, отключено ли поле ввода.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;
    /**
     * Булево значение, указывающее, может ли изменяться размер текстовой области.
     * @property {boolean} resize
     * @default false
     */
    @property({ type: Boolean, reflect: true }) resize = false;

    /**
     * Булево значение, указывающее, должна ли автоматически регулироваться высота текстовой области на основе содержимого.
     * @property {boolean} autoheight
     * @default false
     */
    @property({ type: Boolean, reflect: true }) autoheight = false;

    /**
     * Включение/отключение автозаполнения.
     * @property {string}
     * @default TextAreaAutocompleteType
     */
    @property({ type: String, reflect: true }) autocomplete: TextAreaAutocompleteType = 'off';

    /**
     * Количество строк текстовой области.
     * @property {number} rows
     * @default 2
     */
    @property({ type: Number, reflect: true }) rows = 2;

    /**
     * Количество столбцов текстовой области.
     * @property {number} cols
     * @default 20
     */
    @property({ type: Number, reflect: true }) cols = 20;

    @query('textarea') textarea!: HTMLTextAreaElement;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    private textAreaId = Math.random().toString(36).substring(2);

    private _handleInput(): void {
        this._autoHeightTextArea(this.textarea);
        this.value = this.textarea.value;

        this._onInput.bind(this);
    }

    resetFormControl(): void {
        this.value = '';
    }

    private _autoHeightTextArea(textarea: HTMLTextAreaElement): void {
        if (this.autoheight && !this.resize) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }

    private _onInput(event: InputEvent) {
        this.value = (event.target as HTMLTextAreaElement).value;
        this.dispatchEvent(new InputEvent('input', { composed: true, bubbles: true }));
    }

    private _onChange(event: Event) {
        this.value = (event.target as HTMLTextAreaElement).value;
        this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        super.updated(changedProperties);

        if (changedProperties.has('value')) {
            this.setValue(this.value);
            this.textarea.value = this.value;
        }
    }

    protected firstUpdated(): void {
        this.textarea.value = this.value;
        this._autoHeightTextArea(this.textarea);
    }

    /**
     * Выделяет текст в поле ввода.
     * @method
     */
    select(): void {
        this.textarea.select();
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-textarea-container">
                <label for=${this.textAreaId} name="label">${this.label}</label>
                <div class="awc-textarea-wrapper">
                    <textarea
                        class="awc-textarea"
                        id=${this.textAreaId}
                        name=${ifDefined(this.name)}
                        placeholder=${ifDefined(this.placeholder)}
                        .value=${live(this.value)}
                        rows=${ifDefined(this.rows)}
                        cols=${ifDefined(this.cols)}
                        autocomplete="${ifDefined(this.autocomplete)}"
                        ?autoheight=${this.autoheight}
                        ?resize=${this.resize}
                        ?autofocus=${this.autofocus}
                        ?readonly=${this.readonly}
                        ?disabled=${this.disabled}
                        @input=${this._handleInput}
                        @change=${this._onChange}
                    ></textarea>
                    <div class="awc-textarea__focus"></div>
                </div>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles = [textareaStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcTextAreaTag]: AwcTextarea;
    }
}
