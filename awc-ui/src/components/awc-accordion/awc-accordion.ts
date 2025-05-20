import { CSSResult, LitElement, PropertyValues, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import AwcAccordionItem, { awcAccordionItemTag } from './awc-accordion-item/awc-accordion-item';
import { accordionStyle } from './awc-accordion.style';

export const awcAccordionTag = 'awc-accordion';
/**
 * @element awc-accordion
 */

@customElement(awcAccordionTag)
export default class AwcAccordion extends LitElement {
    /**
     * Отключение группы
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) disabled = false;
    /**
     * Отключение автозакрытия элементов
     * @property {Boolean}
     * @default false
     */
    @property({ type: Boolean, reflect: true }) autoclose = false;

    get accordionItems(): AwcAccordionItem[] {
        return [...this.querySelectorAll(awcAccordionItemTag)];
    }

    private _autocloseAccordionItem(e: CustomEvent): void {
        if (!this.autoclose) return;

        const accordionItem = e.target as AwcAccordionItem;

        if (accordionItem.disabled && this.disabled) return;

        if (!accordionItem.active) {
            accordionItem.active = true;

            if (accordionItem.active) {
                accordionItem.active = false;
            }
        } else {
            this.accordionItems.forEach((item) => (item.active = false));
            accordionItem.active = true;
        }
    }

    private _handleAccordionItem(e: CustomEvent): void {
        this._autocloseAccordionItem(e);
    }

    private _shutdownAllAccordionItems(): void {
        if (this.disabled) {
            this.accordionItems.forEach((item) => (item.disabled = true));
        } else {
            this.accordionItems.forEach((item) => (item.disabled = false));
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if (_changedProperties.has('disabled')) this._shutdownAllAccordionItems();
    }

    protected render(): TemplateResult {
        return html`
            <div ?disabled=${this.disabled} class="awc-accordion">
                <slot @awc-accordion-toggle=${this._handleAccordionItem}></slot>
            </div>
        `;
    }

    static styles: CSSResult = accordionStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAccordionTag]: AwcAccordion;
    }
}
