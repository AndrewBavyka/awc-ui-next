import { LitElement, TemplateResult, CSSResult } from 'lit';
import { AwcTooltipPosition, AwcTooltipSpacing, AwcTooltipStrategy } from './awc-tooltip.types';
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
export declare const awcTooltipTag = "awc-tooltip";
export default class AwcTooltip extends LitElement {
    /**
     * Текст сообщения, отображаемого в тултипе.
     *
     * @property {String}
     * @default Tooltip
     */
    message: string;
    /**
     * Позиция тултипа относительно элемента.
     *
     * @property {AwcTooltipPosition}
     * @default top
     */
    position: AwcTooltipPosition;
    /**
     * Стратегия позиционирования тултипа (absolute или fixed).
     *
     * @property {AwcTooltipStrategy}
     * @default absolute
     */
    strategy: AwcTooltipStrategy;
    /**
     * Расстояние в пикселях между тултипом и элементом.
     *
     * @type {AwcTooltipSpacing}
     * @default 8
     */
    spacing: AwcTooltipSpacing;
    /**
     * Показывать ли стрелку, указывающую на элемент.
     *
     * @property {Boolean}
     * @default true
     */
    marker: boolean;
    /**
     * Определяет, виден ли тултип в данный момент.
     *
     * @property {Boolean}
     * @default false
     */
    active: boolean;
    /**
     * Отключает взаимодействие с тултипом (например, при наведении или клике).
     *
     * @property {Boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * Растягивает ширину тултипа до ширины дочернего элемента.
     *
     * @property {Boolean}
     * @default false
     * @attribute match-width
     */
    matchWidth: boolean;
    /**
     * Событие, генерируемое при показе тултипа.
     *
     * @event awc-tooltip-show
     * @type {EventDispatcher<boolean>}
     */
    private _onShowEvent;
    /**
     * Событие, генерируемое при скрытии тултипа.
     *
     * @event awc-tooltip-hide
     * @type {EventDispatcher<boolean>}
     */
    private _onHideEvent;
    private tooltipEl;
    private arrowEl;
    private slotEl;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    private cleanupFloating;
    private showTimeout;
    private referenceEl;
    private wasHiddenByVisibility;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private handleSlotChange;
    private showTooltip;
    private hideTooltip;
    private handleFocusIn;
    private handleFocusOut;
    private handleVisibilityChange;
    private getValidSpacing;
    private updatePosition;
    /**
     * @method show
     * @description Программно показывает тултип.
     * @fires awc-tooltip-show
     */
    show(): void;
    /**
     * @method hide
     * @description Программно скрывает тултип.
     * @fires awc-tooltip-hide
     */
    hide(): void;
    protected render(): TemplateResult;
    static styles: CSSResult;
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
