import { LitElement, html, TemplateResult, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { popoverStyle } from './awc-popover.style';
import { EventDispatcher, event } from '../../utilities/event';
import { setupFloating, PositioningOptions } from '../../utilities/floating-utils';
import { AwcPopoverPosition, AwcPopoverSpacing, AwcPopoverStrategy, AwcPopoverTriggerType } from './awc-popover.type';

/**
 * @tagname awc-popover
 * @description Поддерживает позиционирование относительно дочернего элемента, настройку внешнего вида и программное управление видимостью всплывающего окна.
 *
 * @fires awc-popover-open - Событие, генерируемое при открытии всплывающего окна.
 * @fires awc-popover-close - Событие, генерируемое при закрытии всплывающего окна.
 *
 * @cssproperty [--awc-popover-display:contents] - Устанавливает отображение контейнера popover.
 * @cssproperty [--awc-popover-min-width] - Минимальная ширина всплывающего окна.
 * @cssproperty [--awc-popover-max-width] - Максимальная ширина всплывающего окна.
 * @cssproperty [--awc-popover-min-height:10px] - Минимальная высота всплывающего окна.
 * @cssproperty [--awc-popover-max-height:300px] - Максимальная высота всплывающего окна.
 * @cssproperty [--awc-popover-padding:12px] - Внутренний отступ всплывающего окна.
 */

export const awcPopoverTag = 'awc-popover';
@customElement(awcPopoverTag)
export default class AwcPopover extends LitElement {
    /**
     * Позиция всплывающего окна относительно элемента.
     *
     * @property {AwcPopoverPosition}
     * @default top
     */
    @property({ type: String, reflect: true }) position: AwcPopoverPosition = 'top';

    /**
     * Стратегия позиционирования всплывающего окна (absolute или fixed).
     *
     * @property {AwcPopoverStrategy}
     * @default absolute
     */
    @property({ type: String, reflect: true }) strategy: AwcPopoverStrategy = 'absolute';

    /**
     * Тип триггера для открытия всплывающего окна (click, hover, focus, manual).
     *
     * @property {AwcPopoverTriggerType}
     * @default click
     * @attribute trigger-type
     */
    @property({ type: String, reflect: true, attribute: 'trigger-type' }) triggerType: AwcPopoverTriggerType = 'click';

    /**
     * Расстояние в пикселях между всплывающим окном и элементом.
     *
     * @type {AwcPopoverSpacing}
     * @default 8
     */
    @property({ type: Number, reflect: true }) spacing: AwcPopoverSpacing = 8;

    /**
     * Определяет, видно ли всплывающее окно в данный момент.
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) active = false;

    /**
     * Отключает взаимодействие с всплывающим окном (например, при наведении, клике или фокусе).
     *
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Убирает внутренние отступы у всплывающего окна.
     *
     * @property {Boolean}
     * @default false
     * @attribute no-padding
     */
    @property({ type: Boolean, reflect: true, attribute: 'no-padding' }) noPadding = false;

    /**
     * Автоматически устанавливает ширину popover равной ширине связанного элемента (reference).
     *
     * @property {Boolean}
     * @default false
     * @attribute match-reference-width
     */
    @property({ type: Boolean, reflect: true, attribute: 'match-reference-width' }) matchReferenceWidth = false;

    /**
     * Событие, генерируемое при открытии всплывающего окна.
     *
     * @event awc-popover-open
     * @type {EventDispatcher<boolean>}
     */
    @event('awc-popover-open') private _popoverOpenEvent: EventDispatcher<boolean>;

    /**
     * Событие, генерируемое при закрытии всплывающего окна.
     *
     * @event awc-popover-close
     * @type {EventDispatcher<boolean>}
     */
    @event('awc-popover-close') private _popoverCloseEvent: EventDispatcher<boolean>;
    @event('awc-popover-toggle') private _popoverToggleEvent: EventDispatcher<AwcPopover>;

    @query('.awc-popover') private popoverEl!: HTMLElement;
    @query('slot') private slotEl!: HTMLSlotElement;

    private cleanupFloating: (() => void) | null = null;
    private _hoverTimeout: number | null = null;
    private referenceEl: HTMLElement | null = null;

    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('mouseenter', this._onMouseEnter);
        this.addEventListener('mouseleave', this._onMouseLeave);
        this.addEventListener('focusin', this._onFocus);
        this.addEventListener('focusout', this._onBlur);
        this.addEventListener('click', this._onClick);
        this.addEventListener('slotchange', this.handleSlotChange);
        document.addEventListener('awc-popover-toggle', this._handlePopoverToggle as EventListener);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener('mouseenter', this._onMouseEnter);
        this.removeEventListener('mouseleave', this._onMouseLeave);
        this.removeEventListener('focusin', this._onFocus);
        this.removeEventListener('focusout', this._onBlur);
        this.removeEventListener('click', this._onClick);
        this.removeEventListener('slotchange', this.handleSlotChange);
        document.removeEventListener('awc-popover-toggle', this._handlePopoverToggle as EventListener);
        this._removeOutsideClickHandler();
        this.cleanupFloating?.();
        if (this._hoverTimeout) clearTimeout(this._hoverTimeout);
    }

    private _handleOutsideClick = (event: MouseEvent): void => {
        const path = event.composedPath();
        if (!path.includes(this)) {
            this.hide();
        }
    };

    private _addOutsideClickHandler(): void {
        document.addEventListener('click', this._handleOutsideClick);
    }

    private _removeOutsideClickHandler(): void {
        document.removeEventListener('click', this._handleOutsideClick);
    }

    private _onMouseEnter = (): void => {
        if (!this.disabled && this.triggerType === 'hover') {
            if (this._hoverTimeout) clearTimeout(this._hoverTimeout);
            this.show();
        }
    };

    private _onMouseLeave = (): void => {
        if (!this.disabled && this.triggerType === 'hover') {
            this._hoverTimeout = window.setTimeout(() => this.hide(), 200);
        }
    };

    private _onFocus = (): void => {
        if (!this.disabled && this.triggerType === 'focus') this.show();
    };

    private _onBlur = (): void => {
        if (!this.disabled && this.triggerType === 'focus' && !this.contains(document.activeElement)) {
            this.hide();
        }
    };

    private _onClick = (): void => {
        if (!this.disabled && this.triggerType === 'click') {
            this.active ? this.hide() : this.show();
        }
    };

    private _handlePopoverToggle = (e: CustomEvent<AwcPopover>): void => {
        if (e.detail !== this && this.active) {
            this.hide();
        }
    };

    private handleSlotChange = () => {
        if (!this.slotEl) return;

        const assignedElements = this.slotEl.assignedElements({ flatten: true }) as HTMLElement[];
        this.referenceEl = assignedElements[0] || null;

        if (this.active) this.updatePosition();
    };

    private getValidSpacing(): number {
        const parsedSpacing = Number(this.spacing);
        return isNaN(parsedSpacing) ? 8 : parsedSpacing;
    }

    private updatePosition(): Promise<void> {
        if (!this.popoverEl || !this.referenceEl || this.disabled) {
            return Promise.resolve();
        }

        this.cleanupFloating?.();

        const options: PositioningOptions = {
            position: this.position as PositioningOptions['position'],
            strategy: this.strategy,
            spacing: this.getValidSpacing(),
            matchReferenceWidth: this.matchReferenceWidth,
            onPlacementChange: (newPlacement) => {
                this.position = newPlacement;
            },
        };

        return new Promise((resolve) => {
            this.cleanupFloating = setupFloating(this.referenceEl!, this.popoverEl, null, options);
            requestAnimationFrame(() => resolve());
        });
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('active')) {
            if (this.active) {
                this.updatePosition();
                this._popoverOpenEvent(true);
                this._popoverToggleEvent(this);
            } else {
                this.cleanupFloating?.();
                this._popoverCloseEvent(true);
            }
        }

        if (_changedProperties.has('position') || _changedProperties.has('spacing') || _changedProperties.has('strategy')) {
            if (this.active) this.updatePosition();
        }
    }

    /**
     * @method show
     * @description Программно открывает всплывающее окно.
     * @fires awc-popover-open
     */
    show(): void {
        if (!this.disabled && !this.active) {
            this.active = true;
            if (this.triggerType === 'click') {
                this._addOutsideClickHandler();
            }
        }
    }

    /**
     * @method hide
     * @description Программно закрывает всплывающее окно.
     * @fires awc-popover-close
     */
    hide(): void {
        if (!this.disabled && this.active) {
            this.active = false;
            if (this.triggerType === 'click') {
                this._removeOutsideClickHandler();
            }
        }
    }

    protected render(): TemplateResult {
        const popoverClasses = {
            'awc-popover': true,
            visible: this.active,
            'awc-popover--no-padding': this.noPadding,
        };

        return html`
            <slot @slotchange=${this.handleSlotChange}></slot>
            <div class=${classMap(popoverClasses)}>
                <slot name="awc-popover-content"></slot>
            </div>
        `;
    }

    static styles?: CSSResultGroup = [popoverStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcPopoverTag]: AwcPopover;
    }

    interface AwcPopover {
        show(): void;
        hide(): void;
    }
}
