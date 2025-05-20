import { LitElement, html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { avatarCounterStyle } from './awc-avatar-group-counter.style';
import { AwcAvatarGroupCounterSize } from './awc-avatar-group-counter.types';

export const awcAvatarGroupCounterTag = 'awc-avatar-group-counter';

@customElement(awcAvatarGroupCounterTag)
export default class AwcAvatarGroupCounter extends LitElement {
    /**
     * Значение счетчика общего количества пользователей.
     * @property {number}
     * @default 0
     */
    @property({ type: Number, attribute: 'total-users', reflect: true }) totalUsers = 0;
    /**
     * Размер счетчика пользователей в группе.
     * @property {AwcAvatarGroupCounterSize}
     * @default 24
     */
    @property({ type: String, attribute: 'counter-size', reflect: true }) counterSize: AwcAvatarGroupCounterSize = '24';
    /**
     * Форма счетчика пользователей в группе.
     * @property {string}
     * @default circle
     * @example "circle"
     */
    @property({ attribute: 'counter-rounded', reflect: true }) counterRounded = 'circle';

    @state() sliced: boolean = false;

    protected render(): TemplateResult {
        return html`
            <div class="awc-avatar-group__counter${this.sliced ? ' awc-avatar-group__counter--sliced' : ''}">
                <p>+${this.totalUsers}</p>
            </div>
        `;
    }

    static styles?: CSSResultGroup = [avatarCounterStyle];
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarGroupCounterTag]: AwcAvatarGroupCounter;
    }
}
