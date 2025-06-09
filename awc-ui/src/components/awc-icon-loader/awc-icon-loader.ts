import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AwcIconType, AwcIconSize } from '../awc-icon/awc-icon.types';

export const awcIconLoaderTag = 'awc-icon-loader';

/**
 * Компонент для загрузки спрайтов иконок
 * @element awc-icon-loader
 */
@customElement(awcIconLoaderTag)
export default class AwcIconLoader extends LitElement {
    /**
     * Указывается тип иконки
     * @property {AwcIconType}
     */
    @property({ type: String }) type: AwcIconType = 'icon';
    /**
     * Указываеся размер иконки
     * @property {AwcIconSize}.
     * @default 16
     */
    @property({ type: String }) size: AwcIconSize = '16';
    /**
     * Путь до спрайта с иконками
     * @property {String}
     */
    @property({ type: String }) src: string = '';

    private _setGlobalIcons(): Record<string, Record<string, string>> {
        const type = this.type;
        const size = this.size;
        const path = this.src;

        const globalObjIcons: Record<string, Record<string, string>> = window['__AWC_ICONS'] || {};
        window['__AWC_ICONS'] = globalObjIcons;

        if (!globalObjIcons[type]) {
            globalObjIcons[type] = {};
        }

        globalObjIcons[type][size] = path;

        return globalObjIcons;
    }

    protected firstUpdated(): void {
        this._setGlobalIcons();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        [awcIconLoaderTag]: AwcIconLoader;
    }
}
