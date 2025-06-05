import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tagStyle } from './awc-tag.style';

export const awcTagTag = 'awc-tag';

export enum TagVariant {
    Square = 'square',
    Circle = 'circle',
    Bullet = 'bullet',
}

export enum TagColor {
    GlobalRed2600 = 'global-red-2-600',
    GlobalRed2500 = 'global-red-2-500',
    GlobalOrange500 = 'global-orange-500',
    GlobalYellow500 = 'global-yellow-500',
    GlobalYellow300 = 'global-yellow-300',
    GlobalLightGreen400 = 'global-light-green-400',
    GlobalLightGreen600 = 'global-light-green-600',
    GlobalGreen600 = 'global-green-600',
    GlobalGreen300 = 'global-green-300',
    GlobalTurquoise300 = 'global-turquoise-300',
    GlobalTurquoise400 = 'global-turquoise-400',
    GlobalCyan300 = 'global-cyan-300',
    GlobalCyan500 = 'global-cyan-500',
    GlobalBlue600 = 'global-blue-600',
    GlobalBlue400 = 'global-blue-400',
    GlobalDeepPurple400 = 'global-deep-purple-400',
    GlobalDeepPurple600 = 'global-deep-purple-600',
    GlobalPurple600 = 'global-purple-600',
    GlobalPurple400 = 'global-purple-400',
    GlobalRed500 = 'global-red-500',
    GlobalRed400 = 'global-red-400',
    ColorsLightSecondary = 'colors-light-secondary',
    ColorsLightText = 'colors-light-text',
    ColorsLightDarkBlue = 'colors-light-dark-blue',
}

@customElement(awcTagTag)
export default class AwcTag extends LitElement {
    /**
     * Установка пользовательского цвета в формате HEX
     *
     * @property {string}
     * @default -
     */
    @property({ type: String, reflect: true, attribute: 'custom-color' })
    customColor: string;
    /**
     * Установка базовых цветов из палитры
     *
     * @property {string}
     * @default colors-light-secondary
     */
    @property({ type: String, reflect: true, attribute: 'base-color' })
    baseColor: TagColor = TagColor.ColorsLightSecondary;
    /**
     * Выбор формы компонента
     *
     * @property {string}
     * @default square
     */
    @property({ type: String, reflect: true }) variant: TagVariant = TagVariant.Square;

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
            this.variant === TagVariant.Square
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
