import { CSSResult, LitElement, PropertyValues, TemplateResult } from 'lit';
import AwcAccordionItem from './awc-accordion-item/awc-accordion-item';
export declare const awcAccordionTag = "awc-accordion";
/**
 * @element awc-accordion
 */
export default class AwcAccordion extends LitElement {
    /**
     * Отключение группы
     * @property {Boolean}
     * @default false
     */
    disabled: boolean;
    /**
     * Отключение автозакрытия элементов
     * @property {Boolean}
     * @default false
     */
    autoclose: boolean;
    get accordionItems(): AwcAccordionItem[];
    private _autocloseAccordionItem;
    private _handleAccordionItem;
    private _shutdownAllAccordionItems;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    static styles: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAccordionTag]: AwcAccordion;
    }
}
