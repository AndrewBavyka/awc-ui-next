import { LitElement, TemplateResult, html, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AwcAvatarBadgeSize, AwcAvatarBadgeStatus } from './awc-avatar-badge.types';
import { awcAvatarBadgeStyle } from './awc-avatar-badge.style';
import { AWC_AVATAR_BADGE_ICONS } from './awc-avatar-badge.icons';

export const awcAvatarBadgeTag = 'awc-avatar-badge';

@customElement(awcAvatarBadgeTag)
export default class AwcAvatarBadge extends LitElement {
    @property({ type: String, reflect: true }) status: AwcAvatarBadgeStatus = 'none';
    @property({ type: String, reflect: true }) size: AwcAvatarBadgeSize = '12';

    protected render(): TemplateResult {
        return html` <div class="awc-avatar-badge">${AWC_AVATAR_BADGE_ICONS[this.status]}</div> `;
    }

    static styles?: CSSResult = awcAvatarBadgeStyle;
}
