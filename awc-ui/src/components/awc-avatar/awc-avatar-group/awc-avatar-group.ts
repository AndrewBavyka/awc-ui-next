import { LitElement, html, TemplateResult, PropertyValues, CSSResult, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { avatarGroupStyle } from './awc-avatar-group.style';
import AwcAvatar from '../awc-avatar';
import AwcAvatarGroupCounter, { awcAvatarGroupCounterTag } from './awc-avatar-group-counter/awc-avatar-group-counter';
import { styleMap } from 'lit/directives/style-map.js';
import { AwcAvatarGroupCounterSize } from './awc-avatar-group-counter/awc-avatar-group-counter.types';
import { deepQuerySelectorFromSlot } from '../../../utilities/dom';

/**
 * Элемент аватар-группа.
 * @element awc-avatar-group
 */
export const awcAvatarGroupTag = 'awc-avatar-group';
@customElement(awcAvatarGroupTag)
export default class AwcAvatarGroup extends LitElement {
    /**
     * Количество отображаемых пользователей в группе.
     * @property {number}
     * @default 2
     */
    @property({ type: Number, attribute: 'display-users' }) displayUsers = 2;

    /**
     * Значение счетчика общего количества пользователей.
     * @property {number}
     * @default 0
     */
    @property({ type: Number, attribute: 'total-users' }) totalUsers = 0;

    /**
     * Размер счетчика пользователей в группе.
     * @property {string}
     * @default "24"
     */
    @property({ type: String, attribute: 'counter-size' }) counterSize: AwcAvatarGroupCounterSize = '24';

    /**
     * Форма счетчика пользователей в группе.
     * @property {string}
     * @default "circle"
     */
    @property({ type: String, attribute: 'counter-rounded' }) counterRounded: string = 'circle';

    @state() private counterValue: number = 0;
    @state() private counterHidden: boolean = false;

    @query('slot[name="awc-avatar-group-counter"]') _slottedCounter!: HTMLSlotElement;

    private get avatarCounter(): AwcAvatarGroupCounter | null {
        return this.querySelector<AwcAvatarGroupCounter>(awcAvatarGroupCounterTag);
    }

    private updateDisplayedUsers(): void {
        const slotElements = this.shadowRoot?.querySelector('slot')?.assignedElements()! as AwcAvatar[];

        if (!slotElements) return;

        slotElements.forEach((avatar, index) => {
            avatar.toggleAttribute('invisible', index >= this.displayUsers);
        });
    }

    private _applySliceEffect(): void {
        const counter = deepQuerySelectorFromSlot(this, 'awc-avatar-group-counter', 'awc-avatar-group-counter') as AwcAvatarGroupCounter;
        if (counter) {
            this._applyStylesToElement(counter);
        }

        const slot = this.shadowRoot?.querySelector('slot');
        const slotElements = slot?.assignedElements() as AwcAvatar[] | undefined;

        if (!slotElements) return;

        slotElements.forEach((avatar, index) => {
            this._applyHoverToElement(avatar);

            if (index !== 0) {
                this._applyStylesToElement(avatar);
            }
        });
    }

    private _applyStylesToElement(element: AwcAvatar | AwcAvatarGroupCounter): void {
        element.sliced = true;
    }

    private _applyHoverToElement(element: AwcAvatar) {
        if (element instanceof AwcAvatar) {
            element.hovered = true;
        }
    }

    private updateCounterValue(): void {
        if (this.avatarCounter) {
            this.counterHidden = this.counterValue === 0;
        } else {
            this.counterValue = Math.max(0, this.totalUsers - this.displayUsers);
            this.counterHidden = this.counterValue === 0;
        }
    }

    connectedCallback(): void {
        super.connectedCallback();

        document.addEventListener('DOMContentLoaded', () => {
            this.updateDisplayedUsers();
            this.updateCounterValue();
            this._applySliceEffect();
        });
    }

    protected firstUpdated(changedProperties: PropertyValues<this>): void {
        super.firstUpdated(changedProperties);

        this.updateDisplayedUsers();
        this.updateCounterValue();
        this._applySliceEffect();
    }

    protected updated(changedProperties: PropertyValues<this>): void {
        super.updated(changedProperties);

        if (changedProperties.has('displayUsers') || changedProperties.has('totalUsers')) {
            this.updateDisplayedUsers();
            this.updateCounterValue();
        }
    }

    protected render(): TemplateResult {
        return html`
            <div class="awc-avatar-group">
                <slot></slot>
                ${this.counterHidden
                    ? nothing
                    : html`<awc-avatar-group-counter
                          .totalUsers=${this.counterValue}
                          .counterSize=${this.counterSize}
                          style=${styleMap({ display: this.counterHidden ? 'none' : 'block', 'margin-left': -10 + 'px' })}
                      >
                      </awc-avatar-group-counter>`}
                <slot style=${styleMap({ 'margin-left': -10 + 'px' })} name="awc-avatar-group-counter"></slot>
            </div>
        `;
    }

    static styles?: CSSResult = avatarGroupStyle;
}

declare global {
    interface HTMLElementTagNameMap {
        [awcAvatarGroupTag]: AwcAvatarGroup;
    }
}
