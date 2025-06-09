import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { awcIconButtonStyles } from './awc-icon-button.style';
import { AwcButtonType, AwcButtonTarget } from '../awc-button/awc-button.types';
import { AwcIconButtonSize } from './awc-icon-button.types';

export const awcIocnButtonTag = 'awc-icon-button';

@customElement(awcIocnButtonTag)
export default class AwcIconButton extends LitElement {
    /**
     * Имя кнопки.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) name: string;
    /**
     * Значение кнопки.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) value: string;
    /**
     * Размер кнопки (Вложенные иконки меняют размер в том числе).
     * @property {AwcIconButtonSize}
     * @default 24
     */
    @property({ type: String, reflect: true }) size: AwcIconButtonSize = '24';
    /**
     * Тип кнопки.
     * @property {AwcButtonType}
     * @default submit
     */
    @property({ type: String, reflect: true }) type: AwcButtonType = 'submit';
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Тип перехода по ссылке.
     * @property {AwcButtonTarget}
     * @default _self
     */
    @property({ type: String }) target: AwcButtonTarget = '_self';
    /**
     * Флаг, отключающий кнопку.
     * @property {Boolean}
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
