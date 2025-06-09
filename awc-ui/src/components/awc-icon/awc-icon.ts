import { LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { iconStyle } from './awc-icon.style';
import { AwcIconType, AwcIconSize } from './awc-icon.types';
import '../awc-icon-loader/awc-icon-loader';

export const awcIconTag = 'awc-icon';

/**
 * Элемент для отображения иконок.
 * @element awc-icon
 */
@customElement(awcIconTag)
export default class AwcIcon extends LitElement {
    /**
     * Указывается тип иконки
     * @property {AwcIconType}
     */
    @property({ type: String, reflect: true }) type: AwcIconType = 'icon';

    /**
     * Указываеся размер иконки
     * @property {AwcIconSize}.
     * @default 16
     */
    @property({ type: String, reflect: true }) size: AwcIconSize = '16';

    /**
     * Имя или идентификатор конкретной иконки.
     * @property {String}
     */
    @property({ type: String, reflect: true }) name = '';

    /**
     * Изменение размеров иконки
     * @property {String}
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
