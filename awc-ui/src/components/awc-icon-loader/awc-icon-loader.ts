import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const awcIconLoaderTag = 'awc-icon-loader';

@customElement(awcIconLoaderTag)
export default class AwcIconLoader extends LitElement {
    @property({ type: String }) type = 'icon';
    @property({ type: String }) size = '';
    @property({ type: String }) src = '';

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
