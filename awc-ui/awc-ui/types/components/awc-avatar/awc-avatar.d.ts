import { LitElement, TemplateResult, CSSResult, PropertyValues } from "lit";
import { AwcAvatarBadgeStatus } from "./awc-avatar-badge/awc-avatar-badge.types";
import { AwcAvatarColor, AwcAvatarIcon, AwcAvatarRounded, AwcAvatarSize, AwcAvatarTargetType } from "./awc-avatar.types";
/**
 * Элемент для отображения аватарок.
 * @element awc-avatar
 */
export declare const awcAvatarTag = "awc-avatar";
export default class AwcAvatar extends LitElement {
    /**
     * Размер аватарки.
     * @type {AwcAvatarSize}
     * @default 36
     */
    size: AwcAvatarSize;
    /**
     * Форма аватарки.
     * @type {AwcAvatarRounded}
     * @default circle
     */
    rounded: AwcAvatarRounded;
    /**
     * Статус пользователя.
     * @type {string}
     * @default none
     */
    status: AwcAvatarBadgeStatus;
    /**
     * Цвет аватарки.
     * @type {string}
     * @default global-blue-400
     */
    color: AwcAvatarColor;
    /**
     * Текст заголовка для аватарки.
     * @property {string}
     */
    title: string;
    /**
     * Ссылка на изображение для аватарки.
     * @property {string}
     */
    imageLink?: string;
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {string}
     */
    href?: string;
    /**
    * Тип перехода по ссылке
    * @type {AwcAvatarTargetType}
    * @default _self
    */
    target: AwcAvatarTargetType;
    /**
     * Принимает код hex цвета.
     * @property {string}
     */
    customColor?: string;
    /**
     * Выбор иконки внутри аватара.
     * @property {AwcAvatarIcon}
     * @default none
     */
    icon: AwcAvatarIcon;
    private croppedTitle;
    sliced: boolean;
    hovered: boolean;
    private hasBadgeSlot;
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private trimTitle;
    private getBadgeSize;
    private renderAvatarContent;
    private renderStatus;
    protected render(): TemplateResult;
    static styles?: CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarTag]: AwcAvatar;
    }
}
