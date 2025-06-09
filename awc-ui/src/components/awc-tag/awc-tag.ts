import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tagStyle } from './awc-tag.style';
import { AwcTagColor, AwcTagVariant } from './awc-tag.types';

export const awcTagTag = 'awc-tag';

@customElement(awcTagTag)
export default class AwcTag extends LitElement {
    /**
     * Установка пользовательского цвета в формате HEX
     *
     * @property {string}
     * @default -
     */
    @property({ type: String, reflect: true, attribute: 'custom-color' }) customColor: string;
    /**
     * Установка базовых цветов из палитры
     *
     * @property {AwcTagColor}
     * @default colors-light-secondary
     */
    @property({ type: String, reflect: true, attribute: 'base-color' }) baseColor: AwcTagColor = 'colors-light-secondary';
    /**
     * Выбор формы компонента
     *
     * @property {AwcTagVariant}
     * @default square
     */
    @property({ type: String, reflect: true }) variant: AwcTagVariant = 'square';

    pickTextColorBasedOnBgColor(bgColor: string, lightColor: string, darkColor: string) {
        if (bgColor) {
            let color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
            const r = parseInt(color.substring(0, 2), 16); // hexToR
            const g = parseInt(color.substring(2, 4), 16); // hexToG
            const b = parseInt(color.substring(4, 6), 16); // hexToB

            return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
        }
    }

    protected render(): TemplateResult {
        const currentTextColor =
            this.variant === 'square'
                ? this.pickTextColorBasedOnBgColor(this.customColor || this.baseColor, '--awc-tag-text-color: #FFFFFF', '--awc-tag-text-color: #55555A')
                : '';

        const currentBackgroundColor = this.customColor ? this.customColor : `var(--${this.baseColor})`;

        return html`
            <div class="awc-tag" style="--awc-tag-color: ${currentBackgroundColor}">
                <p class="awc-tag__text" style=${currentTextColor!}><slot></slot></p>
            </div>
        `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [tagStyle];
}
