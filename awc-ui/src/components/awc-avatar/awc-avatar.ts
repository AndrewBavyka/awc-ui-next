import { LitElement, html, TemplateResult, CSSResult, PropertyValues, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { awcAvatarStyle } from './awc-avatar.style';
import { AwcAvatarBadgeStatus, AwcAvatarBadgeSize } from './awc-avatar-badge/awc-avatar-badge.types';
import { AwcAvatarColor, AwcAvatarIcon, AwcAvatarRounded, AwcAvatarSize, AwcAvatarTargetType } from './awc-avatar.types';
import { AWC_AVATAR_ICONS } from './awc-avatar.icons';
import { styleMap } from 'lit/directives/style-map.js';
import { deepQuerySelectorFromSlot } from '../../utilities/dom';
import AwcAvatarBadge from './awc-avatar-badge/awc-avatar-badge';

/**
 * Элемент для отображения аватарок.
 * @element awc-avatar
 */
export const awcAvatarTag = 'awc-avatar';
@customElement(awcAvatarTag)
export default class AwcAvatar extends LitElement {
    /**
     * Размер аватарки.
     * @type {AwcAvatarSize}
     * @default 36
     */
    @property({ type: String, reflect: true }) size: AwcAvatarSize = '36';
    /**
     * Форма аватарки.
     * @type {AwcAvatarRounded}
     * @default circle
     */
    @property({ type: String, reflect: true }) rounded: AwcAvatarRounded = 'circle';
    /**
     * Статус пользователя.
     * @type {string}
     * @default none
     */
    @property({ type: String, reflect: true }) status: AwcAvatarBadgeStatus = 'none';
    /**
     * Цвет аватарки.
     * @type {string}
     * @default global-blue-400
     */
    @property({ type: String, reflect: true }) color: AwcAvatarColor = 'global-blue-400';
    /**
     * Текст заголовка для аватарки.
     * @property {string}
     */
    @property({ type: String, reflect: true }) title: string;
    /**
     * Ссылка на изображение для аватарки.
     * @property {string}
     */
    @property({ type: String, attribute: 'image-link' }) imageLink?: string;
    /**
     * Задает адрес документа, на который следует перейти.
     * @property {string}
     */
    @property({ type: String, reflect: true }) href?: string;
    /**
     * Тип перехода по ссылке
     * @type {AwcAvatarTargetType}
     * @default _self
     */
    @property({ type: String }) target: AwcAvatarTargetType = '_self';
    /**
     * Принимает код hex цвета.
     * @property {string}
     */
    @property({ type: String, reflect: true, attribute: 'custom-color' }) customColor?: string;

    /**
     * Выбор иконки внутри аватара.
     * @property {AwcAvatarIcon}
     * @default none
     */
    @property({ type: String, reflect: true }) icon: AwcAvatarIcon = 'none';

    @state() private croppedTitle: string = '';
    @state() sliced: boolean = false;
    @state() hovered: boolean = false;

    private hasBadgeSlot(): boolean {
        const badgeElement = deepQuerySelectorFromSlot(this, 'awc-avatar-badge', 'awc-avatar-badge') as AwcAvatarBadge;

        if (badgeElement) {
            if ('size' in badgeElement) {
                badgeElement.size = this.getBadgeSize();
            }
            if ('status' in badgeElement) {
                badgeElement.status = this.status;
            }
        }

        return !!badgeElement;
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', () => {
            this.hasBadgeSlot();
        });
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        this.hasBadgeSlot();
    }

    protected updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);

        if (changedProperties.has('title')) {
            this.croppedTitle = this.trimTitle(this.title);
        }

        if (changedProperties.has('size') || changedProperties.has('status')) {
            this.hasBadgeSlot();
        }
    }

    private trimTitle(title: string): string {
        return title.length > 1 ? title.charAt(0).toUpperCase() : title;
    }

    private getBadgeSize(): AwcAvatarBadgeSize {
        const isOnlineOffline = this.status === 'online' || this.status === 'offline';

        const standardSizeMap: Record<AwcAvatarSize, AwcAvatarBadgeSize> = {
            '20': '8',
            '24': '10',
            '32': '12',
            '36': '12',
            '40': '12',
            '48': '14',
            '128': '32',
            '160': '32',
        };

        const onlineOfflineSizeMap: Record<AwcAvatarSize, AwcAvatarBadgeSize> = {
            '20': '4',
            '24': '4',
            '32': '5',
            '36': '5',
            '40': '6',
            '48': '8',
            '128': '32',
            '160': '32',
        };

        const sizeMap = isOnlineOffline ? onlineOfflineSizeMap : standardSizeMap;
        const badgeSize = sizeMap[this.size] || '12';

        return badgeSize;
    }

    private renderAvatarContent(): TemplateResult {
        if (this.imageLink) {
            return html` <img class="awc-avatar--image" src=${this.imageLink} alt=${this.title} loading="lazy" /> `;
        }

        if (this.icon !== 'none' && this.icon in AWC_AVATAR_ICONS) {
            return html` <span class="awc-avatar--no-image ${this.icon}"> ${AWC_AVATAR_ICONS[this.icon]} </span> `;
        }

        const styles = {
            backgroundColor: this.customColor || `var(--${this.color})`,
        };

        return html` <span style=${styleMap(styles)} class="awc-avatar--no-image" title="${this.title}"> ${this.croppedTitle} </span> `;
    }

    private renderStatus(): TemplateResult | typeof nothing {
        if (this.hasBadgeSlot() || this.status === 'none') {
            return nothing;
        }

        return html` <awc-avatar-badge status=${this.status} size=${this.getBadgeSize()}></awc-avatar-badge> `;
    }

    protected render(): TemplateResult {
        const avatarContent = html`
            <div class="awc-avatar${this.sliced ? ' awc-avatar--sliced' : ''} ${this.hovered ? 'awc-avatar--hovered' : ''}">
                ${this.renderAvatarContent()}
                <div class="awc-avatar__status">
                    ${this.renderStatus()}
                    <slot name="awc-avatar-badge"></slot>
                </div>
            </div>
        `;

        return this.href ? html`<a href=${this.href} target=${this.target}>${avatarContent}</a>` : html`${avatarContent}`;
    }

    static styles?: CSSResult = awcAvatarStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarTag]: AwcAvatar;
    }
}
