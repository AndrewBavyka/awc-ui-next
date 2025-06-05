import { CSSResultGroup, LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { segmentSwitcherItemStyle } from './awc-segment-switcher-item.style';
import { ifDefined } from 'lit/directives/if-defined.js';
import { event, EventDispatcher } from '../../../utilities/event';

export const AwcSegmentSwitcherItemTag = 'awc-segment-switcher-item';

export type targetType = '_blank' | '_self' | '_parent' | '_top';

@customElement('awc-segment-switcher-item')
export default class AwcSegmentSwitcherItem extends LitElement {
    /**
     * Ссылка
     * @property {string}
     * @default ''
     */
    @property({ type: String, reflect: true }) href: string;
    /**
     * Активность элемента
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) active = false;
    /**
     * Выбор тип перехода при нажатии на ссылку
     *  @type {string}
     *  @default _self
     */
    @property({ reflect: true }) target: targetType = '_self';

    @event('awc-segment-item-change') private _onChangeActive: EventDispatcher<boolean>;

    protected update(changedProperties: Map<string | number | symbol, unknown>): void {
        super.update(changedProperties);

        if (changedProperties.has('active') && this.active) {
            this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
            this._handleActiveItem();
        }
    }

    private _handleActiveItem(): void {
        this._onChangeActive(this.active);
    }

    protected render(): TemplateResult {
        return this.href
            ? html`
                  <a class="awc-segment-switcher__item" href="${ifDefined(this.href)}" target=${ifDefined(this.target)} @change="${this._handleActiveItem}">
                      <slot></slot>
                  </a>
              `
            : html`
                  <div class="awc-segment-switcher__item" @change="${this._handleActiveItem}">
                      <slot></slot>
                  </div>
              `;
    }

    static styles?: CSSResultGroup = [segmentSwitcherItemStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [AwcSegmentSwitcherItemTag]: AwcSegmentSwitcherItem;
    }
}
