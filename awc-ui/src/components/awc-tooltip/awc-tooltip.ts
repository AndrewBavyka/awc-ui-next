import { LitElement, html, TemplateResult, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { awcTooltipStyle } from './awc-tooltip.style';
import { AwcTooltipPosition, AwcTooltipSpacing, AwcTooltipStrategy } from './awc-tooltip.types';
import { setupFloating } from '../../utilities/floating-utils';
import { event, EventDispatcher } from '../../utilities/event';

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
export const awcTooltipTag = 'awc-tooltip';

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
     * Событие, генерируемое при показе тултипа.
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

    @query('.awc-tooltip') private tooltipEl!: HTMLElement;
    @query('.awc-tooltip__arrow') private arrowEl!: HTMLElement;
    @query('slot') private slotEl!: HTMLSlotElement;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    private cleanupFloating: (() => void) | null = null;
    private showTimeout: number | null = null;
    private referenceEl: HTMLElement | null = null;
    private wasHiddenByVisibility = false;

    connectedCallback() {
        super.connectedCallback();

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
        this.cleanupFloating?.();

        if (this.showTimeout !== null) clearTimeout(this.showTimeout);
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);

        if (
            (changedProperties.has('active') && this.active) ||
            changedProperties.has('position') ||
            changedProperties.has('spacing') ||
            changedProperties.has('strategy') ||
            changedProperties.has('matchWidth')
        ) {
            this.updatePosition();
        }

        if (changedProperties.has('spacing') && isNaN(Number(this.spacing))) {
            this.spacing = 8;
        }
    }

    private handleSlotChange = () => {
        const assignedElements = this.slotEl.assignedElements({ flatten: true }) as HTMLElement[];
        this.referenceEl = assignedElements[0] || null;

        if (this.active) this.updatePosition();
    };

    private showTooltip = (immediate = false) => {
        if (!this.disabled) {
            if (this.showTimeout !== null) {
                clearTimeout(this.showTimeout);
            }

            const show = async () => {
                await this.updatePosition();
                this.active = true;
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
            this.active = false;
            this.cleanupFloating?.();
            this._onHideEvent(true);
        }
    };

    private handleFocusIn = async (event: FocusEvent) => {
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

    private getValidSpacing(): number {
        const parsedSpacing = Number(this.spacing);
        return isNaN(parsedSpacing) ? 8 : parsedSpacing;
    }

    private updatePosition(): Promise<void> {
        if (!this.tooltipEl || this.disabled || !this.referenceEl) {
            return Promise.resolve();
        }

        this.cleanupFloating?.();

        if (this.matchWidth) {
            const referenceWidth = this.referenceEl.getBoundingClientRect().width;
            this.tooltipEl.style.width = `${referenceWidth}px`;
        } else {
            this.tooltipEl.style.width = '';
        }

        return new Promise((resolve) => {
            this.cleanupFloating = setupFloating(this.referenceEl!, this.tooltipEl, this.marker ? this.arrowEl : null, {
                position: this.position,
                strategy: this.strategy,
                spacing: this.getValidSpacing(),
            });
            requestAnimationFrame(() => resolve());
        });
    }

    /**
     * @method show
     * @description Программно показывает тултип.
     * @fires awc-tooltip-show
     */
    public show(): void {
        this.showTooltip(true);
    }

    /**
     * @method hide
     * @description Программно скрывает тултип.
     * @fires awc-tooltip-hide
     */
    public hide(): void {
        this.hideTooltip();
    }

    protected render(): TemplateResult {
        return html`
            <slot @slotchange=${this.handleSlotChange}></slot>
            <div class="awc-tooltip ${this.active ? 'visible' : ''}" role="tooltip">
                <p class="awc-tooltip__message">${this.message}</p>
                ${this.marker ? html`<div class="awc-tooltip__arrow" data-popper-arrow></div>` : ''}
            </div>
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
