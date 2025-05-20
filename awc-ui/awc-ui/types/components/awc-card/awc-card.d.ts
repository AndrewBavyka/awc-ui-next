import { LitElement, TemplateResult, CSSResult } from 'lit';
import { AwcCardType } from './awc-card.types';
export declare const awcCardTag = "awc-card";
export default class AwcCard extends LitElement {
    /**
     * Заголовок карточки.
     * @property {string}
     */
    title: string;
    /**C
     * Подзаголовок карточки.
     * @property {string}
     */
    subtitle: string;
    /**
     * Ссылка для карточки.
     * @property {string}
     */
    href: string;
    /**
     * Атрибут target для ссылки карточки.
     * @type {string}
     */
    target: AwcCardType;
    /**
     * Цвет иконки.
     * @property {string}
     */
    iconColor: string;
    /**
     * Флаг для отображения/скрытия стрелки для навигации.
     * @property {boolean}
     */
    arrow: boolean;
    private _iconSlot;
    _isModuleIcon: boolean;
    private _arrowIcon;
    private _changeBackgroundIconModule;
    private _renderLinksTemplate;
    private _renderBlockTemplate;
    protected render(): TemplateResult;
    static styles: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcCardTag]: AwcCard;
    }
}
