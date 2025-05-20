import { CSSResult, LitElement, TemplateResult } from 'lit';
export declare const awcAccordionItemTag = "awc-accordion-item";
/**
 * @element awc-accordion-item
 * @fires awc-accordion-toggle - Событие активности элемента. Срабатывает при переключении активности.
 */
export default class AwcAccordionItem extends LitElement {
    /**
     * Заголовок элемента аккордеона
     * @property {String}
     * @default
     */
    title: string;
    /**
     * Активность элемента аккордеона
     * @property {Boolean}
     * @default false
     */
    active: boolean;
    /**
     * Отключение элемента аккордеона
     * @property {Boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * @event awc-accordion-toggle - Событие активности элемента. Срабатывает при переключении активности.
     * @type {EventDispatcher<boolean>}
     * @private
     */
    private _onActive;
    private _toggleActive;
    private _arrowDownSvg;
    protected render(): TemplateResult;
    static styles: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAccordionItemTag]: AwcAccordionItem;
    }
}
