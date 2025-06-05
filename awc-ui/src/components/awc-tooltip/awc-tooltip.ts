import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { awcTooltipStyle } from './awc-tooltip.style';
import { AwcTooltipPosition, AwcTooltipSpacing, AwcTooltipStrategy } from './awc-tooltip.types';
import { event, EventDispatcher } from '../../utilities/event';
import AwcTooltipMessage, { awcTooltipMessageTag } from './awc-tooltip-message/awc-tooltip-message';

export const awcTooltipTag = 'awc-tooltip';

/**
 *
 * @tagname awc-tooltip
 * @description Поддерживает позиционирование относительно дочернего элемента, настройку внешнего вида и программное управление видимостью.
 *
 * @fires awc-tooltip-show - Событие, генерируемое при показе тултипа.
 * @fires awc-tooltip-hide - Событие, генерируемое при скрытии тултипа.
 *
 * @cssproperty [--awc-tooltip-display:block] - Устанавливает блочное отображение кнопки.
 */
@customElement(awcTooltipTag)
export default class AwcTooltip extends LitElement {
    /**
     * Текст сообщения, отображаемого в тултипе.
     *
     * @property {String}
     * @default Tooltip
     */
    @property({ type: String, reflect: true }) message = 'Tooltip';

    /**
     * Позиция тултипа относительно элемента.
     *
     * @property {AwcTooltipPosition}
     * @default top
     */
    @property({ type: String, reflect: true }) position: AwcTooltipPosition = 'top';

    /**
     * Стратегия позиционирования тултипа (absolute или fixed).
     *
     * @property {AwcTooltipStrategy}
     * @default absolute
     */
    @property({ type: String, reflect: true }) strategy: AwcTooltipStrategy = 'absolute';

    /**
     * Расстояние в пикселях между тултипом и элементом.
     *
     * @type {AwcTooltipSpacing}
     * @default 8
     */
    @property({ type: Number, reflect: true }) spacing: AwcTooltipSpacing = 8;

    /**
     * Показывать ли стрелку, указывающую на элемент.
     *
     * @property {Boolean}
     * @default true
     */
    @property({ type: Boolean, reflect: true }) marker = true;

    /**
     * Определяет, виден ли тултип в данный момент.
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) active = false;

    /**
     * Отключает взаимодействие с тултипом (например, при наведении или клике).
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Растягивает ширину тултипа до ширины дочернего элемента.
     *
     * @property {Boolean}
     * @default false
     * @attribute match-width
     */
    @property({ type: Boolean, reflect: true, attribute: 'match-width' }) matchWidth = false;

    /**
     * Указывает, в какой элемент DOM будет помещён awc-tooltip-message.
     *
     * @property {Boolean}
     * @default body
     */

    @property({ type: String, reflect: true }) target = 'body';
    /**
     * Отключение порталиннга
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, attribute: 'portal-off' }) portalOff = false;

    /**
     * Событие, генерируемое при открытии тултипа.
     *
     * @event awc-tooltip-show
     * @type {EventDispatcher<boolean>}
     */
    @event('awc-tooltip-show') private _onShowEvent: EventDispatcher<boolean>;

    /**
     * Событие, генерируемое при скрытии тултипа.
     *
     * @event awc-tooltip-hide
     * @type {EventDispatcher<boolean>}
     */
    @event('awc-tooltip-hide') private _onHideEvent: EventDispatcher<boolean>;

    @query('slot') private slotEl!: HTMLSlotElement;
    @query(awcTooltipMessageTag) private tooltipMessageEl?: AwcTooltipMessage;

    private static tooltipMessage: AwcTooltipMessage | null = null;
    private static activeTooltip: AwcTooltip | null = null;

    private referenceEl: HTMLElement | null = null;
    private showTimeout: number | null = null;
    private wasHiddenByVisibility = false;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    connectedCallback() {
        super.connectedCallback();
        if (!this.portalOff) {
            this.ensureTooltipMessage();
        }
        this.addEventListener('mouseenter', () => this.showTooltip());
        this.addEventListener('mouseleave', () => this.hideTooltip());
        this.addEventListener('focusin', this.handleFocusIn);
        this.addEventListener('focusout', this.handleFocusOut);
        this.addEventListener('slotchange', this.handleSlotChange);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mouseenter', () => this.showTooltip());
        this.removeEventListener('mouseleave', () => this.hideTooltip());
        this.removeEventListener('focusin', this.handleFocusIn);
        this.removeEventListener('focusout', this.handleFocusOut);
        this.removeEventListener('slotchange', this.handleSlotChange);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);

        if (this.showTimeout !== null) clearTimeout(this.showTimeout);

