import { CSSResult, LitElement, SVGTemplateResult, TemplateResult, html, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { accordionItemStyle } from './awc-accordion-item.style';
import { event, EventDispatcher } from '../../../utilities/event';

export const awcAccordionItemTag = 'awc-accordion-item';

/**
 * @element awc-accordion-item
 * @fires awc-accordion-toggle - Событие активности элемента. Срабатывает при переключении активности.
 */
@customElement(awcAccordionItemTag)
export default class AwcAccordionItem extends LitElement {
    /**
     * Заголовок элемента аккордеона
     * @property {String}
     * @default
     */
    @property({ type: String, reflect: true }) title: string;
    /**
     * Активность элемента аккордеона
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) active = false;
    /**
     * Отключение элемента аккордеона
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * @event awc-accordion-toggle - Событие активности элемента. Срабатывает при переключении активности.
     * @type {EventDispatcher<boolean>}
     * @private
     */
    @event('awc-accordion-toggle') private _onActive: EventDispatcher<boolean>;

    private _toggleActive(): void {
        if (this.disabled) return;

        this.active = !this.active;
        this._onActive(this.active);
    }

    private _arrowDownSvg: SVGTemplateResult = svg`
    <svg class="awc-accordion-item__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289Z" fill="#919BB6"/>
    </svg>
  `;

    protected render(): TemplateResult {
        return html`
            <div class="awc-accordion-item">
                <button tabindex="0" @click=${this._toggleActive} class="awc-accordion-item__button" type="button">${this.title} ${this._arrowDownSvg}</button>

                <section class="awc-accordion-item__wrapper ${this.active ? 'active' : ''}">
                    <div ?inert=${!this.active} class="awc-accordion-item__content">
                        <slot></slot>
                    </div>
                </section>
            </div>
        `;
    }

    static styles: CSSResult = accordionItemStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAccordionItemTag]: AwcAccordionItem;
    }
}
