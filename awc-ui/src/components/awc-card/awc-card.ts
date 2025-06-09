import { LitElement, html, svg, TemplateResult, SVGTemplateResult, nothing, CSSResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { AwcCardTarget } from './awc-card.types';
import { cardStyle } from './awc-card.style';
import AwcIcon from '../awc-icon/awc-icon';
import { ifDefined } from 'lit/directives/if-defined.js';

export const awcCardTag = 'awc-card';

@customElement(awcCardTag)
export default class AwcCard extends LitElement {
    /**
     * Заголовок карточки.
     * @property {string}
     */
    @property({ type: String, reflect: true }) title: string;

    /**
     * Подзаголовок карточки.
     * @property {string}
     */
    @property({ type: String, reflect: true }) subtitle?: string;

    /**
     * Ссылка для карточки.
     * @property {string}
     */
    @property({ type: String, reflect: true }) href?: string;

    /**
     * Атрибут target для ссылки карточки.
     * @type {string}
     */
    @property({ type: String }) target: AwcCardTarget = '_self';

    /**
     * Цвет иконки.
     * @property {string}
     */
    @property({ type: String, reflect: true, attribute: 'icon-color' }) iconColor?: string;

    /**
     * Флаг для отображения/скрытия стрелки для навигации.
     * @property {boolean}
     */
    @property({ type: Boolean, reflect: true }) arrow = false;

    @query("slot[name='icon']") private _iconSlot!: HTMLSlotElement;

    @state() _isModuleIcon = false;

    private _arrowIcon: SVGTemplateResult = svg`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289Z" fill="#919BB6"/>
        </svg>
    `;

    private _changeBackgroundIconModule(): void {
        const allIcons = this._iconSlot.assignedElements();

        const modulesIcons = allIcons.filter((icon) => {
            const isIconModule = (icon as AwcIcon).type;
            return isIconModule === 'module';
        });

        if (modulesIcons.length) {
            this._isModuleIcon = true;
        } else {
            this._isModuleIcon = false;
        }
    }

    private _renderLinksTemplate(): TemplateResult {
        return html`
            <a class="awc-card" href=${ifDefined(this.href)} target=${this.target}>
                <div class="awc-card__head">
                    <div class="awc-card__icon ${this._isModuleIcon ? 'awc-card__icon--module' : nothing}" style=${`--awc-card-color: ${this.iconColor}`}>
                        <slot @slotchange=${this._changeBackgroundIconModule} name="icon"></slot>
                    </div>
                    <div class="awc-card__additional">
                        <slot name="toolbar"></slot>
                        ${this.arrow ? this._arrowIcon : nothing}
                    </div>
                </div>
                <div class="awc-card__main">
                    ${this.title ? html`<p class="awc-card__title">${this.title}</p>` : nothing}
                    ${this.subtitle ? html`<p class="awc-card__subtitle">${this.subtitle}</p>` : nothing}
                </div>
                <div class="awc-card__footer">
                    <slot></slot>
                </div>
            </a>
        `;
    }

    private _renderBlockTemplate(): TemplateResult {
        return html`
            <div class="awc-card" tabindex="0">
                <div class="awc-card__head">
                    <div class="awc-card__icon ${this._isModuleIcon ? 'awc-card__icon--module' : nothing}" style=${`--awc-card-color: ${this.iconColor}`}>
                        <slot @slotchange=${this._changeBackgroundIconModule} name="icon"></slot>
                    </div>
                    <div class="awc-card__additional">
                        <slot name="toolbar"></slot>
                        ${this.arrow ? this._arrowIcon : nothing}
                    </div>
                </div>
                <div class="awc-card__main">
                    ${this.title ? html`<p class="awc-card__title">${this.title}</p>` : nothing}
                    ${this.subtitle ? html`<p class="awc-card__subtitle">${this.subtitle}</p>` : nothing}
                </div>
                <div class="awc-card__footer">
                    <slot></slot>
                </div>
            </div>
        `;
    }

    protected render(): TemplateResult {
        return this.href ? this._renderLinksTemplate() : this._renderBlockTemplate();
    }

    static styles: CSSResult = cardStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcCardTag]: AwcCard;
    }
}