        if (AwcTooltip.activeTooltip === this) {
            this.hideTooltip();
        }
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        if (
            changedProperties.has('message') ||
            changedProperties.has('position') ||
            changedProperties.has('strategy') ||
            changedProperties.has('spacing') ||
            changedProperties.has('marker') ||
            changedProperties.has('active') ||
            changedProperties.has('matchWidth') ||
            changedProperties.has('target') ||
            changedProperties.has('portalOff')
        ) {
            if (this.active && AwcTooltip.activeTooltip === this) {
                this.updateTooltipMessage();
            }
        }
        if (changedProperties.has('spacing') && isNaN(Number(this.spacing))) {
            this.spacing = 8;
        }
        if (changedProperties.has('portalOff') && !this.portalOff && this.active) {
            this.ensureTooltipMessage();
            this.updateTooltipMessage();
        }
    }

    private handleSlotChange = () => {
        const assignedElements = this.slotEl.assignedElements({ flatten: true }) as HTMLElement[];
        this.referenceEl = assignedElements[0] || null;
        if (this.active && AwcTooltip.activeTooltip === this) {
            this.updateTooltipMessage();
        }
    };

    private ensureTooltipMessage() {
        if (!this.portalOff && !AwcTooltip.tooltipMessage) {
            AwcTooltip.tooltipMessage = document.createElement(awcTooltipMessageTag) as AwcTooltipMessage;
            const targetElement = document.querySelector(this.target) || document.body;
            targetElement.appendChild(AwcTooltip.tooltipMessage);
        }
    }

    private updateTooltipMessage() {
        const tooltipMessage = this.portalOff ? this.tooltipMessageEl : AwcTooltip.tooltipMessage;
        if (tooltipMessage && this.referenceEl) {
            tooltipMessage.message = this.message;
            tooltipMessage.position = this.position;
            tooltipMessage.strategy = this.strategy;
            tooltipMessage.spacing = this.spacing;
            tooltipMessage.marker = this.marker;
            tooltipMessage.active = this.active;
            tooltipMessage.matchWidth = this.matchWidth;
            tooltipMessage.referenceEl = this.referenceEl;
        }
    }

    private showTooltip = (immediate = false) => {
        if (!this.disabled) {
            if (this.showTimeout !== null) {
                clearTimeout(this.showTimeout);
            }
            const show = () => {
                if (AwcTooltip.activeTooltip && AwcTooltip.activeTooltip !== this) {
                    AwcTooltip.activeTooltip.active = false;
                    AwcTooltip.activeTooltip._onHideEvent(true);
                }
                AwcTooltip.activeTooltip = this;
                this.active = true;
                this.updateTooltipMessage();
                this.showTimeout = null;
                this.wasHiddenByVisibility = false;
                this._onShowEvent(true);
            };
            if (immediate) {
                show();
            } else {
                this.showTimeout = window.setTimeout(show, 300);
            }
        }
    };

    private hideTooltip = () => {
        if (!this.disabled) {
            if (this.showTimeout !== null) {
                clearTimeout(this.showTimeout);
                this.showTimeout = null;
            }
            if (AwcTooltip.activeTooltip === this) {
                this.active = false;
                this.updateTooltipMessage();
                AwcTooltip.activeTooltip = null;
                this._onHideEvent(true);
            }
        }
    };

    private handleFocusIn = (event: FocusEvent) => {
        if (!this.contains(event.target as Node)) return;
        if (!this.wasHiddenByVisibility) {
            this.showTooltip(true);
        }
    };

    private handleFocusOut = () => {
        if (!this.contains(document.activeElement)) {
            this.hideTooltip();
        }
    };

    private handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden' && this.active) {
            this.wasHiddenByVisibility = true;
            this.hideTooltip();
        } else if (document.visibilityState === 'visible') {
            setTimeout(() => (this.wasHiddenByVisibility = false), 100);
        }
    };

    public show(): void {
        this.showTooltip(true);
    }

    public hide(): void {
        this.hideTooltip();
    }

    protected render(): TemplateResult {
        return html`
            <slot @slotchange=${this.handleSlotChange}></slot>
            ${this.portalOff
                ? html`
                      <awc-tooltip-message
                          .message=${this.message}
                          .position=${this.position}
                          .strategy=${this.strategy}
                          .spacing=${this.spacing}
                          .marker=${this.marker}
                          .active=${this.active}
                          .matchWidth=${this.matchWidth}
                          .referenceEl=${this.referenceEl}
                      ></awc-tooltip-message>
                  `
                : ''}
        `;
    }

    static styles: CSSResult = awcTooltipStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcTooltipTag]: AwcTooltip;
    }

    interface AwcTooltip {
        show(): void;
        hide(): void;
    }
}
