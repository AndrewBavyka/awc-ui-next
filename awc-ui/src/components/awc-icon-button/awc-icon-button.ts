import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcIconButtonStyles } from './awc-icon-button.style';
import { ButtonType, TargetType } from '../awc-button/awc-button.types';
import { AwcIconButtonSize } from './awc-icon-button.types';

export const awcIocnButtonTag = 'awc-icon-button';

@customElement(awcIocnButtonTag)
export default class AwcIconButton extends LitElement {
    /**
     * Имя кнопки.
     * @type {String}
     * @default
     */
    @property({ type: String, reflect: true }) name: string;
    /**
     * Значение кнопки.
     * @type {String}
     * @default
     */
    @property({ type: String, reflect: true }) value: string;
    /**
     * Размер кнопки (Вложенные иконки меняют размер в том числе).
     * @type {String}
     * @default 24
     */
    @property({ type: String, reflect: true }) size: AwcIconButtonSize = '24';
    /**
     * Тип кнопки.
     * @type {String}
     * @default submit
     */
    @property({ type: String, reflect: true }) type: ButtonType = 'submit';
    /**
     * Задает адрес документа, на который следует перейти.
     * @type {String}
     * @default
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Тип перехода по ссылке.
     * @type {String}
     * @default _self
     */
    @property({ type: String }) target: TargetType = '_self';
    /**
     * Флаг, отключающий кнопку.
     * @type {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    protected render(): TemplateResult {
        const isButton = html`
            <button ?disabled=${this.disabled} size=${this.size} type=${this.type} class="awc-icon-button">
                <slot></slot>
            </button>
        `;

        const isLink = html`
            <a ?disabled=${this.disabled} size=${this.size} href=${this.href} target=${this.target} class="awc-icon-button">
                <slot></slot>
            </a>
        `;

        return this.href ? isLink : isButton;
    }

    /**
     * @ignore
     */
    static styles?: CSSResult = awcIconButtonStyles;
}
