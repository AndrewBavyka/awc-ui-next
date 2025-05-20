import { LitElement, TemplateResult } from 'lit';
export declare enum Spacing {
    None = "none",
    XXS = "2xs",
    XS = "xs",
    S = "s",
    SM = "sm",
    M = "m",
    L = "l",
    XL = "xl",
    XXL = "2xl",
    XXXL = "3xl"
}
/**
 * Элемент-разделитель.
 * @element awc-divider
 */
export default class AwcDivider extends LitElement {
    /**
     * Название label
     * @type {String}
     * @default ''
     */
    label: string;
    /**
     * Отступы
     * @type {String}
     * @default 'l'
     */
    spacing: Spacing;
    protected render(): TemplateResult;
    /**
     * @ignore
     */
    static styles: import("lit").CSSResult[];
}
