import { LitElement, TemplateResult, CSSResultGroup, PropertyValueMap } from 'lit';
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
export declare const awcPopoverTag = "awc-popover";
export default class AwcPopover extends LitElement {
    /**
     * Позиция всплывающего окна относительно элемента.
     *
     * @property {AwcPopoverPosition}
     * @default top
     */
    position: AwcPopoverPosition;
    /**
     * Стратегия позиционирования всплывающего окна (absolute или fixed).
     *
     * @property {AwcPopoverStrategy}
     * @default absolute
     */
    strategy: AwcPopoverStrategy;
    /**
     * Тип триггера для открытия всплывающего окна (click, hover, focus, manual).
     *
     * @property {AwcPopoverTriggerType}
     * @default click
     * @attribute trigger-type
     */
    triggerType: AwcPopoverTriggerType;
    /**
     * Расстояние в пикселях между всплывающим окном и элементом.
     *
     * @type {AwcPopoverSpacing}
     * @default 8
     */
    spacing: AwcPopoverSpacing;
    /**
     * Определяет, видно ли всплывающее окно в данный момент.
     *
     * @property {Boolean}
     * @default false
     */
    active: boolean;
    /**
     * Отключает взаимодействие с всплывающим окном (например, при наведении, клике или фокусе).
     *
     * @property {Boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * Убирает внутренние отступы у всплывающего окна.
     *
     * @property {Boolean}
     * @default false
     * @attribute no-padding
     */
    noPadding: boolean;
    /**
     * Автоматически устанавливает ширину popover равной ширине связанного элемента (reference).
     *
     * @property {Boolean}
     * @default false
     * @attribute match-reference-width
     */
    matchReferenceWidth: boolean;
    /**
     * Событие, генерируемое при открытии всплывающего окна.
     *
     * @event awc-popover-open
     * @type {EventDispatcher<boolean>}
     */
    private _popoverOpenEvent;
    /**
     * Событие, генерируемое при закрытии всплывающего окна.
     *
     * @event awc-popover-close
     * @type {EventDispatcher<boolean>}
     */
    private _popoverCloseEvent;
    private _popoverToggleEvent;
    private popoverEl;
    private slotEl;
    private cleanupFloating;
    private _hoverTimeout;
    private referenceEl;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleOutsideClick;
    private _addOutsideClickHandler;
    private _removeOutsideClickHandler;
    private _onMouseEnter;
    private _onMouseLeave;
    private _onFocus;
    private _onBlur;
    private _onClick;
    private _handlePopoverToggle;
    private handleSlotChange;
    private getValidSpacing;
    private updatePosition;
    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    /**
     * @method show
     * @description Программно открывает всплывающее окно.
     * @fires awc-popover-open
     */
    show(): void;
    /**
     * @method hide
     * @description Программно закрывает всплывающее окно.
     * @fires awc-popover-close
     */
    hide(): void;
    protected render(): TemplateResult;
    static styles?: CSSResultGroup;
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
