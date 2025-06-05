import { LitElement, html, TemplateResult, PropertyValueMap, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { submit } from '@open-wc/form-helpers';
import { ButtonType, SizeType, VariantType, ColorType, TargetType } from './awc-button.types';
import { buttonStyle } from './awc-button.style';
import AwcSpinner, { awcSpinnerTag } from '../awc-spinner/awc-spinner';

export const awcButtonTag = 'awc-button';

/**
 * Кнопка (`awc-button`).
 * Используется для выполнения действий пользователя при взаимодействии с элементом интерфейса.
 * Этот компонент поддерживает кастомные стили, различные состояния и варианты отображения.
 *
 * @element awc-button
 * @slot - Основное содержимое кнопки.
 * @cssproperty [--awc-button-display=inline-block] Устанавливает свойство отображения кнопки
 */

@customElement(awcButtonTag)
export default class AwcButton extends LitElement {
    /**
     * Имя кнопки
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) name: string;
    /**
     * Значение кнопки
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) value: string;
    /**
     * Цвет фона кнопки
     * @property {ColorType}
     * @default blue
     */
    @property({ type: String, reflect: true }) background: ColorType = 'blue';
    /**
     * Размер кнопки
     * @property {SizeType}
     * @default regular
     */
    @property({ type: String, reflect: true }) size: SizeType = 'regular';
    /**
     * Вариант стиля кнопки
     * @property {VariantType}
     * @default primary
     */
    @property({ type: String, reflect: true }) variant: VariantType = 'primary';
    /**
     * Тип кнопки
     * @property {ButtonType}
     * @default submit
     */
    @property({ type: String, reflect: true }) type: ButtonType = 'submit';
    /**
     * Тип перехода по ссылке
     * @property {TargetType}
     * @default _self
     */
    @property({ type: String }) target: TargetType = '_self';
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Флаг активации/деактивации кнопки
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;
    /**
     * Флаг активации/деактивации окрашивания иконки в цвет текста.
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) filling = false;
    /**
     * Флаг отображения спинера загрузки
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) loading = false;

    @property({ type: Boolean, reflect: true }) autofocus = false;

    @query('.awc-button') private button: HTMLButtonElement | HTMLLinkElement;

    get spinner(): AwcSpinner {
        return this.querySelector(awcSpinnerTag)!;
    }

    focus() {
        this.button.focus();
    }

    private _handleButtonClick(): void {
        const form = this.closest('form')! as HTMLFormElement;

        if (!form) return;

        if (this.type === 'submit') {
            submit(form);
        } else if (this.type === 'reset') {
            form.reset();
        }
    }

    private _renderSpinner(): TemplateResult {
        const spinnerVariant = this.variant === 'primary' ? 'secondary' : 'primary';

        return html`<awc-spinner size="s" variant=${spinnerVariant}></awc-spinner>`;
    }

    private _settingCurrentSpinnerVariant(): void {
        if (this.spinner) {
            this.button.classList.add('awc-button--disable');

            if (this.variant === 'primary') {
                this.spinner.variant = 'secondary';
            } else {
                this.spinner.variant = 'primary';
            }
        } else {
            this.button.classList.remove('awc-button--disable');
        }
    }

    private _checkingSpinnerInSlot(): void {
        if (this.spinner) {
            this._settingCurrentSpinnerVariant();
        } else {
            this.button.classList.remove('awc-button--disable');
        }
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('variant')) {
            this._settingCurrentSpinnerVariant();
        }
    }

    protected render(): TemplateResult {
        const buttonContent = html`
            <slot @slotchange="${this._checkingSpinnerInSlot}"></slot>
            ${this.loading ? this._renderSpinner() : ''}
        `;

        const typeButton = html`
            <button
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                type=${this.type}
                name=${ifDefined(this.name)}
                value=${ifDefined(this.value)}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                @focus=${this.focus}
                @click=${this._handleButtonClick}
            >
                ${buttonContent}
            </button>
        `;

        const typeButtonLink = html`
            <a
                class="awc-button"
                ?filling=${this.filling}
                ?autofocus=${this.autofocus}
                tabindex="0"
                background=${this.background}
                ?disabled=${this.disabled}
                href=${this.href}
                @focus=${this.focus}
                target=${ifDefined(this.target)}
                @click=${this._handleButtonClick}
            >
                ${buttonContent}
            </a>
        `;

        return this.href ? typeButtonLink : typeButton;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [buttonStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcButtonTag]: AwcButton;
    }
}
