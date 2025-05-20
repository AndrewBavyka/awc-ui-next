import { LitElement } from 'lit';
import '../awc-icon-loader/awc-icon-loader';
export declare const awcIconTag = "awc-icon";
/**
 * Элемент для отображения иконок.
 * @element awc-icon
 */
export default class AwcIcon extends LitElement {
    /**
     * Элемент для отображения иконок.
     * @property {String} type - Тип иконки (например, 'module').
     */
    type: string;
    /**
     * Указываеся размер иконки
     * @property {String} size - Размер иконки (например, '16').
     * @default 16
     */
    size: string;
    /**
     * Имя или идентификатор конкретной иконки.
     * @property {String} name
     */
    name: string;
    /**
     * Изменение размеров иконки
     * @property {String} iconScale
     */
    iconScale: string;
    private _getGlobalIcon;
    protected render(): import("lit-html").TemplateResult<2> | undefined;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        [awcIconTag]: AwcIcon;
    }
}
