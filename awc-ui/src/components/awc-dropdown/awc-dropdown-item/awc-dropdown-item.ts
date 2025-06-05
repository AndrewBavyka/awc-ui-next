import { LitElement, html, TemplateResult, CSSResultGroup, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { dropdownItemStyle } from './awc-dropdown-item.style';
import { ifDefined } from 'lit/directives/if-defined.js';
import { scrollStyle } from '../../awc-scroll/awc-scroll.style';
import { AwcDropdownItemTarget } from './awc-dropdown-item.types';
import { AWC_DROPDOWN_ITEM_ICONS } from './awc-dropdown-item.icons';
import anime from 'animejs';

export const awcDropdownItemTag = 'awc-dropdown-item';
/**
 * Элемент списка awc-dropdown-list
 * @element awc-dropwdown-item
 */
@customElement(awcDropdownItemTag)
export default class AwcDropdownItem extends LitElement {
    /**
     * Установка ссылки
     * @property {string}
     * @default
     */
    @property({ type: String }) href?: string;
    /**
     * Выбор тип перехода при нажатии на ссылку
     * @property {AwcDropdownItemTarget}
     * @default _self
     */
    @property({ type: String }) target: AwcDropdownItemTarget = '_self';
    /**
     * Выбранный элемент
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) selected = false;
    /**
     * Определяет, что элемент является опасным (например, "Удалить"). Окрашивает элемент в красный.
     * @property {boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) warning = false;

    @query('.awc-dropdown-item') private _dropdownItem: AwcDropdownItem;
    @query('.awc-dropdown-item__selected') private _selectedIcon?: HTMLElement;

    focus() {
        this._dropdownItem.focus();
    }

    protected updated(changedProperties: Map<string, unknown>): void {
        if (changedProperties.has('selected') && this.selected && this._selectedIcon) {
            this._selectedIcon.style.opacity = '0';
            this._selectedIcon.style.transform = 'scale(0.5)';

            anime({
                targets: this._selectedIcon,
                opacity: [0, 1],
                scale: [0.5, 1],
                duration: 200,
                easing: 'easeOutQuad',
                delay: 50,
            });
        }
    }

    protected render(): TemplateResult {
        return this.href
            ? html`<a tabindex="0" class="awc-dropdown-item" href=${ifDefined(this.href)} target=${ifDefined(this.target)} ?selected=${this.selected}>
                  <span class="awc-dropdown-item__container">
                      <slot name="awc-dropdown-item-left-icon"></slot>
                      <slot></slot>
                  </span>
                  <slot name="awc-dropdown-item-right-icon"></slot>

                  ${this.selected ? html`<div class="awc-dropdown-item__selected">${AWC_DROPDOWN_ITEM_ICONS.checkmark}</div>` : nothing}
              </a>`
            : html`
                  <button tabindex="0" class="awc-dropdown-item" ?selected=${this.selected}>
                      <span class="awc-dropdown-item__container">
                          <slot name="awc-dropdown-item-left-icon"></slot>
                          <slot></slot>
                      </span>
                      <slot name="awc-dropdown-item-right-icon"></slot>

                      ${this.selected ? html`<div class="awc-dropdown-item__selected">${AWC_DROPDOWN_ITEM_ICONS.checkmark}</div>` : nothing}
                  </button>
              `;
    }

    /**
     * @ignore
     */
    static styles: CSSResultGroup = [scrollStyle, dropdownItemStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        'awc-dropdown-item': AwcDropdownItem;
    }
}
