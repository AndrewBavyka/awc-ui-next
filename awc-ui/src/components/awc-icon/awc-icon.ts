import { LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { iconStyle } from './awc-icon.style';
import '../awc-icon-loader/awc-icon-loader';

export const awcIconTag = 'awc-icon';

/**
 * Элемент для отображения иконок.
 * @element awc-icon
 */
@customElement(awcIconTag)
export default class AwcIcon extends LitElement {
    /**
     * Элемент для отображения иконок.
     * @property {String} type - Тип иконки (например, 'module').
     */
    @property({ type: String, reflect: true }) type = 'icon';

    /**
     * Указываеся размер иконки
     * @property {String} size - Размер иконки (например, '16').
     * @default 16
     */
    @property({ type: String, reflect: true }) size = '16';

    /**
     * Имя или идентификатор конкретной иконки.
     * @property {String} name
     */
    @property({ type: String, reflect: true }) name = '';

    /**
     * Изменение размеров иконки
     * @property {String} iconScale
     */
    @property({ type: String, attribute: 'icon-scale' }) iconScale = '';

    private _getGlobalIcon(): string | undefined {
        const globalIcons: any = window.__AWC_ICONS;

        if (globalIcons && globalIcons[this.type] && globalIcons[this.type][this.size]) {
            return globalIcons[this.type][this.size];
        }

        return undefined;
    }

    protected render() {
        const iconPath = this._getGlobalIcon();

        if (iconPath) {
            return svg`
        <svg
          class="awc-icon"
          style=${this.iconScale ? `--awc-icon-size: ${this.iconScale}` : ''}
          width=${this.size}
          height=${this.size}
        >
          <use href="${iconPath}#${this.name}"></use>
        </svg>
        <slot></slot>
      `;
        }
    }

    static styles = [iconStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcIconTag]: AwcIcon;
    }
}
